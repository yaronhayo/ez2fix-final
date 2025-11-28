import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import type { Review } from '@data/reviews';
import { Icon } from './Icon';

interface ReviewsCarouselProps {
    reviews: Review[];
    autoPlayInterval?: number;
}

export default function ReviewsCarousel({ reviews, autoPlayInterval = 7000 }: ReviewsCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const liveRegionRef = useRef<HTMLDivElement>(null);

    const resetTimeout = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, [reviews.length]);

    useEffect(() => {
        if (!isPaused) {
            resetTimeout();
            timeoutRef.current = setTimeout(nextSlide, autoPlayInterval);
        }
        return resetTimeout;
    }, [currentIndex, isPaused, autoPlayInterval, nextSlide, resetTimeout]);

    const handleGoToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    const handleNext = () => {
        nextSlide();
    };

    const handlePausePlay = () => {
        setIsPaused((prev) => !prev);
    };

    const visibleReviews = useMemo(() => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            visible.push(reviews[(currentIndex + i) % reviews.length]);
        }
        return visible;
    }, [currentIndex, reviews]);

    // Announce slide changes to screen readers
    useEffect(() => {
        if (liveRegionRef.current) {
            liveRegionRef.current.textContent = `Showing review ${currentIndex + 1} of ${reviews.length}`;
        }
    }, [currentIndex, reviews.length]);

    return (
        <div
            ref={carouselRef}
            className="relative max-w-7xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => !document.activeElement?.closest || !carouselRef.current?.contains(document.activeElement) ? setIsPaused(false) : null}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            role="region"
            aria-roledescription="carousel"
            aria-label="Customer reviews"
        >
            {/* This visually hidden div is for screen readers to announce slide changes */}
            <div ref={liveRegionRef} className="sr-only" aria-live="polite" aria-atomic="true"></div>

            <div className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out" role="group">
                    {visibleReviews.map((review, idx) => (
                        <div
                            key={review.id}
                            className={`bg-white rounded-xl shadow-lg border border-gold-200/20 h-full flex flex-col p-6 ${idx > 0 ? 'hidden md:flex' : 'flex'}`}
                            role="group"
                            aria-roledescription="slide"
                            aria-label={`Review from ${review.author}`}
                        >
                            <div className="flex items-center mb-4">
                                <div className="flex text-gold-400">
                                    <span className="sr-only">Rated {review.rating} out of 5 stars</span>
                                    {[...Array(5)].map((_, i) => (
                                        <Icon key={i} name="star" className="w-5 h-5 fill-current" aria-hidden="true" />
                                    ))}
                                </div>
                                <span className="ml-2 text-sm text-dark-500">{review.relativeTime}</span>
                            </div>
                            <p className="text-dark-700 mb-6 flex-grow italic">"{review.text}"</p>
                            <div className="flex items-center justify-between mt-auto">
                                <div>
                                    <div className="font-bold text-dark-900">{review.author}</div>
                                    <div className="text-sm text-dark-600">{review.city}</div>
                                </div>
                                <div className="flex items-center text-xs text-dark-500 bg-cream-100 px-2 py-1 rounded border border-gold-200/20">
                                    Google Review
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center mt-8 space-x-4">
                <button onClick={handlePrev} className="p-2 rounded-full bg-white shadow-md hover:bg-cream-100 focus:outline-none focus:ring-2 focus:ring-gold-400 border border-transparent" aria-label="Previous review">
                    <Icon name="chevronLeft" className="w-6 h-6 text-dark-600" />
                </button>

                {/* Dots - minimum 48x48px touch targets */}
                <div className="flex justify-center space-x-1">
                    {reviews.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleGoToSlide(idx)}
                            className="p-3 group focus:outline-none focus:ring-2 focus:ring-gold-400 rounded-full"
                            aria-label={`Go to review ${idx + 1}`}
                            aria-current={idx === currentIndex}
                        >
                            <span className={`block w-3 h-3 rounded-full transition-colors duration-300 ${idx === currentIndex ? 'bg-gold-500' : 'bg-gray-400 group-hover:bg-gold-300'}`} />
                        </button>
                    ))}
                </div>

                <button onClick={handleNext} className="p-2 rounded-full bg-white shadow-md hover:bg-cream-100 focus:outline-none focus:ring-2 focus:ring-gold-400 border border-transparent" aria-label="Next review">
                    <Icon name="chevronRight" className="w-6 h-6 text-dark-600" />
                </button>

                <button onClick={handlePausePlay} className="p-2 rounded-full bg-white shadow-md hover:bg-cream-100 focus:outline-none focus:ring-2 focus:ring-gold-400 border border-transparent" aria-label={isPaused ? "Play automatic scrolling" : "Pause automatic scrolling"}>
                    {isPaused ? <Icon name="play" className="w-6 h-6 text-dark-600" /> : <Icon name="pause" className="w-6 h-6 text-dark-600" />}
                </button>
            </div>
        </div>
    );
}
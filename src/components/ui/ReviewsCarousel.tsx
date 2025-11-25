import { useState, useEffect, useRef } from 'react';
import type { Review } from '@data/reviews';

interface ReviewsCarouselProps {
    reviews: Review[];
    autoPlayInterval?: number;
}

export default function ReviewsCarousel({ reviews, autoPlayInterval = 5000 }: ReviewsCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (isPaused) return;

        timeoutRef.current = setTimeout(nextSlide, autoPlayInterval);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [currentIndex, isPaused, autoPlayInterval]);

    // Calculate visible slides based on screen width (handled via CSS/layout, but here we show one at a time for simplicity in logic, 
    // or we can show a grid. The requirement says "Responsive grid layout (1 column mobile, 3 columns desktop)".
    // If it's a carousel, usually it shows 1 or 3 items sliding. 
    // For a simple implementation, let's show 1 item on mobile and 3 on desktop sliding one by one.
    // To make it simple and robust, let's just slide one by one but display 1 (mobile) or 3 (desktop) visible.

    // Actually, for a carousel, it's often easier to just show 1 slide at a time on mobile and 3 on desktop.
    // Let's implement a window of 3 reviews.

    const getVisibleReviews = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            visible.push(reviews[(currentIndex + i) % reviews.length]);
        }
        return visible;
    };

    return (
        <div
            className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
                    {/* On mobile, we only show the current index. On desktop, we show 3. 
              To achieve this with a single grid, we can hide the 2nd and 3rd items on mobile via CSS.
          */}
                    {getVisibleReviews().map((review, idx) => (
                        <div
                            key={`${review.id}-${idx}`}
                            className={`bg-white rounded-xl shadow-md border border-gold-200/20 h-full flex flex-col ${idx > 0 ? 'hidden md:flex' : 'flex'}`}
                        >
                            <div className="flex items-center mb-4">
                                <div className="flex text-gold-400">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="ml-2 text-sm text-dark-500">{review.relativeTime}</span>
                            </div>

                            <p className="text-dark-700 mb-6 flex-grow italic">"{review.text}"</p>

                            <div className="flex items-center justify-between mt-auto">
                                <div>
                                    <h4 className="font-bold text-dark-900">{review.author}</h4>
                                    <p className="text-sm text-dark-500">{review.city}</p>
                                </div>
                                <div className="flex items-center text-xs text-dark-500 bg-cream-100 px-2 py-1 rounded border border-gold-200/20">
                                    Google Review
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-4 bg-white rounded-full p-2 shadow-lg text-dark-600 hover:text-gold-600 focus:outline-none z-10 border border-gold-200/20"
                aria-label="Previous review"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-4 bg-white rounded-full p-2 shadow-lg text-dark-600 hover:text-gold-600 focus:outline-none z-10 border border-gold-200/20"
                aria-label="Next review"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-8 space-x-2">
                {reviews.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${idx === currentIndex ? 'bg-gold-400' : 'bg-gray-300 hover:bg-gold-200'
                            }`}
                        aria-label={`Go to review slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

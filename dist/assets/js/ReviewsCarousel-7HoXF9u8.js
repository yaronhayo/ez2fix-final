import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, a as renderTemplate, u as unescapeHTML } from "./astro/server-BJ6_oM5W.js";
import "piccolore";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { I as Icon, s as siteConfig, e as generateReviewSchema } from "./Footer-Cs5b5W4u.js";
import { r as reviews } from "./reviews-DcJlOZwn.js";
function ReviewsCarousel({ reviews: reviews2, autoPlayInterval = 7e3 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);
  const carouselRef = useRef(null);
  const liveRegionRef = useRef(null);
  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews2.length);
  }, [reviews2.length]);
  useEffect(() => {
    if (!isPaused) {
      resetTimeout();
      timeoutRef.current = setTimeout(nextSlide, autoPlayInterval);
    }
    return resetTimeout;
  }, [currentIndex, isPaused, autoPlayInterval, nextSlide, resetTimeout]);
  const handleGoToSlide = (index) => {
    setCurrentIndex(index);
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews2.length) % reviews2.length);
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
      visible.push(reviews2[(currentIndex + i) % reviews2.length]);
    }
    return visible;
  }, [currentIndex, reviews2]);
  useEffect(() => {
    if (liveRegionRef.current) {
      liveRegionRef.current.textContent = `Showing review ${currentIndex + 1} of ${reviews2.length}`;
    }
  }, [currentIndex, reviews2.length]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: carouselRef,
      className: "relative max-w-7xl mx-auto",
      onMouseEnter: () => setIsPaused(true),
      onMouseLeave: () => !document.activeElement?.closest || !carouselRef.current?.contains(document.activeElement) ? setIsPaused(false) : null,
      onFocus: () => setIsPaused(true),
      onBlur: () => setIsPaused(false),
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": "Customer reviews",
      children: [
        /* @__PURE__ */ jsx("div", { ref: liveRegionRef, className: "sr-only", "aria-live": "polite", "aria-atomic": "true" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out", role: "group", children: visibleReviews.map((review, idx) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: `bg-white rounded-xl shadow-lg border border-gold-200/20 h-full flex flex-col p-6 ${idx > 0 ? "hidden md:flex" : "flex"}`,
            role: "group",
            "aria-roledescription": "slide",
            "aria-label": `Review from ${review.author}`,
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex text-gold-600", children: [
                  /* @__PURE__ */ jsxs("span", { className: "sr-only", children: [
                    "Rated ",
                    review.rating,
                    " out of 5 stars"
                  ] }),
                  [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Icon, { name: "star", className: "w-5 h-5 fill-current", "aria-hidden": "true" }, i))
                ] }),
                /* @__PURE__ */ jsx("span", { className: "ml-2 text-sm text-dark-500", children: review.relativeTime })
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-dark-700 mb-6 flex-grow italic", children: [
                '"',
                review.text,
                '"'
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mt-auto", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "font-bold text-dark-900", children: review.author }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-dark-600", children: review.city })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex items-center text-xs text-dark-500 bg-cream-100 px-2 py-1 rounded border border-gold-200/20", children: "Google Review" })
              ] })
            ]
          },
          review.id
        )) }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center mt-8 space-x-4", children: [
          /* @__PURE__ */ jsx("button", { onClick: handlePrev, className: "p-2 rounded-full bg-white shadow-md hover:bg-cream-100 focus:outline-none focus:ring-2 focus:ring-gold-400 border border-transparent", "aria-label": "Previous review", children: /* @__PURE__ */ jsx(Icon, { name: "chevronLeft", className: "w-6 h-6 text-dark-600" }) }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center space-x-1", children: reviews2.map((_, idx) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => handleGoToSlide(idx),
              className: "p-3 group focus:outline-none focus:ring-2 focus:ring-gold-400 rounded-full",
              "aria-label": `Go to review ${idx + 1}`,
              "aria-current": idx === currentIndex,
              children: /* @__PURE__ */ jsx("span", { className: `block w-3 h-3 rounded-full transition-colors duration-300 ${idx === currentIndex ? "bg-gold-500" : "bg-gray-400 group-hover:bg-gold-300"}` })
            },
            idx
          )) }),
          /* @__PURE__ */ jsx("button", { onClick: handleNext, className: "p-2 rounded-full bg-white shadow-md hover:bg-cream-100 focus:outline-none focus:ring-2 focus:ring-gold-400 border border-transparent", "aria-label": "Next review", children: /* @__PURE__ */ jsx(Icon, { name: "chevronRight", className: "w-6 h-6 text-dark-600" }) }),
          /* @__PURE__ */ jsx("button", { onClick: handlePausePlay, className: "p-2 rounded-full bg-white shadow-md hover:bg-cream-100 focus:outline-none focus:ring-2 focus:ring-gold-400 border border-transparent", "aria-label": isPaused ? "Play automatic scrolling" : "Pause automatic scrolling", children: isPaused ? /* @__PURE__ */ jsx(Icon, { name: "play", className: "w-6 h-6 text-dark-600" }) : /* @__PURE__ */ jsx(Icon, { name: "pause", className: "w-6 h-6 text-dark-600" }) })
        ] })
      ]
    }
  );
}
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://ez2fixllc.com");
const $$ReviewsCarousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ReviewsCarousel;
  const {
    title = "What Our Customers Say",
    subtitle = `Rated 5.0 Stars by over ${siteConfig.trustSignals.reviewCount}+ satisfied customers in Northern NJ`,
    className
  } = Astro2.props;
  const reviewSchemas = reviews.map(
    (review) => generateReviewSchema({
      author: review.author,
      datePublished: review.date,
      reviewBody: review.text,
      reviewRating: review.rating
    })
  );
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`py-16 bg-white ${className || ""}`, "class")}> ${reviewSchemas.map((schema) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema))))} <div class="container mx-auto px-4"> <div class="text-center max-w-3xl mx-auto mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-dark-700 mb-4"> ${title} </h2> <p class="text-lg text-dark-600"> ${subtitle} </p> </div> ${renderComponent($$result, "ReviewsCarouselReact", ReviewsCarousel, { "client:visible": true, "reviews": reviews, "client:component-hydration": "visible", "client:component-path": "@components/ui/ReviewsCarousel", "client:component-export": "default" })} <div class="text-center mt-12"> <a href="/reviews" class="inline-flex items-center justify-center px-8 py-3 bg-gold-500 text-dark-900 font-bold rounded-lg hover:bg-gold-600 hover:text-white transition-all shadow-md hover:shadow-lg group"> ${renderComponent($$result, "Icon", Icon, { "name": "star", "className": "w-5 h-5 mr-2" })}
View All Reviews
</a> </div> </div> </section>`;
}, "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/components/sections/ReviewsCarousel.astro", void 0);
export {
  $$ReviewsCarousel as $
};

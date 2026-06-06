"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    review:
      "Saved me a trip to the garage! The mechanic was extremely professional and fixed my car in an hour.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    review:
      "Very transparent pricing. I knew exactly what I was paying for. Will definitely use PrimeFix again.",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    review:
      "Booked an electrician for home wiring issues. Punctual, polite, and did a fantastic job.",
    rating: 4,
  },
  {
    name: "Vikram Malhotra",
    review:
      "Fantastic service! The technician arrived right on time, explained the issue clearly, and resolved it quickly. Extremely satisfied.",
    rating: 5,
  },
  {
    name: "Anjali Sharma",
    review:
      "Very convenient and professional. I didn't have to leave my office; the technician fixed my AC while I was working. 5 stars!",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = TESTIMONIALS.length - visibleCards;

  // Keep index within bounds if visibleCards changes
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [visibleCards, maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  return (
    <section
      className="py-16 bg-brand-blue text-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="w-full mx-auto px-4 md:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-brand-light-blue max-w-2xl mx-auto">
            Don't just take our word for it.
          </p>
        </div>

        {/* Carousel Viewport Container */}
        <div className="relative group/carousel px-10 sm:px-12">
          {/* Slider track container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out [--visible-cards:1] md:[--visible-cards:2] lg:[--visible-cards:3]"
              style={{
                transform: `translateX(calc(-100% * ${currentIndex} / var(--visible-cards)))`,
              }}
            >
              {TESTIMONIALS.map((test, idx) => (
                <div
                  key={idx}
                  className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3 flex animate-fade-in"
                >
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl flex-1 flex flex-col justify-between hover:bg-white/15 transition-colors duration-300 shadow-lg">
                    <div>
                      <div className="flex gap-1 mb-5">
                        {[...Array(test.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                        {[...Array(5 - test.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-white/20" />
                        ))}
                      </div>
                      <p className="text-gray-100 mb-6 font-medium italic leading-relaxed text-base">
                        "{test.review}"
                      </p>
                    </div>
                    <div>
                      <div className="font-bold text-lg">{test.name}</div>
                      <div className="text-sm text-brand-cyan-light font-medium">
                        Verified Customer
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Arrow Button (Desktop/Tablet Only) */}
          <button
            onClick={handlePrev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full items-center justify-center backdrop-blur-md shadow-md transition-all duration-300 hover:scale-110 active:scale-95 group-hover/carousel:opacity-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button (Desktop/Tablet Only) */}
          <button
            onClick={handleNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full items-center justify-center backdrop-blur-md shadow-md transition-all duration-300 hover:scale-110 active:scale-95 group-hover/carousel:opacity-100"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicator Dots & Mobile Nav Buttons */}
        <div className="flex items-center justify-center gap-6 mt-8">
          {/* Mobile Prev Button */}
          <button
            onClick={handlePrev}
            className="md:hidden w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-md shadow-md active:scale-95 transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {maxIndex > 0 && (
            <div className="flex justify-center gap-2.5">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "bg-white w-6 shadow-sm"
                      : "bg-white/30 hover:bg-white/50 w-2.5"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}

          {/* Mobile Next Button */}
          <button
            onClick={handleNext}
            className="md:hidden w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-md shadow-md active:scale-95 transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

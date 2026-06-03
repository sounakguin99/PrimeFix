"use client";

import React, { useEffect, useState, useRef } from "react";
import { Wrench, Clock, CheckCircle2, ChevronRight } from "lucide-react";

export default function HowItWorks() {
  const [hasStarted, setHasStarted] = useState(false);
  const [activeStep, setActiveStep] = useState(0); // 0: idle, 1: step1 active, 2: connector1 drawing, 3: step2 active, 4: connector2 drawing, 5: step3 active
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    // Sequence timing logic
    setActiveStep(1); // Step 1 active immediately

    const t1 = setTimeout(() => {
      setActiveStep(2); // Connector 1 starts drawing
    }, 600);

    const t2 = setTimeout(() => {
      setActiveStep(3); // Step 2 active
    }, 1400);

    const t3 = setTimeout(() => {
      setActiveStep(4); // Connector 2 starts drawing
    }, 2000);

    const t4 = setTimeout(() => {
      setActiveStep(5); // Step 3 active
    }, 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [hasStarted]);

  const steps = [
    {
      title: "Select Service",
      desc: "Choose from our wide range of professional services.",
      icon: Wrench,
    },
    {
      title: "Pick a Time",
      desc: "Schedule a time that is most convenient for you.",
      icon: Clock,
    },
    {
      title: "We Do The Rest",
      desc: "Our certified professionals arrive at your doorstep.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section
      className="py-20 bg-white border-y border-gray-100 overflow-hidden"
      ref={containerRef}
    >
      <div className="w-full mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            How It Works
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
            Get your service completed in three simple steps without leaving
            your house.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* Connector 1 (Desktop) */}
          <div className="hidden md:block absolute left-[22%] top-12 w-[22%] h-[3px] bg-gray-100 z-0 rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-blue transition-all duration-700 ease-out relative"
              style={{ width: activeStep >= 2 ? "100%" : "0%" }}
            >
              {/* Flow pulse */}
              {activeStep === 2 && (
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white animate-pulse" />
              )}
            </div>
            {/* Animated Chevron Arrow Head */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-300 flex items-center justify-center"
              style={{
                opacity: activeStep >= 3 ? 1 : 0,
                transform: `translateY(-50%) translateX(${activeStep >= 3 ? "0px" : "-10px"})`,
              }}
            >
              <ChevronRight className="w-5 h-5 text-brand-blue -mr-2 shrink-0 stroke-[3px]" />
            </div>
          </div>

          {/* Connector 2 (Desktop) */}
          <div className="hidden md:block absolute left-[56%] top-12 w-[22%] h-[3px] bg-gray-100 z-0 rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-blue transition-all duration-700 ease-out relative"
              style={{ width: activeStep >= 4 ? "100%" : "0%" }}
            >
              {/* Flow pulse */}
              {activeStep === 4 && (
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white animate-pulse" />
              )}
            </div>
            {/* Animated Chevron Arrow Head */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-300 flex items-center justify-center"
              style={{
                opacity: activeStep >= 5 ? 1 : 0,
                transform: `translateY(-50%) translateX(${activeStep >= 5 ? "0px" : "-10px"})`,
              }}
            >
              <ChevronRight className="w-5 h-5 text-brand-blue -mr-2 shrink-0 stroke-[3px]" />
            </div>
          </div>

          {/* Steps list */}
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isStepActive =
              (idx === 0 && activeStep >= 1) ||
              (idx === 1 && activeStep >= 3) ||
              (idx === 2 && activeStep >= 5);

            return (
              <div
                key={idx}
                className="relative z-10 flex flex-col items-center text-center px-4 transition-all duration-500"
                style={{
                  transform: isStepActive
                    ? "translateY(0)"
                    : "translateY(12px)",
                  opacity: isStepActive ? 1 : 0.4,
                }}
              >
                {/* Outer Ring Circle */}
                <div
                  className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-md border-4 border-white transition-all duration-500 ${
                    isStepActive
                      ? "bg-brand-light-blue scale-110 ring-4 ring-brand-blue/10"
                      : "bg-gray-50 scale-100"
                  }`}
                >
                  <Icon
                    className={`w-10 h-10 transition-all duration-500 ${
                      isStepActive
                        ? "text-brand-blue scale-110 rotate-0"
                        : "text-gray-400 -rotate-12"
                    }`}
                  />
                </div>

                <h3
                  className={`text-xl font-extrabold mb-2 transition-colors duration-500 ${
                    isStepActive ? "text-gray-900" : "text-gray-400"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed max-w-xs transition-colors duration-500 ${
                    isStepActive ? "text-gray-500" : "text-gray-400/80"
                  }`}
                >
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

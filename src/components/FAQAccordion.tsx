"use client";

import React, { useState } from "react";
import { HelpCircle, Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "Do I need to provide tools or spare parts?",
    a: "No, our mechanics arrive fully equipped with all necessary tools and genuine spare parts required for the job.",
  },
  {
    q: "How long does a typical service take?",
    a: "Most standard services take between 1 to 2 hours. Complex repairs might take longer, but our mechanic will inform you upfront.",
  },
  {
    q: "What if I am not satisfied with the service?",
    a: "We offer a service warranty. If you face any issues post-service, we will send someone to inspect and resolve it at no extra cost.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white border rounded-2xl p-6 transition-all duration-300 ${
                  isOpen
                    ? "border-brand-blue/30 shadow-md"
                    : "border-gray-200 shadow-sm hover:border-brand-blue/20 hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group/btn cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-bold text-lg text-gray-900 flex items-start gap-3 transition-colors group-hover/btn:text-brand-blue">
                    <HelpCircle
                      className={`w-6 h-6 shrink-0 mt-0.5 transition-colors duration-300 ${
                        isOpen ? "text-brand-blue" : "text-gray-400"
                      }`}
                    />
                    {faq.q}
                  </h3>
                  <div className="shrink-0 ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 group-hover/btn:bg-brand-blue/5 transition-colors">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-brand-blue transition-transform duration-300 rotate-180" />
                    ) : (
                      <Plus className="w-4 h-4 text-gray-500 group-hover/btn:text-brand-blue transition-transform duration-300" />
                    )}
                  </div>
                </button>
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-600 ml-9 pt-4 leading-relaxed text-sm sm:text-base font-medium">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

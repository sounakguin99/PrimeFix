"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, CheckCircle2 } from "lucide-react";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  price: string;
  description?: string;
  originalPrice?: string;
  imageSrc: string;
}

export default function ServiceCard({
  title,
  subtitle,
  price,
  description,
  originalPrice,
  imageSrc,
}: ServiceCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <>
      {/* The Service Card */}
      <div
        onClick={() => setIsModalOpen(true)}
        className="bg-white rounded-2xl shadow-[0_2px_12px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden flex flex-col group hover:shadow-[0_8px_24px_rgb(0,0,0,0.08)] hover:-translate-y-1 hover:border-brand-blue/20 transition-all duration-300 cursor-pointer h-full"
      >
        {/* Edge-to-edge image with object-cover */}
        <div className="relative w-full h-52 overflow-hidden bg-gray-100">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4 sm:p-5 flex-1 flex flex-col">
          <h4 className="font-bold text-gray-900 text-lg leading-tight mb-1.5 group-hover:text-brand-blue transition-colors">
            {title}
          </h4>
          <p className="text-[13px] text-gray-500 mb-5 line-clamp-2 leading-relaxed">
            {subtitle}
          </p>

          <div className="mt-auto flex items-end justify-between">
            <div>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5 block">
                Starting at
              </span>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl text-brand-blue leading-none">
                  {price}
                </span>
                {originalPrice && (
                  <span className="text-xs text-gray-400 line-through">
                    {originalPrice}
                  </span>
                )}
              </div>
            </div>

            <button className="px-4 py-2 bg-brand-light-blue/10 border border-brand-blue text-brand-blue font-bold rounded-xl text-sm group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
              Details
            </button>
          </div>
        </div>
      </div>

      {/* The Modal Popup */}
      {isModalOpen &&
        mounted &&
        createPortal(
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
              onClick={() => setIsModalOpen(false)}
            ></div>
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 p-2.5 bg-black/40 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-all hover:scale-105"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image Area */}
              <div className="relative w-full h-64 sm:h-72 bg-gray-100 overflow-hidden shrink-0">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-3xl font-extrabold text-white mb-1 drop-shadow-md">
                    {title}
                  </h3>
                  <p className="text-gray-200 font-medium drop-shadow line-clamp-1">
                    {subtitle}
                  </p>
                </div>
              </div>

              {/* Modal Content Area (Scrollable if needed) */}
              <div className="p-6 sm:p-8 overflow-y-auto">
                <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-100">
                  <div>
                    <span className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1 block">
                      Starting Price
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-black text-brand-blue">
                        {price}
                      </span>
                      {originalPrice && (
                        <span className="text-lg text-gray-400 line-through">
                          {originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="bg-green-50 text-green-700 px-4 py-2 rounded-xl text-sm font-bold border border-green-100 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Available
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-brand-cyan rounded-full block"></span>
                    Service Description
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {description ||
                      "No detailed description available for this service yet."}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="flex items-center gap-2.5 text-sm text-gray-700 font-medium bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" />
                    Verified Experts
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-700 font-medium bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" />
                    Quality Assured
                  </div>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full bg-brand-blue text-white font-extrabold py-4 rounded-xl hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all text-lg"
                >
                  Book This Service
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

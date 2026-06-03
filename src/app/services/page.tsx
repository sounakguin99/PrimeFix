"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ALL_SERVICES, CATEGORIES } from "@/lib/data";
import ServiceListings from "@/components/ServiceListings";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredServices =
    selectedCategory === "all"
      ? ALL_SERVICES
      : ALL_SERVICES.filter((s) => s.categoryId === selectedCategory);

  return (
    <div className="w-full bg-slate-50/50 pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/services_hero_1780500369943.png"
          alt="Our Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/90 via-brand-blue/75 to-brand-blue/95"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-light-blue font-bold text-sm mb-6 uppercase tracking-wider">
            Directory
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-medium">
            Browse our complete catalogue of professional services. Use the
            filters below to find exactly what you need.
          </p>
        </div>
      </section>

      {/* Main Content Area: Shifted Up */}
      <div className="w-full mx-auto px-4 md:px-6 -mt-10 relative z-20">
        {/* Services Grid with Search/Sort/Category Dropdowns */}
        <ServiceListings initialServices={ALL_SERVICES} categories={CATEGORIES} />
      </div>
    </div>
  );
}

"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, Sparkles, Car, Bike, Wrench, Paintbrush, Hammer, Snowflake, Compass } from "lucide-react";
import { CATEGORIES, ALL_SERVICES } from "@/lib/data";

// Meta information for styling and grouping
const CATEGORY_META: Record<string, { group: "automotive" | "home" | "special"; desc: string; icon: any; color: string }> = {
  "for-you": { 
    group: "special", 
    desc: "Handpicked customized services tailored to your daily needs and convenience.", 
    icon: Sparkles,
    color: "from-purple-500/10 to-indigo-500/10 text-indigo-600 border-indigo-100"
  },
  "car": { 
    group: "automotive", 
    desc: "Doorstep diagnostics, battery jumps, alternator checks, and replacements.", 
    icon: Car,
    color: "from-blue-500/10 to-cyan-500/10 text-blue-600 border-blue-100"
  },
  "bike": { 
    group: "automotive", 
    desc: "Expert general motorcycle servicing, oil changes, lubrication, and safety checks.", 
    icon: Bike,
    color: "from-emerald-500/10 to-teal-500/10 text-emerald-600 border-emerald-100"
  },
  "electrician": { 
    group: "home", 
    desc: "Faulty switchboard repair, electrical socket fixing, and home wiring inspections.", 
    icon: Wrench,
    color: "from-amber-500/10 to-orange-500/10 text-amber-600 border-amber-100"
  },
  "plumbing": { 
    group: "home", 
    desc: "Tap repairs, pipe blockage clearing, leaky seals, and water pressure optimization.", 
    icon: Snowflake,
    color: "from-sky-500/10 to-blue-500/10 text-sky-600 border-sky-100"
  },
  "cleaning": { 
    group: "home", 
    desc: "Deep shampoo sofa cleaning, full-home sanitization, and dust allergen removal.", 
    icon: Sparkles,
    color: "from-rose-500/10 to-pink-500/10 text-rose-600 border-rose-100"
  },
  "painting": { 
    group: "home", 
    desc: "Premium interior wall painting, crack filling, surface preparation, and styling.", 
    icon: Paintbrush,
    color: "from-violet-500/10 to-fuchsia-500/10 text-violet-600 border-violet-100"
  },
  "carpentry": { 
    group: "home", 
    desc: "Sturdy furniture assembly, wardrobe alignment, and customized wood fittings.", 
    icon: Hammer,
    color: "from-amber-700/10 to-amber-600/10 text-amber-800 border-amber-200"
  },
};

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredCategories = useMemo(() => {
    return CATEGORIES.filter((cat) => {
      const meta = CATEGORY_META[cat.slug] || { group: "home", desc: "", icon: Compass };
      
      // 1. Filter by search query
      const matchesSearch = cat.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        meta.desc.toLowerCase().includes(searchQuery.toLowerCase());
      
      if (!matchesSearch) return false;

      // 2. Filter by tab
      if (activeTab === "all") return true;
      return meta.group === activeTab;
    });
  }, [searchQuery, activeTab]);

  return (
    <div className="w-full bg-slate-50/50 ">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <Image 
          src="/categories_hero_1780500355721.png" 
          alt="All Categories" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/90 via-brand-blue/75 to-brand-blue/95"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-light-blue font-bold text-sm mb-6 uppercase tracking-wider">
            Catalogue
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            All Categories
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-medium">
            Browse all our professional services tailored exactly for your needs.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="w-full mx-auto px-4 md:px-6 -mt-10 relative z-20">
        
        {/* Controls Container */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-6 md:p-8 mb-12">
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
            
            {/* Filtering Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
              {[
                { id: "all", label: "All Services" },
                { id: "automotive", label: "Automotive" },
                { id: "home", label: "Home Maintenance" },
                { id: "special", label: "Special" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-brand-blue text-white shadow-md shadow-brand-blue/20"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search input */}
            <div className="relative w-full lg:w-96">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue focus:bg-white transition-all shadow-inner outline-none"
                placeholder="Search categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
          </div>
        </div>

        {/* Categories Grid */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredCategories.map((cat, idx) => {
              const meta = CATEGORY_META[cat.slug] || { group: "home", desc: "", icon: Compass, color: "from-gray-500/10 to-slate-500/10 text-gray-600 border-gray-100" };
              const Icon = meta.icon;
              
              // Count dynamic services
              const count = ALL_SERVICES.filter(s => s.categoryId === cat.slug).length;

              return (
                <Link
                  href={`/category/${cat.slug}`}
                  key={idx}
                  className="flex flex-col bg-white rounded-3xl border border-gray-100/80 shadow-md hover:shadow-2xl hover:border-brand-blue/15 hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
                >
                  {/* Category Image Header */}
                  <div className="relative h-48 w-full overflow-hidden shrink-0">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                    
                    {/* Badge */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm text-xs font-bold text-brand-blue">
                      {count > 0 ? `${count} Services` : "Featured"}
                    </div>
                  </div>

                  {/* Category Content */}
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      {/* Name & Icon */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-xl bg-gradient-to-br border ${meta.color.split(" ")[0]} ${meta.color.split(" ")[2]}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-extrabold text-xl text-gray-900 group-hover:text-brand-blue transition-colors">
                          {cat.name}
                        </h3>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
                        {meta.desc}
                      </p>
                    </div>

                    {/* Book Action */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-50 text-brand-blue font-bold text-sm group-hover:text-brand-blue/80 transition-colors">
                      <span>Explore Services</span>
                      <div className="w-8 h-8 rounded-full bg-brand-light-blue text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">No categories found</h3>
            <p className="text-gray-500">
              We couldn't find any categories matching your search query. Try adjusting your filter!
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

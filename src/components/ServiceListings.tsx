"use client";

import React, { useState, useMemo, useRef, useEffect, useCallback } from "react";
import ServiceCard from "./ServiceCard";
import { Search, SlidersHorizontal, ChevronDown, ArrowUpDown, TrendingUp, TrendingDown, Loader2 } from "lucide-react";

interface Service {
  title: string;
  subtitle: string;
  price: string;
  description?: string;
  image: string;
  categoryId: string;
}

interface ServiceListingsProps {
  initialServices: Service[];
}

export default function ServiceListings({ initialServices }: ServiceListingsProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [isOpen, setIsOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const observer = useRef<IntersectionObserver | null>(null);
  const observerRef = useCallback((node: HTMLDivElement | null) => {
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => prev + 9);
        }
      },
      { rootMargin: "200px" }
    );
    
    if (node) observer.current.observe(node);
  }, []);

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(9);
  }, [searchQuery, sortBy, initialServices]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const sortOptions = [
    { value: "default", label: "Sort by", icon: SlidersHorizontal },
    { value: "price-low", label: "Price: Low to High", icon: TrendingUp },
    { value: "price-high", label: "Price: High to Low", icon: TrendingDown },
  ];

  const currentOption = sortOptions.find(opt => opt.value === sortBy) || sortOptions[0];

  const filteredAndSortedServices = useMemo(() => {
    // 1. Filter by search query
    let result = initialServices.filter((service) => {
      const searchLower = searchQuery.toLowerCase();
      return (
        service.title.toLowerCase().includes(searchLower) ||
        service.subtitle.toLowerCase().includes(searchLower) ||
        (service.description && service.description.toLowerCase().includes(searchLower))
      );
    });

    // 2. Sort
    if (sortBy === "price-low") {
      result = [...result].sort((a, b) => {
        const priceA = parseInt(a.price.replace(/\D/g, ""));
        const priceB = parseInt(b.price.replace(/\D/g, ""));
        return priceA - priceB;
      });
    } else if (sortBy === "price-high") {
      result = [...result].sort((a, b) => {
        const priceA = parseInt(a.price.replace(/\D/g, ""));
        const priceB = parseInt(b.price.replace(/\D/g, ""));
        return priceB - priceA;
      });
    }

    return result;
  }, [initialServices, searchQuery, sortBy]);

  return (
    <div className="w-full">
      {/* Search and Filter Bar Card Container */}
      <div className="bg-white rounded-3xl border border-gray-100/80 shadow-xl p-6 md:p-8 mb-12">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
          
          {/* Left Side: Section Title & Filter Count Badge */}
          <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
            <div className="w-1.5 h-6 bg-brand-cyan rounded-full"></div>
            <h2 className="font-extrabold text-xl text-gray-900">Available Services</h2>
            <span className="bg-brand-blue/10 text-brand-blue text-xs font-bold px-2.5 py-1 rounded-full ml-1">
              {filteredAndSortedServices.length}
            </span>
          </div>

          {/* Right Side: Search and Sort Controls */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto flex-1 md:max-w-2xl md:justify-end">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue focus:bg-white transition-all shadow-inner outline-none"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Sort Dropdown */}
            <div className="relative w-full sm:w-48 shrink-0" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full pl-11 pr-8 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue focus:bg-white transition-all shadow-inner outline-none text-left select-none cursor-pointer font-semibold text-gray-700"
              >
                <span className="truncate">{currentOption.label}</span>
                <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <SlidersHorizontal className="h-5 w-5 text-gray-400" />
              </div>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-full bg-white border border-gray-100 rounded-xl shadow-lg py-1.5 z-30 animate-in fade-in slide-in-from-top-1 duration-100">
                  {sortOptions.map((option) => {
                    const Icon = option.icon;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => {
                          setSortBy(option.value);
                          setIsOpen(false);
                        }}
                        className={`flex items-center gap-2.5 w-full px-4 py-2.5 text-sm text-left transition-colors cursor-pointer ${
                          sortBy === option.value
                            ? "bg-brand-blue/5 text-brand-blue font-medium"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <Icon className={`h-4 w-4 ${sortBy === option.value ? "text-brand-blue" : "text-gray-400"}`} />
                        <span>{option.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {filteredAndSortedServices.length > 0 ? (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredAndSortedServices.slice(0, visibleCount).map((service, idx) => (
              <ServiceCard
                key={idx}
                title={service.title}
                subtitle={service.subtitle}
                price={service.price}
                description={service.description}
                imageSrc={service.image}
              />
            ))}
          </div>

          {/* Pagination Controls */}
          {visibleCount < filteredAndSortedServices.length && (
            <>
              {/* Mobile Infinite Scroll Observer Target */}
              <div ref={observerRef} className="w-full h-10 md:hidden flex items-center justify-center mt-6">
                <Loader2 className="w-6 h-6 animate-spin text-brand-blue" />
              </div>

              {/* Desktop Load More Button */}
              <div className="hidden md:flex justify-center mt-10">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 9)}
                  className="px-8 py-3 bg-white border border-gray-200 text-brand-blue font-bold rounded-full hover:bg-gray-50 hover:border-brand-blue/30 transition-all shadow-sm flex items-center gap-2"
                >
                  Load More
                </button>
              </div>
            </>
          )}
        </>
      ) : (
        <div className="text-center py-20 bg-white rounded-[2rem] border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            No services found
          </h3>
          <p className="text-gray-500">
            We couldn't find any services matching your search criteria.
          </p>
        </div>
      )}
    </div>
  );
}

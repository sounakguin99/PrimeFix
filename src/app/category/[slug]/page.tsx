import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { ALL_SERVICES } from "@/lib/data";
import ServiceListings from "@/components/ServiceListings";

// SEO metadata for each category
const CATEGORY_SEO: Record<string, { title: string; description: string; keywords: string[] }> = {
  "for-you": {
    title: "Personalized Services Tailored For You",
    description: "Get handpicked doorstep services tailored to your daily needs. Book customized car, bike, home repair & maintenance services online with PrimeFix.",
    keywords: ["personalized home services", "custom vehicle maintenance", "tailored doorstep service"],
  },
  car: {
    title: "Car Repair & Services at Your Doorstep",
    description: "Book professional car repair services at home – alternator check, battery replacement, battery jump start & more. Certified mechanics, genuine OEM parts, transparent pricing.",
    keywords: ["car repair at home", "doorstep car service", "car battery replacement", "car alternator check", "mobile car mechanic India"],
  },
  bike: {
    title: "Bike Maintenance & Service at Home",
    description: "Keep your motorcycle in top condition with PrimeFix doorstep bike service. Full general service, oil change, chain lubrication & safety inspection by certified mechanics.",
    keywords: ["bike service at home", "motorcycle maintenance", "doorstep bike repair", "bike oil change service"],
  },
  electrician: {
    title: "Professional Electrician Services at Home",
    description: "Book certified electricians for switchboard repair, socket fixing, wiring inspection & more. Safe, reliable electrical services at your doorstep with PrimeFix.",
    keywords: ["electrician near me", "home electrician service", "switchboard repair", "electrical wiring service"],
  },
  plumbing: {
    title: "Expert Plumbing Services at Your Doorstep",
    description: "Fix leaky taps, clear pipe blockages, repair seals & optimize water pressure. Professional plumbing services booked online with PrimeFix.",
    keywords: ["plumber near me", "tap repair service", "pipe blockage clearing", "plumbing services at home"],
  },
  cleaning: {
    title: "Professional Home Cleaning Services",
    description: "Book deep sofa cleaning, full home sanitization & dust allergen removal. Professional cleaning services at your doorstep with PrimeFix.",
    keywords: ["sofa cleaning service", "home deep cleaning", "professional cleaning near me"],
  },
  painting: {
    title: "Quality Interior & Exterior Painting Services",
    description: "Transform your spaces with premium wall painting. Surface preparation, crack filling & professional paint application at your doorstep.",
    keywords: ["interior wall painting", "home painting service", "professional painter near me"],
  },
  carpentry: {
    title: "Professional Carpentry & Furniture Services",
    description: "Expert furniture assembly, wardrobe alignment & custom woodwork. Professional carpentry services at your doorstep with PrimeFix.",
    keywords: ["furniture assembly service", "carpentry near me", "professional carpenter"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const seo = CATEGORY_SEO[slug] || {
    title: "Our Services",
    description: "Explore our wide range of professional doorstep services with PrimeFix.",
    keywords: ["doorstep services", "PrimeFix services"],
  };

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: `https://www.primefix.in/category/${slug}`,
    },
    openGraph: {
      title: `${seo.title} | PrimeFix`,
      description: seo.description,
      url: `https://www.primefix.in/category/${slug}`,
    },
  };
}

// Detailed data for each category
const CATEGORY_DATA: Record<
  string,
  { title: string; description: string; image: string }
> = {
  "for-you": {
    title: "Services Tailored For You",
    description:
      "Personalized recommendations based on your vehicle and home needs.",
    image: "/cat_for_you_1780466794130.png",
  },
  car: {
    title: "Car Repair & Services",
    description:
      "Expert car maintenance, diagnostics, and repairs at your doorstep.",
    image: "/cat_car_1780466806031.png",
  },
  bike: {
    title: "Bike Maintenance",
    description:
      "Keep your motorcycle running smoothly with our certified mechanics.",
    image: "/cat_bike_1780466819876.png",
  },
  electrician: {
    title: "Professional Electricians",
    description: "Safe and reliable electrical work for your home and office.",
    image: "/cat_electrician_1780466832249.png",
  },
  plumbing: {
    title: "Expert Plumbing Services",
    description: "Fix leaks, clear blockages, and install fixtures with ease.",
    image: "/cat_plumbing_1780498372112.png",
  },
  cleaning: {
    title: "Professional Cleaning",
    description: "Deep cleaning services for sofas, carpets, and full homes.",
    image: "/cat_cleaning_1780498386063.png",
  },
  painting: {
    title: "Quality Painting Services",
    description: "Transform your spaces with fresh interior and exterior painting.",
    image: "/cat_painting_1780498400850.png",
  },
  carpentry: {
    title: "Professional Carpentry",
    description: "Expert furniture assembly, custom repairs, and woodwork.",
    image: "/cat_carpentry_1780498415312.png",
  },
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const categoryInfo = CATEGORY_DATA[slug] || {
    title: "Our Services",
    description: "Explore our wide range of professional services.",
    image: "/cat_for_you_1780466794130.png",
  };

  // Filter services using ALL_SERVICES or fallback to showing all
  const filteredServices = ALL_SERVICES.filter((s) => s.categoryId === slug);
  const servicesToDisplay =
    filteredServices.length > 0 ? filteredServices : ALL_SERVICES;

  return (
    <div className="w-full bg-slate-50/50 pb-20">
      {/* Cinematic Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src={categoryInfo.image}
          alt={categoryInfo.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/90 via-brand-blue/75 to-brand-blue/95"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-light-blue font-bold text-sm mb-6 uppercase tracking-wider">
            Category
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            {categoryInfo.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-medium">
            {categoryInfo.description}
          </p>
        </div>
      </section>

      {/* Main Content Area: Shifted Up */}
      <div className="w-full mx-auto px-4 md:px-6 -mt-10 relative z-20">
        <ServiceListings initialServices={servicesToDisplay} />
      </div>
    </div>
  );
}

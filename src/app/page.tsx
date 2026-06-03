import React from "react";
import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import {
  CheckCircle2,
  Star,
  Clock,
  Wrench,
  ShieldCheck,
  HelpCircle,
  ArrowRight,
  Award,
  Sparkles,
} from "lucide-react";
import { CATEGORIES, ALL_SERVICES } from "@/lib/data";

const RECOMMENDED_SERVICES = ALL_SERVICES.slice(0, 4);

export default function Home() {
  const displayedCategories = CATEGORIES.slice(0, 5);

  return (
    <div className="w-full bg-background">
      {/* Hero Banner Section */}
      <section className="pt-6 pb-4">
        <div className="w-full mx-auto px-2 md:px-4">
          <div className="relative w-full h-[280px] md:h-[480px] rounded-[2rem] overflow-hidden shadow-2xl group">
            <Image
              src="/car_engine_banner_1780416961037.png"
              alt="Car engine banner"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/95 via-brand-blue/80 to-transparent"></div>

            <div className="absolute inset-0 pl-10 flex flex-col justify-center max-w-2xl z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white font-bold text-sm mb-6 w-fit backdrop-blur-md border border-white/20 shadow-sm">
                Doorstep Service
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight text-balance">
                Get your vehicle fixed at home
              </h1>
              <Link
                href="/book"
                className="inline-flex w-fit items-center gap-3 px-8 py-4 bg-white text-brand-blue font-bold rounded-full hover:bg-brand-cyan-light transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 duration-300"
              >
                Book a Mechanic <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8">
        <div className="w-full mx-auto px-2 md:px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                Our Categories
              </h2>
              <p className="text-gray-500 mt-2 font-medium">
                Explore what we can do for you today
              </p>
            </div>
            <Link
              href="/categories"
              className="inline-flex w-fit items-center gap-2.5 px-6 py-3 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-bold rounded-full transition-all shadow-sm hover:shadow-md active:scale-95 duration-200 mt-8 group text-sm cursor-pointer"
            >
              Explore All{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {displayedCategories.map((cat, idx) => (
              <Link
                href={`/category/${cat.slug}`}
                key={idx}
                className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_2px_12px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-500 border border-gray-100"
              >
                {/* Image Section */}
                <div className="w-full aspect-[4/3] relative overflow-hidden bg-slate-100">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-5 flex flex-row items-center justify-between flex-1 relative bg-white group-hover:bg-brand-blue transition-colors duration-500">
                  <h3 className="font-extrabold text-gray-900 text-sm sm:text-base tracking-tight group-hover:text-white transition-colors duration-500">
                    {cat.name}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-brand-blue bg-blue-50/80 px-3.5 py-1.5 rounded-full group-hover:bg-white/20 group-hover:text-white transition-all duration-500 shrink-0">
                    <span>Book Now</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer / Promotional Section */}
      <section className="py-6">
        <div className="w-full mx-auto px-2 md:px-4">
          <div className="relative w-full rounded-[2rem] overflow-hidden bg-gradient-to-r from-brand-blue via-blue-600 to-brand-cyan p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            {/* Decorative background circles */}
            <div className="absolute right-0 top-0 -mt-20 -mr-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
            <div className="absolute left-1/3 bottom-0 -mb-16 w-60 h-60 rounded-full bg-white/5 blur-2xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left max-w-xl">
                <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/20 text-white font-bold text-xs uppercase tracking-wider mb-4 backdrop-blur-sm border border-white/10 shadow-sm">
                  Limited Time Discount
                </span>
                <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                  First Time Booking? Get Flat 20% Off!
                </h3>
                <p className="text-brand-light-blue text-sm md:text-base font-medium leading-relaxed mb-0">
                  Experience professional vehicle care at your doorstep. Use
                  coupon code{" "}
                  <span className="bg-white/20 text-white font-bold px-2 py-0.5 rounded border border-white/20 text-xs sm:text-sm uppercase tracking-wide">
                    FIRST20
                  </span>{" "}
                  during booking.
                </p>
              </div>
              <div className="shrink-0 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/book"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-blue font-bold rounded-full hover:bg-brand-cyan-light transition-all shadow-lg hover:scale-105 active:scale-95 duration-300 text-base"
                >
                  Book Service Now <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-transparent border-2 border-white/50 text-white font-bold rounded-full hover:bg-white/10 hover:border-white transition-all text-base"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Services Section */}
      <section className="py-8">
        <div className="w-full mx-auto px-2 md:px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                Recomended Services
              </h2>
              <p className="text-gray-500 mt-2 font-medium">
                Explore what we can do for you today
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex w-fit items-center gap-2.5 px-6 py-3 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-bold rounded-full transition-all shadow-sm hover:shadow-md active:scale-95 duration-200 mt-8 group text-sm cursor-pointer"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {RECOMMENDED_SERVICES.map((service, idx) => (
              <ServiceCard
                key={idx}
                title={service.title}
                subtitle={service.subtitle}
                price={service.price}
                imageSrc={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <HowItWorks />

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-50/50">
        <div className="w-full mx-auto px-4 md:px-8 ">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">
                Why Us
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
                Why Choose PrimeFix?
              </h2>
              <p className="text-gray-500 mb-8 max-w-lg text-sm sm:text-base font-medium leading-relaxed">
                We bring the workshop to you. With certified mechanics, genuine
                parts, and transparent pricing, we are revolutionizing the way
                you maintain your vehicle.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Certified Experts",
                    desc: "Vetted, certified, and fully background-checked mechanics.",
                    icon: Wrench,
                    color: "bg-blue-50 text-brand-blue",
                  },
                  {
                    title: "Upfront Pricing",
                    desc: "100% transparent quotes with zero hidden fees.",
                    icon: CheckCircle2,
                    color: "bg-emerald-50 text-emerald-600",
                  },
                  {
                    title: "Service Warranty",
                    desc: "Every repair is backed by our direct service warranty.",
                    icon: ShieldCheck,
                    color: "bg-purple-50 text-purple-600",
                  },
                  {
                    title: "Genuine Parts",
                    desc: "We use only high-quality, manufacturer-approved OEM parts.",
                    icon: Sparkles,
                    color: "bg-cyan-50 text-cyan-600",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_8px_rgb(0,0,0,0.02)] hover:shadow-lg hover:border-brand-blue/10 transition-all duration-300 flex flex-col hover:-translate-y-0.5 group"
                    >
                      <div
                        className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shrink-0`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              <Link
                href="/about"
                className="inline-flex w-fit items-center gap-2.5 px-6 py-3 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-bold rounded-full transition-all shadow-sm hover:shadow-md active:scale-95 duration-200 mt-8 group text-sm cursor-pointer"
              >
                Learn more about us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Collage & Stats */}
            <div className="relative flex items-center justify-center py-4 md:py-0">
              {/* Soft decorative background blur */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-blue/10 blur-3xl z-0 pointer-events-none"></div>

              <div className="relative w-full max-w-md md:max-w-xl lg:max-w-2xl aspect-[4/3] z-10">
                {/* Main Image (Workshop) */}
                <div className="absolute left-0 top-0 w-[84%] h-[78%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-all duration-500 hover:scale-[1.02] hover:z-20">
                  <Image
                    src="/workshop_service_1780417040078.png"
                    alt="Workshop service"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Secondary Image (Blue Sedan) */}
                <div className="absolute right-0 bottom-0 w-[58%] h-[63%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-all duration-500 hover:scale-105 hover:z-20">
                  <Image
                    src="/blue_sedan_1780416979748.png"
                    alt="Blue sedan"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Floating Stat Widget */}
                <div className="absolute left-[-1.5rem] bottom-[15%] bg-white/95 backdrop-blur-md border border-gray-100 p-4 rounded-2xl shadow-xl flex items-center gap-3 z-30 transition-transform duration-300 hover:scale-105 select-none">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 shrink-0">
                    <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                  </div>
                  <div>
                    <div className="font-extrabold text-gray-900 text-sm">
                      4.9 ★ Rating
                    </div>
                    <div className="text-[11px] font-bold text-gray-500">
                      15,000+ Services Done
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQAccordion />

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-brand-blue rounded-[2rem] p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>

          <h2 className="relative z-10 text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Ready to experience the difference?
          </h2>
          <p className="relative z-10 text-brand-light-blue text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have revolutionized the
            way they manage their automotive and home maintenance.
          </p>
          <Link
            href="/book"
            className="relative z-10 inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-blue font-bold text-lg rounded-full hover:bg-brand-cyan-light hover:scale-105 active:scale-95 transition-all shadow-xl"
          >
            Book a Service <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

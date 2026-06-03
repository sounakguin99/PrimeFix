import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ShieldCheck, Award, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "About Us – Our Mission, Values & Story",
  description:
    "Learn about PrimeFix – India's trusted doorstep service platform. With 50K+ services delivered, 100+ certified experts, and a 4.9/5 average rating, we bring professional car repair, bike maintenance, and home services directly to your door.",
  keywords: [
    "about PrimeFix",
    "doorstep service company India",
    "certified car mechanics",
    "professional home services",
    "trusted service platform",
    "vehicle maintenance experts",
  ],
  alternates: {
    canonical: "https://www.primefix.in/about",
  },
  openGraph: {
    title: "About PrimeFix – Redefining Doorstep Services",
    description:
      "50K+ services delivered, 100+ certified experts, 4.9/5 rating. Discover how PrimeFix is revolutionizing home and vehicle maintenance in India.",
    url: "https://www.primefix.in/about",
    images: ["/about_hero_1780499264761.png"],
  },
};

export default function AboutUs() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <Image 
          src="/about_hero_1780499264761.png" 
          alt="About PrimeFix" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/90 via-brand-blue/70 to-brand-blue/95"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-light-blue font-bold text-sm mb-6 uppercase tracking-wider">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Redefining Doorstep Services
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-medium">
            We are revolutionizing convenience by bringing top-tier engineering, automotive, and home maintenance directly to your driveway.
          </p>
        </div>
      </section>

      {/* Stats Section (Overlapping Hero) */}
      <section className="relative z-20 max-w-6xl mx-auto px-6 -mt-20">
        <div className="bg-white rounded-3xl shadow-xl shadow-brand-blue/5 border border-gray-100 p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-gray-100 text-center">
            <div className="px-4">
              <div className="text-4xl font-extrabold text-brand-blue mb-2">50K+</div>
              <div className="text-sm text-gray-500 font-medium">Services Delivered</div>
            </div>
            <div className="px-4">
              <div className="text-4xl font-extrabold text-brand-blue mb-2">100+</div>
              <div className="text-sm text-gray-500 font-medium">Certified Experts</div>
            </div>
            <div className="px-4">
              <div className="text-4xl font-extrabold text-brand-blue mb-2">4.9/5</div>
              <div className="text-sm text-gray-500 font-medium">Average Rating</div>
            </div>
            <div className="px-4">
              <div className="text-4xl font-extrabold text-brand-blue mb-2">10+</div>
              <div className="text-sm text-gray-500 font-medium">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-14 w-full mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl group">
             <Image 
               src="/about_mission_1780499278428.png" 
               alt="Our Mission" 
               fill 
               className="object-cover group-hover:scale-105 transition-transform duration-700" 
             />
             <div className="absolute inset-0 border-8 border-white/10 rounded-[2rem] z-10 pointer-events-none"></div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Our Mission</h2>
            <div className="w-20 h-1.5 bg-brand-cyan-light rounded-full mb-8"></div>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At PrimeFix, our mission is simple: to save you time and hassle. We believe that maintaining your car, bike, or home shouldn't require you to take a day off work or spend hours waiting at a crowded service center.
            </p>
            
            <div className="space-y-5">
              {[
                "Connect you with vetted professionals",
                "Ensure absolute pricing transparency",
                "Bring the workshop to your driveway",
                "Guarantee highest quality OEM parts"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-light-blue flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  </div>
                  <span className="text-gray-700 font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="w-full mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Our Core Values</h2>
            <p className="text-gray-500 text-lg">The foundational principles that guide every service we deliver and every interaction we have with our customers.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
              <div className="w-20 h-20 bg-brand-light-blue rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-blue transition-colors duration-300">
                <ShieldCheck className="w-10 h-10 text-brand-blue group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transparency</h3>
              <p className="text-gray-600 leading-relaxed">No hidden fees, no surprise charges. We believe in complete honesty, meaning you see the exact price before you ever book.</p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
              <div className="w-20 h-20 bg-brand-light-blue rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-blue transition-colors duration-300">
                <Award className="w-10 h-10 text-brand-blue group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality First</h3>
              <p className="text-gray-600 leading-relaxed">We partner only with strictly certified, highly experienced professionals who use genuine OEM parts to guarantee lasting results.</p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
              <div className="w-20 h-20 bg-brand-light-blue rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-blue transition-colors duration-300">
                <Clock className="w-10 h-10 text-brand-blue group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ultimate Convenience</h3>
              <p className="text-gray-600 leading-relaxed">Your time is incredibly valuable. We come directly to your home or office, working seamlessly around your busy schedule.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=" max-w-5xl mx-auto px-6">
        <div className="bg-brand-blue rounded-[2rem] p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
          
          <h2 className="relative z-10 text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Ready to experience the difference?</h2>
          <p className="relative z-10 text-brand-light-blue text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have revolutionized the way they manage their automotive and home maintenance.
          </p>
          <Link href="/book" className="relative z-10 inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-blue font-bold text-lg rounded-full hover:bg-brand-cyan-light hover:scale-105 active:scale-95 transition-all shadow-xl">
            Book a Service <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}

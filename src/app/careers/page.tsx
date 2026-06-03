import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Briefcase, Heart, Zap, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: "Careers – Join the PrimeFix Team",
  description:
    "Explore career opportunities at PrimeFix. We are hiring engineers, mechanics, developers, and customer support specialists to build India's best doorstep service platform.",
  keywords: [
    "PrimeFix careers",
    "jobs at PrimeFix",
    "hiring mechanics",
    "developer jobs India",
    "customer support jobs",
    "doorstep service jobs",
  ],
  alternates: {
    canonical: "https://www.primefix.in/careers",
  },
  openGraph: {
    title: "Careers at PrimeFix – Build the Future of Services",
    description:
      "Join PrimeFix and help us revolutionize the home and vehicle maintenance industry.",
    url: "https://www.primefix.in/careers",
    images: ["/about_hero_1780499264761.png"], // Reusing about hero or general banner
  },
};

const OPENINGS = [
  {
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    location: "Kolkata, India / Remote",
    type: "Full-time",
    description: "Lead the development of our core booking systems and mechanic dispatch algorithms. Strong experience with Next.js, Node.js, and Postgres is required.",
  },
  {
    title: "Certified Automobile Mechanic",
    department: "Operations",
    location: "Mumbai, India",
    type: "Full-time",
    description: "Provide doorstep car diagnostics, repairs, and maintenance. Must have 5+ years of experience and deep knowledge of modern vehicle systems.",
  },
  {
    title: "Customer Success Executive",
    department: "Support",
    location: "Remote",
    type: "Full-time",
    description: "Be the first point of contact for our users. Help customers schedule bookings, resolve issues, and ensure a seamless service experience.",
  },
  {
    title: "Product Designer (UI/UX)",
    department: "Design",
    location: "Kolkata, India",
    type: "Full-time",
    description: "Shape the visual and interactive experience of our web and mobile applications. Create premium, intuitive designs that users love.",
  },
];

const PERKS = [
  {
    title: "Competitive Compensation",
    description: "We offer top-of-market salaries, equity options, and performance bonuses.",
    icon: Zap,
  },
  {
    title: "Comprehensive Health",
    description: "Full health, dental, and vision coverage for you and your dependents.",
    icon: Heart,
  },
  {
    title: "Flexible Working",
    description: "Work from our hubs or remotely. We value output over hours logged.",
    icon: Globe,
  },
  {
    title: "Continuous Growth",
    description: "Annual learning stipends and access to premium industry courses.",
    icon: Briefcase,
  },
];

export default function CareersPage() {
  return (
    <div className="w-full bg-slate-50/50 pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Reusing the about hero image for the careers page for a premium look */}
        <Image 
          src="/about_hero_1780499264761.png" 
          alt="Careers at PrimeFix" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/90 via-brand-blue/70 to-brand-blue/95"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-light-blue font-bold text-sm mb-6 uppercase tracking-wider">
            Join Our Team
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Build the Future of Services
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-medium">
            We're on a mission to bring reliability and trust back to vehicle and home maintenance. Come build with us.
          </p>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        
        {/* Perks Section (Shifted Up) */}
        <div className="relative z-20 -mt-10 mb-20 bg-white rounded-3xl border border-gray-100 shadow-xl p-8 md:p-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Why PrimeFix?</h2>
            <p className="text-gray-500">
              We take care of our team so they can take care of our customers. Enjoy world-class benefits and a culture of ownership.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PERKS.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center p-4">
                  <div className="w-14 h-14 bg-blue-50 text-brand-blue rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-blue-100/50">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{perk.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-gray-500 max-w-2xl">
                Don't see a perfect match? Send us your resume anyway. We're always looking for exceptional talent.
              </p>
            </div>
            <a 
              href="mailto:careers@mrtecy.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-100 text-gray-900 font-bold rounded-xl hover:border-brand-blue hover:text-brand-blue transition-all"
            >
              Email Resume
            </a>
          </div>

          <div className="grid gap-6">
            {OPENINGS.map((job, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all group flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-bold rounded-full">
                      {job.department}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">
                      {job.type}
                    </span>
                    <span className="text-sm text-gray-400 font-medium flex items-center gap-1.5">
                      <Globe className="w-4 h-4" /> {job.location}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-3xl">
                    {job.description}
                  </p>
                </div>
                
                <div className="shrink-0">
                  <button className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gray-900 text-white font-bold rounded-xl group-hover:bg-brand-blue transition-all active:scale-95">
                    Apply Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

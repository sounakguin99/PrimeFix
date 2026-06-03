import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden">
        <Image 
          src="/legal_hero.png" 
          alt="Privacy Policy" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/90 via-brand-blue/70 to-brand-blue/95"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-light-blue font-bold text-sm mb-6 uppercase tracking-wider">
            Privacy & Safety
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto font-medium">
            Last updated: June 2026
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Breadcrumb / Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-brand-blue transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to Home
        </Link>

        {/* Content */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-12 shadow-sm space-y-10 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-light-blue text-brand-blue text-sm font-bold">1</span>
              Information We Collect
            </h2>
            <p>
              At PrimeFix, we collect information that you provide directly to us when using our services. This includes your name, email address, phone number, location, and payment information when you book a service. We may also collect device data and browser metadata to optimize user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-light-blue text-brand-blue text-sm font-bold">2</span>
              How We Use Your Information
            </h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services. Specifically, we use it to schedule mechanics or technicians, send notifications about your bookings, process payments, and provide customer support.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-light-blue text-brand-blue text-sm font-bold">3</span>
              Information Sharing
            </h2>
            <p>
              We do not sell your personal information. We only share it with our certified mechanics or service partners to facilitate your service request, and with trusted third-party payment processors to handle transactions securely.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-light-blue text-brand-blue text-sm font-bold">4</span>
              Cookies & Tracking
            </h2>
            <p>
              We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-light-blue text-brand-blue text-sm font-bold">5</span>
              Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="font-semibold text-gray-900">Have questions about your data?</h3>
              <p className="text-sm text-gray-500">Contact our Data Protection officer.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-brand-blue text-white font-medium px-5 py-2.5 rounded-xl hover:bg-brand-blue/90 transition-colors shadow-sm self-start sm:self-center"
            >
              Contact Privacy Team
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}

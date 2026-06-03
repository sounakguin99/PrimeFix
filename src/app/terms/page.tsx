import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service – Usage Agreement",
  description:
    "Read the PrimeFix Terms of Service. Understand your rights and obligations when using our doorstep car repair, bike servicing, and home maintenance booking platform.",
  alternates: {
    canonical: "https://www.primefix.in/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfService() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden">
        <Image 
          src="/legal_hero.png" 
          alt="Terms of Service" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/90 via-brand-blue/70 to-brand-blue/95"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-light-blue font-bold text-sm mb-6 uppercase tracking-wider">
            Legal Agreement
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            Terms of Service
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
              Acceptance of Terms
            </h2>
            <p>
              By accessing and using PrimeFix (the &quot;Service&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform. These terms apply to all visitors, users, and others who access or use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-light-blue text-brand-blue text-sm font-bold">2</span>
              Services Offered
            </h2>
            <p>
              PrimeFix is a platform that connects customers with certified engineering, car repair, bike maintenance, home appliances, and electrical service providers. We strive to maintain the highest quality of work, but the final execution relies on scheduling availability and specific scope requirements discussed at booking.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-light-blue text-brand-blue text-sm font-bold">3</span>
              User Accounts & Security
            </h2>
            <p>
              When you create an account or book a service with PrimeFix, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the terms. You are responsible for safeguarding your access details and for any activities or actions under your booking details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-light-blue text-brand-blue text-sm font-bold">4</span>
              Payments and Billing
            </h2>
            <p>
              All prices listed on the platform are in local currency unless stated otherwise. By providing a payment method, you authorize PrimeFix to charge the total service amount, including applicable taxes and handling fees. Payments are processed securely via our trusted payment gateways.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-light-blue text-brand-blue text-sm font-bold">5</span>
              Cancellations & Modifications
            </h2>
            <p>
              Cancellations of scheduled service bookings must be made in accordance with our Refund and Cancellation Policy. We reserve the right to charge cancellation fees if a service booking is cancelled close to the scheduled start time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-light-blue text-brand-blue text-sm font-bold">6</span>
              Limitation of Liability
            </h2>
            <p>
              In no event shall PrimeFix, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-light-blue text-brand-blue text-sm font-bold">7</span>
              Modifications to Terms
            </h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="font-semibold text-gray-900">Questions about our Terms?</h3>
              <p className="text-sm text-gray-500">Our support team is here to assist you.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-brand-blue text-white font-medium px-5 py-2.5 rounded-xl hover:bg-brand-blue/90 transition-colors shadow-sm self-start sm:self-center"
            >
              Contact Support
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}

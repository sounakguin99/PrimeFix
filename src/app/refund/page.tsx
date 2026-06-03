import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, RotateCcw } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "Understand PrimeFix's refund and cancellation policy. Learn about service cancellation windows, refund eligibility, processing times, and rescheduling options for car repair, bike service & home maintenance bookings.",
  alternates: {
    canonical: "https://www.primefix.in/refund",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RefundPolicy() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden">
        <Image 
          src="/legal_hero.png" 
          alt="Refund Policy" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/90 via-brand-blue/70 to-brand-blue/95"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-light-blue font-bold text-sm mb-6 uppercase tracking-wider">
            Refunds & Returns
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            Refund & Cancellation Policy
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
              Service Cancellation
            </h2>
            <p>
              We understand that plans can change. You can cancel or reschedule any booked service through our platform or by contacting customer support. To avoid cancellation fees, cancellations must be made at least 24 hours prior to the scheduled service window.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-light-blue text-brand-blue text-sm font-bold">2</span>
              Cancellation Fees
            </h2>
            <p>
              If a service is cancelled within 24 hours of the scheduled start time, a cancellation fee up to 20% of the booking value may apply to cover dispatcher and partner scheduling costs. If our mechanic or service agent has already arrived at your location, the call-out fee is fully non-refundable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-light-blue text-brand-blue text-sm font-bold">3</span>
              Refund Eligibility
            </h2>
            <p>
              Refunds are issued under the following circumstances:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>The service provider fails to show up within the scheduled timeframe and no alternative is agreed upon.</li>
              <li>The service is cancelled by PrimeFix due to weather conditions, logistics, or technician unavailability.</li>
              <li>A service issue is verified by our quality assurance team to be due to poor workmanship or faulty parts supplied directly by us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-light-blue text-brand-blue text-sm font-bold">4</span>
              Processing Refunds
            </h2>
            <p>
              Once a refund request is approved, the refund is processed automatically to the original method of payment. Credit card refunds may take 5 to 10 business days to appear on your statement depending on your bank or financial institution.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-light-blue text-brand-blue text-sm font-bold">5</span>
              Rescheduling
            </h2>
            <p>
              You may reschedule a service up to 4 hours before the appointment window at no additional charge. Rescheduling is subject to scheduling slot availability and mechanic availability in your area.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="font-semibold text-gray-900">Need to request a refund?</h3>
              <p className="text-sm text-gray-500">Provide your booking reference ID to speed up processing.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-brand-blue text-white font-medium px-5 py-2.5 rounded-xl hover:bg-brand-blue/90 transition-colors shadow-sm self-start sm:self-center"
            >
              Submit Refund Request
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}

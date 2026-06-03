import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="hidden md:block bg-white border-t border-gray-200 mt-20">
      <div className="w-full mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/primefix_logo.png"
                alt="PrimeFix Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-2xl font-bold text-brand-blue tracking-tight">
                PrimeFix
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Your trusted partner for home, car, and engineering services.
              Professional quality, delivered right to your doorstep.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-brand-blue/10 hover:text-brand-blue flex items-center justify-center cursor-pointer transition-all text-gray-500 hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-brand-blue/10 hover:text-brand-blue flex items-center justify-center cursor-pointer transition-all text-gray-500 hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-brand-blue/10 hover:text-brand-blue flex items-center justify-center cursor-pointer transition-all text-gray-500 hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <Link
                  href="/category/car"
                  className="hover:text-brand-blue transition-colors"
                >
                  Car Repair
                </Link>
              </li>
              <li>
                <Link
                  href="/category/bike"
                  className="hover:text-brand-blue transition-colors"
                >
                  Bike Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="/category/electrician"
                  className="hover:text-brand-blue transition-colors"
                >
                  Electrical Work
                </Link>
              </li>
              <li>
                <Link
                  href="/category/for-you"
                  className="hover:text-brand-blue transition-colors"
                >
                  Home Appliances
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <Link
                  href="/about"
                  className="hover:text-brand-blue transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-brand-blue transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-brand-blue transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-brand-blue transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <Link
                  href="/terms"
                  className="hover:text-brand-blue transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-brand-blue transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund"
                  className="hover:text-brand-blue transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 flex items-center justify-between">
          <p className="text-sm text-gray-400">
            © 2026 PrimeFix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

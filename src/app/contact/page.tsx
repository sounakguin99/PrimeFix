import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: "Contact Us – Get Support & Assistance",
  description:
    "Need help with a booking or have a question? Contact PrimeFix support team available 7 days a week, 8 AM to 9 PM. Call +91 98765 43210 or email support@mrtecy.com. Visit our Kolkata office.",
  keywords: [
    "contact PrimeFix",
    "PrimeFix support",
    "customer service doorstep repair",
    "book mechanic contact",
    "PrimeFix phone number",
    "PrimeFix email",
  ],
  alternates: {
    canonical: "https://www.primefix.in/contact",
  },
  openGraph: {
    title: "Contact PrimeFix – We're Here to Help",
    description:
      "Get in touch with PrimeFix support. Available 7 days a week. Call, email, or visit us.",
    url: "https://www.primefix.in/contact",
    images: ["/contact_hero_1780500341763.png"],
  },
};

export default function ContactUs() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <Image 
          src="/contact_hero_1780500341763.png" 
          alt="Contact Us" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/90 via-brand-blue/70 to-brand-blue/95"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-light-blue font-bold text-sm mb-6 uppercase tracking-wider">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            We're Here to Help
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-medium">
            Have a question or need assistance with a booking? Our support team is available around the clock.
          </p>
        </div>
      </section>

      <div className="w-full mx-auto px-6 py-16">

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
        {/* Contact Information (Left) */}
        <div className="bg-brand-blue rounded-2xl p-6 md:p-8 text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-brand-cyan shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-1">Our Headquarters</h4>
                <p className="text-brand-light-blue">123 Tech Park Avenue<br/>Kolkata, West Bengal 700001<br/>India</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-brand-cyan shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-1">Phone Number</h4>
                <p className="text-brand-light-blue">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-brand-cyan shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-1">Email Support</h4>
                <p className="text-brand-light-blue">support@mrtecy.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-brand-cyan shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-1">Working Hours</h4>
                <p className="text-brand-light-blue">Monday - Sunday<br/>8:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form (Right) */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all" placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" className="w-full bg-brand-blue text-white font-bold text-lg py-4 rounded-lg hover:bg-blue-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Big Map at Bottom */}
      <div className="w-full h-[500px] md:h-[600px] bg-gray-200 rounded-2xl overflow-hidden relative shadow-sm border border-gray-100 mb-8">
        <iframe 
          src="https://maps.google.com/maps?q=Kolkata,%20West%20Bengal&t=&z=12&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        ></iframe>
      </div>
    </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { 
  Calendar, 
  Clock, 
  User, 
  CheckCircle2, 
  XCircle, 
  Clock3, 
  ChevronRight,
  ShieldCheck,
  Search
} from "lucide-react";

// Mock Data for demonstration since we don't have a real backend yet
const MOCK_BOOKINGS = [
  {
    id: "BKG-2026-8921",
    serviceTitle: "Full Home Cleaning",
    date: "June 10, 2026",
    time: "10:00 AM - 02:00 PM",
    status: "upcoming",
    price: "₹3499",
    professional: "Ravi Kumar (Assigned)",
    image: "/srv_home_clean_1780502648361.png",
    address: "123 Tech Park Avenue, Kolkata, West Bengal 700001",
  },
  {
    id: "BKG-2026-7844",
    serviceTitle: "Car Battery Replacement",
    date: "May 25, 2026",
    time: "02:30 PM - 03:30 PM",
    status: "completed",
    price: "₹4500",
    professional: "Amit Singh",
    image: "/srv_battery_replace_1780466885462.png",
    address: "123 Tech Park Avenue, Kolkata, West Bengal 700001",
  },
  {
    id: "BKG-2026-6102",
    serviceTitle: "Sofa Deep Cleaning",
    date: "May 12, 2026",
    time: "11:00 AM - 12:30 PM",
    status: "completed",
    price: "₹699",
    professional: "Suresh Das",
    image: "/srv_sofa_clean_1780502629293.png",
    address: "123 Tech Park Avenue, Kolkata, West Bengal 700001",
  },
  {
    id: "BKG-2026-5011",
    serviceTitle: "Interior Wall Painting",
    date: "April 02, 2026",
    time: "09:00 AM - 05:00 PM",
    status: "cancelled",
    price: "₹5000",
    professional: "Unassigned",
    image: "/srv_wall_paint_1780502666597.png",
    address: "123 Tech Park Avenue, Kolkata, West Bengal 700001",
  }
];

export default function BookingsPage() {
  const { user, isLoggedIn, isLoading } = useAuth();
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  if (isLoading) {
    return (
      <div className="w-full bg-slate-50 min-h-[70vh] flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-brand-blue border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-500 font-medium">Loading your bookings...</p>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="w-full bg-slate-50 min-h-[70vh] flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-10 text-center">
          <div className="w-20 h-20 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
            <User className="w-10 h-10" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Login Required</h1>
          <p className="text-gray-500 mb-8 leading-relaxed text-sm">
            Please log in to view your upcoming and past service bookings.
          </p>
          <button className="w-full py-3.5 bg-brand-blue text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-md">
            Sign In to Continue
          </button>
        </div>
      </div>
    );
  }

  const filteredBookings = MOCK_BOOKINGS.filter((booking) => {
    if (activeTab === "upcoming") return booking.status === "upcoming";
    return booking.status === "completed" || booking.status === "cancelled";
  });

  return (
    <div className="w-full bg-slate-50/50 pb-20 min-h-screen">
      {/* Premium Minimal Hero */}
      <section className="w-full bg-white border-b border-gray-100 pt-10 pb-8">
        <div className="max-w-[1000px] mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
            My Bookings
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            Manage your upcoming services and view your past booking history.
          </p>
        </div>
      </section>

      <div className="max-w-[1000px] mx-auto px-4 md:px-6 mt-8">
        
        {/* Tabs and Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          
          <div className="flex p-1 bg-gray-100/80 rounded-xl w-full md:w-auto">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`flex-1 md:flex-none px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === "upcoming"
                  ? "bg-white text-brand-blue shadow-sm"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-200/50"
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`flex-1 md:flex-none px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === "past"
                  ? "bg-white text-brand-blue shadow-sm"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-200/50"
              }`}
            >
              Past Bookings
            </button>
          </div>

          <div className="relative w-full md:w-64 shrink-0">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search bookings..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Bookings List */}
        {filteredBookings.length > 0 ? (
          <div className="space-y-5">
            {filteredBookings.map((booking) => (
              <div 
                key={booking.id}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                {/* Header of Card */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50 bg-gray-50/30">
                  <span className="text-xs font-bold text-gray-500 tracking-wider">
                    {booking.id}
                  </span>
                  
                  {/* Status Badge */}
                  {booking.status === "upcoming" && (
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-brand-blue text-xs font-bold rounded-full border border-blue-100/50">
                      <Clock3 className="w-3.5 h-3.5" /> Upcoming
                    </span>
                  )}
                  {booking.status === "completed" && (
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-full border border-emerald-100/50">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Completed
                    </span>
                  )}
                  {booking.status === "cancelled" && (
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-full border border-red-100/50">
                      <XCircle className="w-3.5 h-3.5" /> Cancelled
                    </span>
                  )}
                </div>

                {/* Body of Card */}
                <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
                  
                  {/* Image */}
                  <div className="relative w-full md:w-32 h-40 md:h-32 rounded-2xl overflow-hidden shrink-0 border border-gray-100">
                    <Image
                      src={booking.image}
                      alt={booking.serviceTitle}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 space-y-4">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-xl font-bold text-gray-900 leading-tight">
                        {booking.serviceTitle}
                      </h3>
                      <span className="text-lg font-extrabold text-gray-900 shrink-0">
                        {booking.price}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                        <Calendar className="w-4 h-4 text-brand-cyan shrink-0" />
                        {booking.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                        <Clock className="w-4 h-4 text-brand-cyan shrink-0" />
                        {booking.time}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                        <User className="w-4 h-4 text-brand-cyan shrink-0" />
                        {booking.professional}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-brand-blue font-semibold">
                        <ShieldCheck className="w-4 h-4 shrink-0" />
                        Service Warranty Applied
                      </div>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="w-full md:w-auto shrink-0 flex flex-col gap-3 border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-8">
                    {booking.status === "upcoming" ? (
                      <>
                        <button className="w-full md:w-[140px] py-2.5 bg-brand-blue text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-sm">
                          Reschedule
                        </button>
                        <button className="w-full md:w-[140px] py-2.5 bg-white border border-gray-200 text-red-600 text-sm font-bold rounded-xl hover:bg-red-50 hover:border-red-200 transition-colors">
                          Cancel
                        </button>
                      </>
                    ) : booking.status === "completed" ? (
                      <>
                        <button className="w-full md:w-[140px] py-2.5 bg-brand-blue text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-sm">
                          Book Again
                        </button>
                        <button className="w-full md:w-[140px] py-2.5 bg-white border border-gray-200 text-gray-700 text-sm font-bold rounded-xl hover:bg-gray-50 transition-colors">
                          View Invoice
                        </button>
                      </>
                    ) : (
                      <button className="w-full md:w-[140px] py-2.5 bg-brand-blue text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-sm">
                        Rebook
                      </button>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-12 text-center">
            <div className="w-20 h-20 bg-gray-50 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No {activeTab} bookings found
            </h3>
            <p className="text-gray-500 mb-6">
              You don't have any {activeTab} service bookings at the moment.
            </p>
            <Link 
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-sm"
            >
              Explore Services
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}

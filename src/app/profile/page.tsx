"use client";

import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  Edit2,
  Clock,
  CheckCircle2,
  Settings,
  Bell,
  Shield,
  Lock,
  Camera,
  Save,
  Plus,
  Wrench,
  Sparkles,
  ChevronRight,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Preset avatars for a premium selection UX
const PRESET_AVATARS = [
  { id: "avatar-1", url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150", label: "Business Professional" },
  { id: "avatar-2", url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150", label: "Casual Professional" },
  { id: "avatar-3", url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150", label: "Friendly Portrait" },
  { id: "avatar-4", url: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&q=80&w=150&h=150", label: "Creative 3D Avatar" },
];

export default function ProfilePage() {
  const { user, isLoggedIn, login, logout, updateProfile } = useAuth();
  const [activeTab, setActiveTab] = useState<"overview" | "edit" | "bookings" | "settings">("overview");

  // Edit form state
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    location: user.location,
    bio: user.bio || "",
  });

  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [showAvatarSelector, setShowAvatarSelector] = useState(false);

  // Sync state if user changes in context
  React.useEffect(() => {
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      location: user.location,
      bio: user.bio || "",
    });
  }, [user]);

  // Mock Bookings matching PrimeFix services data
  const mockBookings = [
    {
      id: "PF-4820",
      service: "Sofa Deep Cleaning",
      category: "Cleaning",
      date: "June 6, 2026",
      time: "10:00 AM",
      price: "₹699",
      status: "Scheduled",
      statusColor: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
      id: "PF-3901",
      service: "Tap Repair & Replacement",
      category: "Plumbing",
      date: "May 29, 2026",
      time: "02:30 PM",
      price: "₹249",
      status: "Completed",
      statusColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      id: "PF-2940",
      service: "Alternator Check",
      category: "Car Services",
      date: "May 15, 2026",
      time: "11:00 AM",
      price: "₹499",
      status: "Completed",
      statusColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      id: "PF-1082",
      service: "Switchboard Repair",
      category: "Electrician",
      date: "May 02, 2026",
      time: "04:00 PM",
      price: "₹199",
      status: "Canceled",
      statusColor: "bg-rose-50 text-rose-600 border-rose-100",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setNotification({ type: "error", message: "Name cannot be empty." });
      return;
    }
    if (!formData.email.includes("@")) {
      setNotification({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    updateProfile(formData);
    setNotification({ type: "success", message: "Profile details updated successfully!" });
    setActiveTab("overview");

    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  const handleAvatarSelect = (url: string) => {
    updateProfile({ avatar: url });
    setShowAvatarSelector(false);
    setNotification({ type: "success", message: "Profile picture updated!" });
    setTimeout(() => setNotification(null), 3000);
  };

  const toggleNotificationSetting = (field: "notificationsEnabled" | "newsletterEnabled") => {
    updateProfile({ [field]: !user[field] });
    setNotification({ type: "success", message: "Preferences updated!" });
    setTimeout(() => setNotification(null), 3000);
  };

  // Render Logged Out state
  if (!isLoggedIn) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 bg-slate-50/50">
        <div className="max-w-md w-full bg-white rounded-3xl border border-gray-100 shadow-xl p-8 text-center transition-all duration-300 hover:shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500 mx-auto mb-6">
            <Lock className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Sign in to view your profile
          </h2>
          <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8">
            You must be logged in to view and manage your account details, track current bookings, and customize your preferences.
          </p>
          <button
            onClick={login}
            className="w-full py-4 px-6 bg-brand-blue hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl active:scale-[0.98] cursor-pointer"
          >
            Sign In Now
          </button>
          <Link
            href="/"
            className="inline-block mt-4 text-xs font-bold text-gray-400 hover:text-brand-blue transition-colors"
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  // Initials for avatar fallback
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-16 pt-6">
      <div className="w-full mx-auto px-4 sm:px-6">
        
        {/* Toast Notification Banner */}
        {notification && (
          <div
            className={`fixed bottom-24 right-4 sm:bottom-8 sm:right-8 z-50 px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 border animate-in slide-in-from-bottom duration-300 ${
              notification.type === "success"
                ? "bg-emerald-50 text-emerald-800 border-emerald-100"
                : "bg-rose-50 text-rose-800 border-rose-100"
            }`}
          >
            <CheckCircle2 className={`w-5 h-5 ${notification.type === "success" ? "text-emerald-500" : "text-rose-500"}`} />
            <p className="text-sm font-bold">{notification.message}</p>
          </div>
        )}

        {/* Profile Card Header */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mb-8 relative">
          
          {/* Header Cover Banner */}
          <div className="h-44 sm:h-56 bg-gradient-to-r from-brand-blue via-blue-600 to-brand-cyan relative overflow-hidden">
            <div className="absolute right-0 top-0 -mt-16 -mr-16 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
            <div className="absolute left-1/4 bottom-0 -mb-12 w-48 h-48 rounded-full bg-white/5 blur-xl pointer-events-none"></div>
            <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white font-bold text-xs px-3 py-1.5 rounded-full border border-white/10">
              {user.tier}
            </span>
          </div>

          {/* User Info Overlay Wrapper */}
          <div className="px-6 pb-6 pt-0 sm:px-8 sm:pb-8 flex flex-col sm:flex-row sm:items-end sm:gap-6 -mt-16 relative z-10">
            
            {/* Profile Image Wrapper */}
            <div className="relative group shrink-0 mx-auto sm:mx-0">
              <div className="w-32 h-32 rounded-3xl border-4 border-white bg-brand-light-blue shadow-lg overflow-hidden flex items-center justify-center text-brand-blue font-black text-3xl select-none">
                {user.avatar ? (
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  initials
                )}
              </div>
              <button
                onClick={() => setShowAvatarSelector(!showAvatarSelector)}
                className="absolute bottom-1 right-1 w-9 h-9 bg-white border border-gray-100 text-gray-600 hover:text-brand-blue hover:scale-105 active:scale-95 transition-all rounded-xl shadow-md flex items-center justify-center cursor-pointer"
                title="Change Avatar"
              >
                <Camera className="w-4 h-4" />
              </button>
            </div>

            {/* Profile Identity Details */}
            <div className="text-center sm:text-left flex-1 mt-4 sm:mt-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 justify-center sm:justify-start">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {user.name}
                </h1>
                <span className="w-fit mx-auto sm:mx-0 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 font-extrabold text-xs tracking-wide">
                  Verified Member
                </span>
              </div>
              <p className="text-gray-500 font-medium text-sm mt-1 flex items-center justify-center sm:justify-start gap-1">
                <MapPin className="w-4 h-4 text-brand-blue" />
                {user.location}
              </p>
              <div className="mt-3 flex flex-wrap gap-4 text-xs font-semibold text-gray-400 justify-center sm:justify-start">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  Joined {user.memberSince}
                </span>
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-brand-blue" />
                  {user.tier}
                </span>
              </div>
            </div>

            {/* Actions button */}
            <div className="mt-6 sm:mt-0 flex gap-3 justify-center sm:justify-end">
              <button
                onClick={logout}
                className="px-4 py-2.5 border border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 font-bold rounded-xl text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>

          {/* Avatar Preset Selector Modal/Popup */}
          {showAvatarSelector && (
            <div className="mx-6 sm:mx-8 mb-6 p-5 bg-slate-50 border border-gray-100 rounded-2xl animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-800 text-sm">Choose a Profile Avatar</h3>
                <button
                  onClick={() => setShowAvatarSelector(false)}
                  className="text-xs font-bold text-gray-400 hover:text-gray-600"
                >
                  Close
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {PRESET_AVATARS.map((avatar) => (
                  <button
                    key={avatar.id}
                    onClick={() => handleAvatarSelect(avatar.url)}
                    className="flex flex-col items-center p-2 rounded-xl bg-white border border-gray-100 hover:border-brand-blue hover:shadow-sm transition-all cursor-pointer group"
                  >
                    <div className="w-16 h-16 rounded-full overflow-hidden relative shadow-sm mb-2 group-hover:scale-105 transition-transform">
                      <Image
                        src={avatar.url}
                        alt={avatar.label}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 group-hover:text-brand-blue transition-colors">
                      {avatar.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Dashboard Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar Menu & Quick Stats - 4 Columns */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Navigation Tabs Card */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-4 flex flex-row lg:flex-col gap-1 overflow-x-auto hide-scrollbar sm:p-5">
              {[
                { id: "overview", label: "Dashboard Overview", icon: User },
                { id: "edit", label: "Edit Account Details", icon: Edit2 },
                { id: "bookings", label: "My Service Bookings", icon: Clock },
                { id: "settings", label: "System Settings", icon: Settings },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? "bg-brand-blue/5 text-brand-blue lg:translate-x-1"
                        : "text-gray-500 hover:text-brand-blue hover:bg-slate-50"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-brand-blue" : "text-gray-400"}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Stats Grid */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-extrabold text-gray-800 text-sm mb-4 tracking-tight">
                Profile Performance
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-2xl p-4 text-left">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center mb-3">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <span className="text-2xl font-black text-gray-900">12</span>
                  <p className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Booked Services</p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 text-left">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-2xl font-black text-gray-900">100%</span>
                  <p className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Rating Score</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-amber-800">You are a Gold Elite Member</h4>
                  <p className="text-[10px] font-bold text-amber-600/80 mt-0.5 leading-relaxed">
                    Enjoy flat 10% off on all automotive services and priority booking slots.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Action Workspace Content - 8 Columns */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-8">
            
            {/* WORKSPACE TAB: OVERVIEW */}
            {activeTab === "overview" && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div>
                  <h2 className="text-xl font-extrabold text-gray-900 mb-2 tracking-tight">Account Overview</h2>
                  <p className="text-gray-400 text-xs font-semibold">Your fundamental account profile information and details.</p>
                </div>

                {user.bio && (
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">About Me</h3>
                    <p className="text-gray-600 text-sm font-medium leading-relaxed">{user.bio}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-4 rounded-2xl border border-gray-100 flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-gray-400 shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Full Name</span>
                      <p className="text-sm font-extrabold text-gray-800 mt-0.5">{user.name}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl border border-gray-100 flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-gray-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Email Address</span>
                      <p className="text-sm font-extrabold text-gray-800 mt-0.5 truncate">{user.email}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl border border-gray-100 flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-gray-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Phone Number</span>
                      <p className="text-sm font-extrabold text-gray-800 mt-0.5">{user.phone}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl border border-gray-100 flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-gray-400 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Default Location</span>
                      <p className="text-sm font-extrabold text-gray-800 mt-0.5">{user.location}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-sm text-gray-800">Want to edit details?</h3>
                    <p className="text-xs text-gray-400 mt-0.5">Modify names, phone numbers, bios, or profile pictures easily.</p>
                  </div>
                  <button
                    onClick={() => setActiveTab("edit")}
                    className="px-4 py-2 border border-brand-blue/20 bg-brand-blue/5 hover:bg-brand-blue/10 text-brand-blue text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                    Edit Profile
                  </button>
                </div>
              </div>
            )}

            {/* WORKSPACE TAB: EDIT PROFILE */}
            {activeTab === "edit" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div>
                  <h2 className="text-xl font-extrabold text-gray-900 mb-2 tracking-tight">Edit Profile Details</h2>
                  <p className="text-gray-400 text-xs font-semibold">Change your account contact information and bio below.</p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 text-sm font-semibold transition-all"
                        placeholder="e.g. Sounak Sen"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 text-sm font-semibold transition-all"
                        placeholder="e.g. sounak@example.com"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone Number</label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 text-sm font-semibold transition-all"
                        placeholder="e.g. +91 98765 43210"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Location / City</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 text-sm font-semibold transition-all"
                        placeholder="e.g. Nanded, Maharashtra"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Bio / Description</label>
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      rows={3}
                      className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 text-sm font-semibold transition-all resize-none"
                      placeholder="Tell us about yourself..."
                    />
                  </div>

                  <div className="pt-4 flex gap-3">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-brand-blue hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
                    >
                      <Save className="w-4 h-4" />
                      Save Profile Changes
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("overview")}
                      className="px-6 py-3 border border-gray-200 hover:bg-slate-50 text-gray-600 font-bold rounded-xl text-sm transition-all cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* WORKSPACE TAB: SERVICE BOOKINGS */}
            {activeTab === "bookings" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div>
                  <h2 className="text-xl font-extrabold text-gray-900 mb-2 tracking-tight">Service Booking History</h2>
                  <p className="text-gray-400 text-xs font-semibold">Track active jobs or review past doorstep bookings details.</p>
                </div>

                <div className="space-y-4">
                  {mockBookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="p-5 border border-gray-100 rounded-2xl bg-white hover:border-brand-blue/10 hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-brand-light-blue text-brand-blue flex items-center justify-center shrink-0">
                          <Wrench className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2.5">
                            <h4 className="font-extrabold text-gray-800 text-sm sm:text-base">{booking.service}</h4>
                            <span className="text-[10px] font-bold text-gray-400 uppercase bg-slate-50 px-2 py-0.5 rounded border border-gray-100">
                              {booking.id}
                            </span>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold text-gray-400 mt-1.5">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5 text-gray-400" />
                              {booking.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-gray-400" />
                              {booking.time}
                            </span>
                            <span className="text-brand-blue font-bold">
                              {booking.price}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-3 pt-3 sm:pt-0 border-t border-gray-50 sm:border-t-0">
                        <span className={`px-3 py-1 rounded-full border text-xs font-extrabold ${booking.statusColor}`}>
                          {booking.status}
                        </span>
                        
                        <button className="p-2 border border-gray-100 hover:border-brand-blue/30 text-gray-400 hover:text-brand-blue transition-all rounded-xl cursor-pointer">
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-center">
                  <p className="text-sm font-semibold text-gray-600">Need a new service?</p>
                  <p className="text-xs text-gray-400 mt-1">Book certified vehicle checks, plumbing repairs, or home painting now.</p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 mt-4 px-5 py-2.5 bg-brand-blue hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    Browse Services
                  </Link>
                </div>
              </div>
            )}

            {/* WORKSPACE TAB: SETTINGS */}
            {activeTab === "settings" && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div>
                  <h2 className="text-xl font-extrabold text-gray-900 mb-2 tracking-tight">System Settings & Privacy</h2>
                  <p className="text-gray-400 text-xs font-semibold">Customize app notifications and security preferences.</p>
                </div>

                <div className="space-y-6">
                  
                  {/* Preferences Toggles */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Communication Preferences</h3>
                    
                    <div className="flex items-center justify-between p-4 border border-gray-100 rounded-2xl">
                      <div>
                        <h4 className="text-sm font-bold text-gray-800">Booking Push Notifications</h4>
                        <p className="text-xs text-gray-400 mt-0.5">Receive real-time progress updates when the technician arrives.</p>
                      </div>
                      <button
                        onClick={() => toggleNotificationSetting("notificationsEnabled")}
                        className={`w-11 h-6 rounded-full transition-all duration-300 relative focus:outline-none cursor-pointer border ${
                          user.notificationsEnabled 
                            ? "bg-brand-blue border-brand-blue" 
                            : "bg-slate-200 border-slate-200"
                        }`}
                      >
                        <div 
                          className={`w-4 h-4 rounded-full bg-white absolute top-0.5 transition-all duration-300 shadow-sm ${
                            user.notificationsEnabled ? "left-6" : "left-1"
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-100 rounded-2xl">
                      <div>
                        <h4 className="text-sm font-bold text-gray-800">Newsletter & Offers</h4>
                        <p className="text-xs text-gray-400 mt-0.5">Get email alerts with flat 20% discounts and limited-time coupons.</p>
                      </div>
                      <button
                        onClick={() => toggleNotificationSetting("newsletterEnabled")}
                        className={`w-11 h-6 rounded-full transition-all duration-300 relative focus:outline-none cursor-pointer border ${
                          user.newsletterEnabled 
                            ? "bg-brand-blue border-brand-blue" 
                            : "bg-slate-200 border-slate-200"
                        }`}
                      >
                        <div 
                          className={`w-4 h-4 rounded-full bg-white absolute top-0.5 transition-all duration-300 shadow-sm ${
                            user.newsletterEnabled ? "left-6" : "left-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Security Tier */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Account Protection</h3>
                    
                    <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0">
                        <Shield className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-800">Two-Factor Authentication (2FA)</h4>
                        <p className="text-xs text-gray-500 leading-relaxed mt-1">
                          Protect your booking wallet and personal information with phone SMS verification. (Secured by PrimeFix Shield)
                        </p>
                        <span className="inline-block mt-3 text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
                          Enforced via OTP
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Membership Card details */}
                  <div className="p-6 bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl text-white relative overflow-hidden shadow-lg">
                    <div className="absolute right-0 bottom-0 -mb-10 -mr-10 w-44 h-44 rounded-full bg-white/5 blur-2xl"></div>
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 rounded-full bg-indigo-500/10 blur-xl"></div>
                    
                    <div className="relative z-10 flex flex-col justify-between h-36">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-[10px] font-bold text-indigo-200 uppercase tracking-widest">Membership Tier</p>
                          <h4 className="text-lg font-black tracking-tight mt-1">{user.tier}</h4>
                        </div>
                        <Sparkles className="w-6 h-6 text-indigo-300" />
                      </div>

                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-[9px] text-slate-400">BENEFICIARY</p>
                          <p className="text-sm font-bold tracking-wide mt-0.5">{user.name}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[9px] text-slate-400">EXPIRES</p>
                          <p className="text-sm font-bold tracking-wide mt-0.5">DEC 2026</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

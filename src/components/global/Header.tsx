"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Bell, User, LogOut, Menu, X } from "lucide-react";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const { user, isLoggedIn, login, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Bookings", href: "/bookings" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      {/* Mobile Header (Top bar) */}
      <div className="md:hidden">
        <div className="flex items-center justify-between px-4 py-3.5 relative z-50 bg-white/95 backdrop-blur-md">
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/primefix_logo.png"
              alt="PrimeFix Logo"
              width={40}
              height={40}
              className="object-contain shrink-0"
            />
            <span className="text-lg sm:text-xl font-extrabold text-brand-blue tracking-tight shrink-0">
              PrimeFix
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1.5 bg-gray-50/80 px-3 py-1.5 rounded-full shadow-sm text-xs font-semibold text-gray-700 border border-gray-100">
              <MapPin className="w-3.5 h-3.5 text-brand-blue" />
              <span>Nanded</span>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 -mr-1.5 text-gray-600 hover:text-brand-blue hover:bg-gray-100 rounded-full transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-[500px] opacity-100 visible" : "max-h-0 opacity-0 invisible"}`}>
          <div className="px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl font-bold transition-colors ${
                    isActive ? "bg-brand-blue/5 text-brand-blue" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <div className="h-px bg-gray-100 my-2"></div>
            
            {isLoggedIn ? (
              <>
                <Link
                  href="/profile"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <User className="w-5 h-5 text-gray-400" />
                  My Profile
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-red-600 hover:bg-red-50 transition-colors text-left"
                >
                  <LogOut className="w-5 h-5 text-red-400" />
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  login();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 mt-2 bg-brand-blue text-white rounded-xl hover:bg-blue-700 active:scale-95 transition-all font-bold"
              >
                <User className="w-5 h-5" />
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block w-full mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative overflow-hidden rounded-xl transition-transform group-hover:scale-105 duration-300">
              <Image
                src="/primefix_logo.png"
                alt="PrimeFix Logo"
                width={72}
                height={72}
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-extrabold text-brand-blue tracking-tight">
              PrimeFix
            </span>
          </Link>

          {/* Navigation Links in Center */}
          <nav className="flex items-center gap-1 font-medium text-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-brand-blue bg-brand-blue/5"
                      : "text-gray-600 hover:text-brand-blue hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Actions on Right */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 pl-6">
              {isLoggedIn ? (
                <div className="relative group py-2">
                  <button className="flex items-center gap-2.5 p-1 pr-4 border border-gray-200 rounded-full hover:border-brand-blue/30 hover:bg-brand-blue/5 hover:shadow-sm transition-all bg-white cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-brand-light-blue flex items-center justify-center text-brand-blue overflow-hidden shrink-0 font-extrabold text-sm">
                      {user.avatar ? (
                        <Image
                          src={user.avatar}
                          alt={user.name}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        user.name.charAt(0).toUpperCase()
                      )}
                    </div>
                    <span className="text-sm font-bold text-gray-700 transition-colors">
                      {user.name.split(" ")[0]}
                    </span>
                  </button>

                  {/* Dropdown Menu with Slide & Fade Anim */}
                  <div className="absolute right-0 top-full mt-1 w-52 bg-white border border-gray-100 rounded-2xl shadow-xl py-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right scale-95 group-hover:scale-100 z-50">
                    <div className="px-4 py-2 border-b border-gray-100 mb-1.5">
                      <p className="text-[10px] text-gray-400 font-bold tracking-wider uppercase">
                        Signed in as
                      </p>
                      <p className="text-sm font-extrabold text-gray-800 truncate mt-0.5">
                        {user.name}
                      </p>
                      <span className="inline-block mt-1 text-[10px] font-bold text-brand-blue bg-brand-light-blue px-2.5 py-0.5 rounded-full">
                        {user.tier}
                      </span>
                    </div>
                    <Link
                      href="/profile"
                      className="flex items-center gap-2.5 px-4 py-2 text-sm text-gray-600 hover:text-brand-blue hover:bg-brand-blue/5 transition-colors font-semibold"
                    >
                      <User className="w-4 h-4 text-gray-400" />
                      My Profile
                    </Link>
                    <button
                      onClick={logout}
                      className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors font-semibold text-left cursor-pointer border-t border-gray-50 mt-1 pt-2"
                    >
                      <LogOut className="w-4 h-4 text-red-400" />
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={login}
                  className="flex items-center gap-2 px-5 py-2.5 bg-brand-blue text-white rounded-full hover:bg-blue-700 hover:shadow-md active:scale-95 transition-all text-sm font-bold cursor-pointer"
                >
                  <User className="w-4 h-4" />
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

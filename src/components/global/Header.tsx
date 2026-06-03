"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Bell, User, LogOut } from "lucide-react";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const pathname = usePathname();
  const { user, isLoggedIn, login, logout } = useAuth();

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
        <div className="flex items-center justify-between px-4 py-3.5">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/primefix_logo.png"
              alt="PrimeFix Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="text-xl font-extrabold text-brand-blue tracking-tight">PrimeFix</span>
          </Link>
          <div className="flex items-center gap-1.5 bg-gray-50/80 px-3 py-1.5 rounded-full shadow-sm text-xs font-semibold text-gray-700 border border-gray-100">
            <MapPin className="w-3.5 h-3.5 text-brand-blue" />
            <span>Nanded</span>
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
                width={40}
                height={40}
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
                      <p className="text-[10px] text-gray-400 font-bold tracking-wider uppercase">Signed in as</p>
                      <p className="text-sm font-extrabold text-gray-800 truncate mt-0.5">{user.name}</p>
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

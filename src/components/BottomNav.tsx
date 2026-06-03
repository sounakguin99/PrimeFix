'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Bell, CalendarClock, History, User } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Notifications', href: '/notifications', icon: Bell },
    { name: 'BOOK NOW', href: '/book', icon: CalendarClock, isPrimary: true },
    { name: 'Bookings', href: '/bookings', icon: History },
    { name: 'Account', href: '/profile', icon: User },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-brand-blue text-white pb-safe">
      <div className="flex items-center justify-between px-2 h-20">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          if (item.isPrimary) {
            return (
              <Link key={item.name} href={item.href} className="flex flex-col items-center justify-center -mt-6">
                <div className="bg-brand-blue border-4 border-[#F8FAFC] w-16 h-16 rounded-full flex flex-col items-center justify-center shadow-lg transform active:scale-95 transition-transform">
                  <Icon className="w-6 h-6 mb-1" />
                </div>
                <span className="text-[10px] font-bold mt-1 tracking-wide">{item.name}</span>
              </Link>
            );
          }

          return (
            <Link 
              key={item.name} 
              href={item.href}
              className={`flex flex-col items-center justify-center w-16 h-full opacity-80 hover:opacity-100 transition-opacity ${isActive ? 'opacity-100' : ''}`}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-[10px] font-medium">{item.name}</span>
              {isActive && <div className="w-8 h-1 bg-white rounded-full mt-1 absolute bottom-1" />}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

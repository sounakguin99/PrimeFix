import React from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="w-full bg-slate-50 min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-xl w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-10 md:p-16 text-center">
        <div className="text-8xl md:text-9xl font-extrabold text-brand-blue mb-6">404</div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-500 mb-8 leading-relaxed font-medium">
          Oops! The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-blue text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

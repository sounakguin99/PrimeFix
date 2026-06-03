'use client';

import React, { useEffect } from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="w-full bg-slate-50 min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-xl w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-10 md:p-16 text-center">
        <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-8">
          <AlertTriangle className="w-12 h-12 text-red-500" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Something went wrong!</h1>
        <p className="text-gray-500 mb-8 leading-relaxed font-medium">
          We apologize for the inconvenience. An unexpected error has occurred. Our technical team has been notified.
        </p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gray-900 text-white font-bold rounded-full hover:bg-black transition-all shadow-md hover:shadow-lg active:scale-95"
        >
          <RefreshCcw className="w-5 h-5" />
          Try Again
        </button>
      </div>
    </div>
  );
}

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/data';

export default function Blog() {
  return (
    <div className="w-full bg-gray-50 pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <Image 
          src="/blog_hero_1780500323177.png" 
          alt="PrimeFix Blog" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/90 via-brand-blue/70 to-brand-blue/95"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-light-blue font-bold text-sm mb-6 uppercase tracking-wider">
            Our Blog
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Insights & Guides
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-medium">
            Tips, guides, and industry news for maintaining your vehicles and home perfectly.
          </p>
        </div>
      </section>

      <div className="w-full mx-auto px-6 py-16">

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post, idx) => (
          <article key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-all">
            <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-blue">
                {post.category}
              </div>
            </div>
            <div className="p-6">
              <div className="text-xs text-gray-400 mb-3">{post.date}</div>
              <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-brand-blue font-semibold text-sm hover:underline">
                Read Article <span className="ml-1">&rarr;</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
      </div>
    </div>
  );
}

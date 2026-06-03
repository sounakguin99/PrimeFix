import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, User, Calendar, BookOpen } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get other posts for "Related Articles"
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="w-full bg-slate-50/50 pb-20">
      {/* Blog Hero Section */}
      <section className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden">
        <Image 
          src={post.image} 
          alt={post.title} 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/90 via-brand-blue/70 to-brand-blue/95"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-light-blue font-bold text-sm mb-6 uppercase tracking-wider">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight max-w-3xl mx-auto">
            {post.title}
          </h1>
          
          {/* Metadata */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-200 text-sm font-medium">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-brand-cyan-light" />
              By {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-brand-cyan-light" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-brand-cyan-light" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Blog Article Layout */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 mt-12 grid lg:grid-cols-3 gap-10">
        
        {/* Main Content */}
        <article className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-10">
          <div className="mb-6">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-brand-blue font-bold text-sm hover:underline"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>

          {/* HTML Rendered Content */}
          <div 
            className="prose prose-blue max-w-none text-gray-600 space-y-6 
                       prose-headings:text-gray-900 prose-headings:font-extrabold 
                       prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                       prose-p:leading-relaxed prose-p:text-base"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Sidebar */}
        <aside className="space-y-8">
          
          {/* About Section */}
          <div className="bg-brand-blue text-white rounded-3xl p-6 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-32 h-32 rounded-full bg-white/10 blur-2xl"></div>
            <h3 className="font-extrabold text-xl mb-4 relative z-10">Need Professional Assistance?</h3>
            <p className="text-brand-light-blue text-sm leading-relaxed mb-6 relative z-10">
              Get certified experts straight to your doorstep. From car repairs to carpentry and electrical safety checks.
            </p>
            <Link 
              href="/book" 
              className="inline-flex items-center justify-center w-full py-3 bg-white text-brand-blue font-bold rounded-xl hover:bg-brand-cyan-light transition-colors text-sm shadow-sm"
            >
              Book a Service
            </Link>
          </div>

          {/* Recent / Related Posts */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-extrabold text-gray-900 text-lg mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-brand-blue" />
              Related Articles
            </h3>
            <div className="space-y-4">
              {relatedPosts.map((rPost, idx) => (
                <Link 
                  key={idx} 
                  href={`/blog/${rPost.slug}`}
                  className="flex gap-4 group"
                >
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-gray-50 border border-gray-100">
                    <Image 
                      src={rPost.image} 
                      alt={rPost.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-bold text-gray-900 text-sm group-hover:text-brand-blue transition-colors line-clamp-2 leading-snug">
                      {rPost.title}
                    </h4>
                    <span className="text-xs text-gray-400 mt-1">{rPost.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}

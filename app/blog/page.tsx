import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getBlogs } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image";
import { Calendar, ArrowRight } from "lucide-react";

export default async function BlogPage() {
  const blogs = await getBlogs().catch(() => []);

  return (
    <div className="py-16 md:py-24 bg-[#FAFBFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0FA3B1]">Eye Care Blog</span>
          <h1 className="text-4xl font-bold mt-2">Latest News &amp; Articles</h1>
          <p className="text-sm text-[#627D98] mt-4 leading-relaxed">
            Educational resources, surgical breakthroughs, and tips for maintaining healthy vision from our experts.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post: any) => (
            <article key={post._id} className="bg-white border border-[#E2ECF5] rounded-3xl overflow-hidden hover:shadow-lg transition-all group flex flex-col justify-between">
              <div>
                <div className="h-52 relative overflow-hidden bg-[#F0F7FF]">
                  {post.mainImage ? (
                    <Image
                      src={urlFor(post.mainImage).url()}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-103 transition-transform duration-500 photo-graded"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-[#627D98]/50">No Image</div>
                  )}
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-[11px] text-[#627D98] font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1F3A] font-head line-clamp-2 group-hover:text-[#0FA3B1] transition-colors">{post.title}</h3>
                  <p className="text-xs text-[#627D98] leading-relaxed line-clamp-3">
                    {post.excerpt || "Read our latest article to learn more about maintaining optimal eye health."}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link href={`/blog/${post.slug}`} className="text-[#0FA3B1] text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Read Full Article <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}

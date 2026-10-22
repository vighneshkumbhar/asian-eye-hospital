import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image";
import { Calendar, ChevronLeft } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug).catch(() => null);

  if (!post) {
    notFound();
  }

  // Simple Portable Text Renderer helper
  const renderBody = (blocks: any[]) => {
    if (!blocks) return null;
    return blocks.map((block: any, idx: number) => {
      if (block._type !== "block" || !block.children) return null;
      const text = block.children.map((child: any) => child.text).join("");
      
      if (block.style === "h2") {
        return <h2 key={idx} className="text-2xl font-bold text-[#0B1F3A] font-head mt-8 mb-4">{text}</h2>;
      }
      if (block.style === "h3") {
        return <h3 key={idx} className="text-xl font-bold text-[#0B1F3A] font-head mt-6 mb-3">{text}</h3>;
      }
      return <p key={idx} className="text-sm text-[#34495E] leading-relaxed mb-4">{text}</p>;
    });
  };

  return (
    <div className="py-12 md:py-20 bg-[#FAFBFD]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0FA3B1] hover:text-[#0d8591] mb-8">
          <ChevronLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <article className="bg-white border border-[#E2ECF5] rounded-3xl p-6 md:p-10 shadow-xs">
          
          <div className="flex items-center gap-2 text-xs text-[#627D98] font-semibold mb-4">
            <Calendar className="w-4 h-4" />
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] font-head leading-tight mb-6">{post.title}</h1>

          {post.mainImage && (
            <div className="h-80 md:h-96 relative rounded-2xl overflow-hidden bg-[#F0F7FF] mb-8">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                fill
                className="object-cover photo-graded"
              />
            </div>
          )}

          {/* Article Body */}
          <div className="prose max-w-none">
            {renderBody(post.body)}
          </div>

        </article>

      </div>
    </div>
  );
}

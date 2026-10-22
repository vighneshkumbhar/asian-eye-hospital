import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  try {
    const authorization = request.headers.get("authorization");
    const secret = process.env.SANITY_REVALIDATE_SECRET;

    // Verify webhook secret
    if (secret && authorization !== `Bearer ${secret}`) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 412 });
    }

    const body = await request.json();
    const type = body._type;
    const slug = body.slug?.current;

    console.log(`Received Sanity webhook for type: ${type}, slug: ${slug}`);

    // Revalidate paths based on content type
    if (type === "homepage") {
      revalidatePath("/");
    } else if (type === "doctor") {
      revalidatePath("/doctors");
      if (slug) revalidatePath(`/doctors/${slug}`);
    } else if (type === "treatment") {
      revalidatePath("/treatments");
      if (slug) revalidatePath(`/${slug}-pune`); // Location-based treatment slugs
    } else if (type === "blog") {
      revalidatePath("/blog");
      if (slug) revalidatePath(`/blog/${slug}`);
    } else if (type === "testimonial" || type === "faq" || type === "tech" || type === "award") {
      revalidatePath("/");
      revalidatePath("/technology");
      revalidatePath("/testimonials");
      revalidatePath("/reviews");
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

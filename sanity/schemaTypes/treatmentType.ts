import { defineField, defineType } from "sanity";

export const treatmentType = defineType({
  name: "treatment",
  title: "Treatments",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Treatment Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Short compelling line for cards (e.g., Topography-Guided)",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "overview",
      title: "Overview",
      type: "text",
      description: "Simple explanation of the treatment.",
    }),
    defineField({
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "procedure",
      title: "Procedure Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "recovery",
      title: "Recovery Details",
      type: "text",
    }),
    defineField({
      name: "faq",
      title: "FAQs for this Treatment",
      type: "array",
      of: [{ type: "reference", to: [{ type: "faq" }] }],
    }),
    defineField({
      name: "doctors",
      title: "Specialist Doctors",
      type: "array",
      of: [{ type: "reference", to: [{ type: "doctor" }] }],
    }),
  ],
});

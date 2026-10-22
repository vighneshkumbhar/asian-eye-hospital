import { defineField, defineType } from "sanity";

export const testimonialType = defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({
      name: "author",
      title: "Author Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role / Designation",
      type: "string",
      description: "e.g., Former President of India, Patient, Actor",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "avatar",
      title: "Avatar Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "isHighlighted",
      title: "Is Highlighted?",
      type: "boolean",
      description: "If true, this testimonial gets premium styling (e.g. gold borders)",
      initialValue: false,
    }),
    defineField({
      name: "badgeText",
      title: "Badge Text",
      type: "string",
      description: "e.g., Presidential Endorsement, Landmark Endorsement",
    }),
  ],
});

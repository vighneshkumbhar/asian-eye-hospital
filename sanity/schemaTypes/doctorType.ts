import { defineField, defineType } from "sanity";

export const doctorType = defineType({
  name: "doctor",
  title: "Doctors",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role / Designation",
      type: "string",
      description: "e.g., Senior Refractive Specialist & Medical Director",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "specialization",
      title: "Specialization",
      type: "string",
      description: "e.g., LASIK & Refractive Surgery",
    }),
    defineField({
      name: "image",
      title: "Doctor Photo",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bio",
      title: "Biography",
      type: "text",
      description: "Short introductory biography.",
    }),
    defineField({
      name: "qualifications",
      title: "Qualifications",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "experienceYears",
      title: "Years of Experience",
      type: "number",
    }),
    defineField({
      name: "highlights",
      title: "Key Highlights / Achievements",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Used to sort doctors on the listing page.",
    }),
  ],
});

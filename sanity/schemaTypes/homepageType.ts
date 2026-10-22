import { defineField, defineType } from "sanity";

export const homepageType = defineType({
  name: "homepage",
  title: "Homepage Content",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroBanners",
      title: "Hero Banner Images (Slideshow)",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "stats",
      title: "Statistics",
      type: "array",
      of: [
        {
          type: "object",
          name: "stat",
          fields: [
            { name: "value", type: "string", title: "Value (e.g. 50K+)" },
            { name: "label", type: "string", title: "Label (e.g. Procedures)" },
          ],
        },
      ],
    }),
  ],
});

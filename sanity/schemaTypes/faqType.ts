import { defineField, defineType } from "sanity";

export const faqType = defineType({
  name: "faq",
  title: "FAQs",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "General", value: "general" },
          { title: "LASIK & Laser", value: "lasik" },
          { title: "Cataract", value: "cataract" },
          { title: "Retina", value: "retina" },
          { title: "Pediatric", value: "pediatric" },
        ],
      },
      initialValue: "general",
    }),
  ],
});

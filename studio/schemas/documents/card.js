import { format } from "date-fns";

export default {
  name: "card",
  title: "Card",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "body",
      title: "Body",
      type: "string"
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "figure"
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }]
    }
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage"
    }
  }
};

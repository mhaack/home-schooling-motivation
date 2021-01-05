import { format } from "date-fns";

export default {
  name: "card",
  title: "Card",
  type: "document",
  fields: [
    {
      name: "text",
      title: "Test",
      type: "string"
    },
    {
      name: "image",
      title: "Image",
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
      media: "image"
    }
  }
};

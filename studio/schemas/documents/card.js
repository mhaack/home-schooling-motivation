export default {
  name: "card",
  title: "Card",
  type: "document",
  fields: [
    {
      name: "text",
      title: "Text",
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
      title: "text",
      media: "image"
    }
  }
};

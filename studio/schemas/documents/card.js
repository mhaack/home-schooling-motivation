export default {
  name: "card",
  title: "Card",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Text",
      type: "string",
      validation: Rule => Rule.required().min(5).max(20)
    },
    {
      title: 'Text', 
      name: 'text',
      type: 'text'
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

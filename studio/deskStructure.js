import S from "@sanity/desk-tool/structure-builder";

const hiddenDocTypes = listItem => !["category", "card"].includes(listItem.getId());

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Cards")
        .schemaType("card")
        .child(S.documentTypeList("card").title("Cards")),
      S.listItem()
        .title("Categories")
        .schemaType("category")
        .child(S.documentTypeList("category").title("Categories")),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);

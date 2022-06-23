export default {
  name: "services",
  title: "Services",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "categories",
      title: "Category",
      type: "reference",
      to: { type: "category" },
    },
    {
      name: "duration",
      title: "Duration",
      type: "string",
    },
    {
      name: "ispopular",
      title: "Popular",
      type: "boolean",
    },
    {
      name: "featured",
      title: "Featured",
      type: "boolean",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Featured image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};

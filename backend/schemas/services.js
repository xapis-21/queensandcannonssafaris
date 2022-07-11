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
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "budgetPrice",
      title: "Bugdet price",
      type: "number",
    },
    {
      name: "midLuxuryPrice",
      title: "Mid luxury price",
      type: "number",
    },
    {
      name: "LuxuryPrice",
      title: "luxury price",
      type: "number",
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
      name: "isfeatured",
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
      name: "imageExtra0",
      title: "Extra image One",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "imageExtra1",
      title: "Extra image two",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "imageExtra2",
      title: "Extra image three",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "imageExtra3",
      title: "Extra image four",
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

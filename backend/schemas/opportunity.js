export default {
  name: "opportunity",
  title: "Opportunities",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "low",
      title: "Bugdet price",
      type: "number",
    },
    {
      name: "mid",
      title: "Mid luxury price",
      type: "number",
    },
    {
      name: "high",
      title: "luxury price",
      type: "number",
    },
    {
      name: "priceName",
      title: "Price names(e.g budget,mid-luxury,luxury,)",
      type: "string",
    },
    {
      name: "duration",
      title: "Duration",
      type: "string",
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

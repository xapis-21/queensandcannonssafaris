export default {
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Featured image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "caption",
      title: "Caption(maximum length 50)",
      type: "string",
      options: {
        maxLength: 50,
      },
    },
    {
      name: "seo",
      title: "Keywords(SEO)",
      type: "string",
    },
  ],

  preview: {
    select: {
      title: "caption",
      media: "image",
    },
  },
};



export default {
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "testimonial",
      title: "Testimonial",
      type: "string",
    },
    {
      name: "image",
      title: "Potrait Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "backdrop",
      title: "backdrop Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};

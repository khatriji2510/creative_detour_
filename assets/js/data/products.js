// Edit this file to manage products.
// Media can be swapped between image, GIF, or video without changing UI logic.
// Supported media types: image, gif, video

export const products = [
  {
    id: "noir-oversized-tee",
    title: "Noir Oversized Tee",
    price: 58,
    badge: "Best Seller",
    categories: ["Oversized Tees", "Best Sellers"],
    media: {
      type: "image",
      src: "./assets/media/products/noir-oversized-tee.jpg",
      alt: "Black oversized tee on a dark background"
    }
  },
  {
    id: "ash-graphic-tee",
    title: "Ash Graphic Tee",
    price: 62,
    badge: "New",
    categories: ["Graphic Tees", "New Drops"],
    media: {
      type: "gif",
      src: "./assets/media/products/ash-graphic-tee.gif",
      alt: "Animated graphic tee visual"
    }
  },
  {
    id: "midnight-hoodie",
    title: "Midnight Heavy Hoodie",
    price: 94,
    badge: "Limited",
    categories: ["Hoodies", "Limited", "Best Sellers"],
    media: {
      type: "image",
      src: "./assets/media/products/midnight-hoodie.webp",
      alt: "Heavy hoodie in charcoal black"
    }
  },
  {
    id: "monolith-tee",
    title: "Monolith Tee",
    price: 54,
    badge: "",
    categories: ["Oversized Tees"],
    media: {
      type: "image",
      src: "./assets/media/products/monolith-tee.jpg",
      alt: "Minimal oversized tee product shot"
    }
  },
  {
    id: "signal-graphic",
    title: "Signal Graphic Tee",
    price: 60,
    badge: "New",
    categories: ["Graphic Tees", "New Drops"],
    media: {
      type: "image",
      src: "./assets/media/products/signal-graphic.jpg",
      alt: "Graphic tee with monochrome print"
    }
  },
  {
    id: "void-hoodie",
    title: "Void Zip Hoodie",
    price: 98,
    badge: "Best Seller",
    categories: ["Hoodies", "Best Sellers"],
    media: {
      type: "video",
      src: "./assets/media/products/void-hoodie.mp4",
      poster: "./assets/media/products/void-hoodie-poster.jpg",
      alt: "Video of the void zip hoodie"
    }
  },
  {
    id: "oxide-oversized",
    title: "Oxide Oversized Tee",
    price: 56,
    badge: "",
    categories: ["Oversized Tees", "New Drops"],
    media: {
      type: "image",
      src: "./assets/media/products/oxide-oversized.webp",
      alt: "Oversized tee in charcoal tone"
    }
  },
  {
    id: "grain-hoodie",
    title: "Grain Pullover Hoodie",
    price: 92,
    badge: "Limited",
    categories: ["Hoodies", "Limited"],
    media: {
      type: "gif",
      src: "./assets/media/products/grain-hoodie.gif",
      alt: "Animated hoodie product media"
    }
  },
  {
    id: "afterimage-tee",
    title: "Afterimage Tee",
    price: 52,
    badge: "",
    categories: ["Graphic Tees"],
    media: {
      type: "image",
      src: "./assets/media/products/afterimage-tee.jpg",
      alt: "Graphic tee on dark editorial set"
    }
  }
];

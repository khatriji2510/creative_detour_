// Edit this file to manage products.
// Media can be swapped between image, GIF, or video without changing UI logic.
// Supported media types: image, gif, video

export const products = [

  {
  id: "Custom-tee",

  title: "Custom Tee Token",

  price: 200,

  shipping: 0,

  codCharge: 0,

  codAdvance: 0,

  categories: ["Oversized Tees"],

  badge: "Premium",

  media: {
    type: "image",
    src: "./assets/media/products/download.gif",
    alt: "Custom Tee"
  },

  description:
    "Buy This Token And DM me on insta for customization.",

  sizes: [
    "DEFAULT"
  ],

  colors: [
    "DEFAULT"
  ],

  sizeChart:
    "./assets/media/size-charts/oversizedtee-chart.png"
},
  
  
  
  
  {
  id: "noir-oversized-tee",

  title: "Donnie Darko Tee",

  price: 999,

  shipping: 60,

  codCharge: 50,

  codAdvance: 199,

  categories: ["Oversized Tees"],

  badge: "Premium",

  media: {
    type: "image",
    src: "./assets/media/products/noir-oversized-tee.png",
    alt: "Donnie Darko Tee"
  },

  description:
    "Premium 260 GSM Terry-knit texture oversized graphic tee inspired by Donnie Darko.",

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "3XL"
  ],

  colors: [
    "White"
  ],

  sizeChart:
    "./assets/media/size-charts/oversizedtee-chart.png"
},
 {
  id: "donnie-gretchen-poster",

  title: "Donnie Gretchen Poster",

  badge: "New",

  categories: ["Posters"],

  shipping: 60,

  codCharge: 50,

  codAdvance: 99,

  media: {
    type: "gif",
    src: "./assets/media/products/a3 mockup.png",
    alt: "Donnie Gretchen Poster"
  },

  description:
    "Premium quality matte finish poster available with or without frame.",

  variants: [

    {
      size: "A4",
      price: 160
    },

    {
      size: "A4 + Frame",
      price: 640
    },

    {
      size: "A3",
      price: 180
    },

    {
      size: "A3 + Frame",
      price: 900
    }

  ],

  colors: [
   "White",
    "Black"
  ]

},
  {
  id: "frank-artwork-poster",

  title: "Frank Artwork Poster",

  badge: "Limited",

  categories: ["Posters"],

  shipping: 60,

  codCharge: 50,

  codAdvance: 99,

  media: {
    type: "image",
    src: "./assets/media/products/hero-03.jpg",
    alt: "Heavy hoodie in charcoal black"
  },

  description:
    "Premium quality matte finish poster available with or without frame.",

  variants: [
    {
      size: "A4",
      price: 160
    },

    {
      size: "A4 + Frame",
      price: 640
    },

    {
      size: "A3",
      price: 180
    },

    {
      size: "A3 + Frame",
      price: 900
    }
  ],

  colors: [
    "White",
    "Black"
  ]
},
  {
  id: "donnie-darko-poster",

  title: "Donnie Darko Poster",

  badge: "Iconic",

  categories: ["Posters"],

  shipping: 60,

  codCharge: 50,

  codAdvance: 99,

  media: {
    type: "image",
    src: "./assets/media/products/6149679396307013603.jpg",
    alt: "Minimal oversized tee product shot"
  },

  description:
    "Premium quality matte finish poster available with or without frame.",

  variants: [
    {
      size: "A4",
      price: 160
    },

    {
      size: "A4 + Frame",
      price: 640
    },

    {
      size: "A3",
      price: 180
    },

    {
      size: "A3 + Frame",
      price: 900
    }
  ],

  colors: [
    "White",
    "Black"
  ]
},

 {
  id: "kaleshi-me-yeah-obviously",

  title: "KALESHI? ME? YEAH OBVIOUSLY",

  price: 599,

  shipping: 60,

  codCharge: 50,

  codAdvance: 199,

  badge: "New",

  categories: ["Baby Tees"],

  media: {
    type: "image",
    src: "./assets/media/products/sa.png",
    alt: "Graphic tee with monochrome print"
  },

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],

  colors: [
    "Black",
    "White",
    "Lavender",
    "Light Baby Pink"
  ],

  sizeChart:
    "./assets/media/size-charts/baby-tee-chart.png"
},
  {
  id: "maybe-diet-coke-is-addicted",

  title: "Maybe Diet Coke Is Addicted",

  price: 699,

  shipping: 60,

  codCharge: 50,

  codAdvance: 199,

  badge: "Trendy",

  categories: ["Oversized Tees", "Best Sellers"],

  media: {
    type: "image",
    src: "./assets/media/products/sfsd.png",
    poster: "./assets/media/products/sfsd.png",
    alt: "Video of the void zip hoodie"
  },

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],

  colors: [
    "Black",
    "White",
    "Grey",
    "Lavender",
    "Baby Pink"
  ],

  sizeChart:
    "./assets/media/size-charts/oversizedtee-chart.png"
},

{
  id: "what-a-time-to-be-alive",

  title: "WHAT A TIME TO BE ALIVE",

  price: 599,

  shipping: 60,

  codCharge: 50,

  codAdvance: 199,

  badge: "New",

  categories: ["Baby Tees"],

  media: {
    type: "image",
    src: "./assets/media/products/whatatime.png",
    alt: "Oversized tee in charcoal tone"
  },

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],

  colors: [
    "Black",
    "White",
    "Lavender",
    "Light Baby Pink"
  ],

  sizeChart:
    "./assets/media/size-charts/baby-tee-chart.png"
},
  {
  id: "ghurna-band-karo-noor",

  title: "Ghurna Band Karo Noor.",

  price: 699,

  shipping: 60,

  codCharge: 50,

  codAdvance: 199,

  badge: "Limited",

  categories: ["Oversized Tees", "Best Sellers"],

  media: {
    type: "image",
    src: "./assets/media/products/GhurnaBan.jpeg",
    alt: "Animated hoodie product media"
  },

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],

  colors: [
    "Black",
    "White",
    "Grey",
    "Lavender",
    "Baby Pink"
  ],

  sizeChart:
    "./assets/media/size-charts/oversizedtee-chart.png"
},

{
  id: "vozinha-tee",

  title: "Vozinha Tee",

  price: 999,

  shipping: 60,

  codCharge: 50,

  codAdvance: 199,

  badge: "",

  categories: ["Graphic Tees"],

  media: {
    type: "image",
    src: "./assets/media/products/vozinha.png",
    alt: "Graphic tee on dark editorial set"
  },

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],

  colors: [
    "Black"
  ],

  sizeChart:
    "./assets/media/size-charts/oversizedtee-chart.png"
},

{
  id: "obsession-regular-tee",

  title: "Obsession regular tee",

  price: 599,

  shipping: 60,

  codCharge: 50,

  codAdvance: 199,

  badge: "",

  categories: ["Regular Tees"],

  media: {
    type: "image",
    src: "./assets/media/products/obsession1.png",
    alt: "Graphic tee on dark editorial set"
  },

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],

  colors: [
    "White",
    "Black",
    "Baby Pink",
    "Peach",
    "Lavender",
    "Beige",
    "Coral",
    "Mint",
    "Baby Blue",
    "Flamingo",
    "Jade",
    "Mushroom",
    "Off White"
  ],

  sizeChart:
    "./assets/media/size-charts/regulartee-chart.png"
},

 {
  id: "obsession-eye-regular-tee",

  title: "Obsession eye regular tee",

  price: 599,

  shipping: 60,

  codCharge: 50,

  codAdvance: 199,

  badge: "",

  categories: ["Regular Tees"],

  media: {
    type: "image",
    src: "./assets/media/products/obsession2.png",
    alt: "Graphic tee on dark editorial set"
  },

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],

  colors: [
    "White",
    "Black",
    "Steel Grey",
    "Baby Pink",
    "Lavender",
    "Navy Blue",
    "Charcoal Melange",
    "Bottle Green",
    "Purple",
    "Yellow",
    "Coffee Brown",
    "Beige",
    "Baby Blue",
    "Flamingo",
    "Copper",
    "Off White"
  ],

  sizeChart:
    "./assets/media/size-charts/regulartee-chart.png"
},

  {
  id: "obsession-baby-tee",

  title: "Obsession Baby Tee",

  price: 599,

  shipping: 60,

  codCharge: 50,

  codAdvance: 199,

  badge: "",

  categories: ["Baby Tees"],

  media: {
    type: "image",
    src: "./assets/media/products/obsession3.png",
    alt: "Graphic tee on dark editorial set"
  },

  description:
    "Premium fitted baby tee featuring original Creative Detour artwork.",

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],

  colors: [
    "White",
    "Lavender",
    "Light Baby Pink"
  ],

  sizeChart:
    "./assets/media/size-charts/baby-tee-chart.png"
},

 {
  id: "eh-earth-tee",

  title: "Eh Earth tee",

  price: 999,

  shipping: 60,

  codCharge: 50,

  codAdvance: 199,

  badge: "",

  categories: ["Oversized Tees", "Graphic Tees"],

  media: {
    type: "image",
    src: "./assets/media/products/eh.png",
    alt: "Graphic tee on dark editorial set"
  },
 
  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],

  colors: [
    "Off White"
  ],

  sizeChart:
    "./assets/media/size-charts/oversizedtee-chart.png"
},

  {
  id: "blueberry-pancakes-regular-tee",

  title: "Blueberry Pancakes Regular Tee",

  price: 599,

  shipping: 60,

  codCharge: 50,

  codAdvance: 199,

  categories: ["Regular Tees"],

  badge: "",

  media: {
    type: "image",
    src: "./assets/media/products/blueberry-pancakes-regular-tee.png",
    alt: "Blueberry Pancakes Regular Tee"
  },

  description:
    "Premium 180 GSM regular fit graphic tee featuring original Creative Detour artwork.",

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],

  colors: [
    "White",
    "Black"
  ],

  sizeChart:
    "./assets/media/size-charts/regulartee-chart.png"
},

{
  id: "dalmations-regular-tee",

  title: "Dalmations Regular Tee",

  price: 599,

  shipping: 60,

  codCharge: 50,

  codAdvance: 199,

  categories: ["Regular Tees"],

  badge: "",

  media: {
    type: "image",
    src: "./assets/media/products/dalmations-regular-tee.png",
    alt: "Dalmations Regular Tee"
  },

  description:
    "Premium 180 GSM regular fit graphic tee featuring original Creative Detour artwork.",

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],

  colors: [
    "Red",
    "Black"
  ],

  sizeChart:
    "./assets/media/size-charts/regulartee-chart.png"
},

  {
  id: "go-with-the-flow-goldfish-regular-tee",

  title: "Go With The Flow Goldfish Regular Tee",

  price: 599,

  shipping: 60,

  codCharge: 50,

  codAdvance: 199,

  categories: ["Regular Tees"],

  badge: "",

  media: {
    type: "image",
    src: "./assets/media/products/go-with-the-flow-goldfish-regular-tee.png",
    alt: "Go With The Flow Goldfish Regular Tee"
  },

  description:
    "Premium 180 GSM regular fit graphic tee featuring original Creative Detour artwork.",

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],

  colors: [
    "White",
    "Black"
  ],

  sizeChart:
    "./assets/media/size-charts/regulartee-chart.png"
},


{
  id: "why-am-i-so-fly-regular-tee",

  title: "Why Am I So Fly Regular Tee",

  price: 599,

  shipping: 60,

  codCharge: 50,

  codAdvance: 199,

  categories: ["Regular Tees"],

  badge: "",

  media: {
    type: "image",
    src: "./assets/media/products/why-am-i-so-fly-regular-tee.png",
    alt: "Why Am I So Fly Regular Tee"
  },

  description:
    "Premium 180 GSM regular fit graphic tee featuring original Creative Detour artwork.",

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],

  colors: [
    "White",
    "Black"
  ],

  sizeChart:
    "./assets/media/size-charts/regulartee-chart.png"
},

{
  id: "rats-spelled-backwards-is-star-regular-tee",

  title: "Rats Spelled Backwards Is Star Regular Tee",

  price: 599,

  shipping: 60,

  codCharge: 50,

  codAdvance: 199,

  categories: ["Regular Tees"],

  badge: "",

  media: {
    type: "image",
    src: "./assets/media/products/rats-spelled-backwards-is-star-regular-tee.png",
    alt: "Rats Spelled Backwards Is Star Regular Tee"
  },

  description:
    "Premium 180 GSM regular fit graphic tee featuring original Creative Detour artwork.",

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],

  colors: [
    "White",
    "Black"
  ],

  sizeChart:
    "./assets/media/size-charts/regulartee-chart.png"
},

{
  id: "love-the-unloved-regular-tee",

  title: "Love The Unloved Regular Tee",

  price: 599,

  shipping: 60,

  codCharge: 50,

  codAdvance: 199,

  categories: ["Regular Tees"],

  badge: "",

  media: {
    type: "image",
    src: "./assets/media/products/love-the-unloved-regular-tee.png",
    alt: "Love The Unloved Regular Tee"
  },

  description:
    "Premium 180 GSM regular fit graphic tee featuring original Creative Detour artwork.",

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],

  colors: [
    "White",
    "Black"
  ],

  sizeChart:
    "./assets/media/size-charts/regulartee-chart.png"
},



  {
  id: "i-love-your-personality-regular-tee",

  title: "I Love Your Personality Regular Tee",

  price: 599,

  shipping: 60,

  codCharge: 50,

  codAdvance: 199,

  categories: ["Regular Tees"],

  badge: "",

  media: {
    type: "image",
    src: "./assets/media/products/i-love-your-personality-regular-tee.png",
    alt: "I Love Your Personality Regular Tee"
  },

  description:
    "Premium 180 GSM regular fit graphic tee featuring original Creative Detour artwork.",

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],

  colors: [
    "White",
    "Black"
  ],

  sizeChart:
    "./assets/media/size-charts/regulartee-chart.png"
},



  {
  id: "oh-deer-regular-tee",

  title: "Oh Deer Regular Tee",

  price: 599,

  shipping: 60,

  codCharge: 50,

  codAdvance: 199,

  categories: ["Regular Tees"],

  badge: "",

  media: {
    type: "image",
    src: "./assets/media/products/oh-deer-regular-tee.png",
    alt: "Oh Deer Regular Tee"
  },

  description:
    "Premium 180 GSM regular fit graphic tee featuring original Creative Detour artwork.",

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],

  colors: [
    "White",
    "Black"
  ],

  sizeChart:
    "./assets/media/size-charts/regulartee-chart.png"
},
  
{
  id: "papayas-regular-tee",

  title: "Papayas Regular Tee",

  price: 599,

  shipping: 60,

  codCharge: 50,

  codAdvance: 199,

  categories: ["Regular Tees"],

  badge: "",

  media: {
    type: "image",
    src: "./assets/media/products/papayas-regular-tee.png",
    alt: "Papayas Regular Tee"
  },

  description:
    "Premium 180 GSM regular fit graphic tee featuring original Creative Detour artwork.",

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],

  colors: [
    "White",
    "Black"
  ],

  sizeChart:
    "./assets/media/size-charts/regulartee-chart.png"
},

  {
  id: "coffee-regular-tee",

  title: "Coffee Regular Tee",

  price: 599,

  shipping: 60,

  codCharge: 50,

  codAdvance: 199,

  categories: ["Regular Tees"],

  badge: "",

  media: {
    type: "image",
    src: "./assets/media/products/coffee-regular-tee.png",
    alt: "Coffee Regular Tee"
  },

  description:
    "Premium 180 GSM regular fit graphic tee featuring original Creative Detour artwork.",

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],

  colors: [
    "White",
    "Black"
  ],

  sizeChart:
    "./assets/media/size-charts/regulartee-chart.png"
},

  {
  id: "onions-regular-tee",

  title: "Onions Regular Tee",

  price: 599,

  shipping: 60,

  codCharge: 50,

  codAdvance: 199,

  categories: ["Regular Tees"],

  badge: "",

  media: {
    type: "image",
    src: "./assets/media/products/onions-regular-tee.png",
    alt: "Onions Regular Tee"
  },

  description:
    "Premium 180 GSM regular fit graphic tee featuring original Creative Detour artwork.",

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],

  colors: [
    "White",
    "Black"
  ],

  sizeChart:
    "./assets/media/size-charts/regulartee-chart.png"
},

  {
  id: "honey-regular-tee",

  title: "Honey Regular Tee",

  price: 599,

  shipping: 60,

  codCharge: 50,

  codAdvance: 199,

  categories: ["Regular Tees"],

  badge: "",

  media: {
    type: "image",
    src: "./assets/media/products/honey-regular-tee.png",
    alt: "Honey Regular Tee"
  },

  description:
    "Premium 180 GSM regular fit graphic tee featuring original Creative Detour artwork.",

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],

  colors: [
    "White",
    "Black"
  ],

  sizeChart:
    "./assets/media/size-charts/regulartee-chart.png"
},

  {
  id: "man-eater-baby-tee",

  title: "Man Eater Baby Tee",

  price: 599,

  shipping: 60,

  codCharge: 50,

  codAdvance: 199,

  categories: ["Baby Tees"],

  badge: "",

  media: {
    type: "image",
    src: "./assets/media/products/man-eater-baby-tee.png",
    alt: "Man Eater Baby Tee"
  },

  description:
    "Premium fitted baby tee featuring original Creative Detour artwork.",

  sizes: [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],

  colors: [
    "White",
    "Black"
  ],

  sizeChart:
    "./assets/media/size-charts/baby-tee-chart.png"
},



  
];

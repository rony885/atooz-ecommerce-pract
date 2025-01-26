import product1 from "./images/p1.jpg";
import product2 from "./images/p2.jpg";
import product3 from "./images/p3.jpg";
import product4 from "./images/p4.jpg";
import product5 from "./images/p5.jpg";
import product6 from "./images/p6.jpg";
import product7 from "./images/p7.jpg";
import product8 from "./images/p8.jpg";
import product9 from "./images/p1.jpg";
import product10 from "./images/p2.jpg";
import product11 from "./images/p3.jpg";
import product12 from "./images/p3.jpg";

const productsArray = [
  {
    id: 1,
    img: product1,
    sliderImg1: product1,
    sliderImg2: product2,
    sliderImg3: product3,
    name: "Black T-Shirt",
    price: "6000Tk.",
    stokes: "15 (Available)",
    isTopSelling: true,
    isNewArrival: false,
    isFeatureProduct: true,
    category: "#1 Best Seller",
    brand: "Lotto",
    regularPrice: {
      amount: 897,
      currency: "BDT",
    },
    specialPrice: {
      amount: 750,
      currency: "BDT",
    },
    rating: {
      stars: 5,
      totalRatings: 152,
      reviews: 7,
    },
    sizes: ["M", "L", "XL", "XLL"],
    colors: ["Red", "Yellow", "Black", "White"],
    description: {
      details:
        "Classic black T-shirt with high-quality fabric. Perfect for casual wear.",
      specification: "Made from 100% cotton. Machine washable.",
      qAndA:
        "Q: Is this shirt available in other colors? A: Yes, it is available in several colors.",
      review: "Highly recommended! Comfortable and durable.",
    },
  },
  {
    id: 2,
    img: product2,
    sliderImg1: product2,
    sliderImg2: product3,
    sliderImg3: product4,
    name: "White T-Shirt",
    price: "6000Tk.",
    stokes: "20 (Available)",
    isTopSelling: false,
    isNewArrival: true,
    isFeatureProduct: false,
    category: "New Arrival",
    brand: "Adidas",
    regularPrice: {
      amount: 897,
      currency: "BDT",
    },
    specialPrice: {
      amount: 850,
      currency: "BDT",
    },
    rating: {
      stars: 4,
      totalRatings: 88,
      reviews: 5,
    },
    sizes: ["S", "M", "L"],
    colors: ["White"],
    description: {
      details: "Fresh white T-shirt with a modern fit. Ideal for everyday use.",
      specification: "Made from a breathable blend of cotton and polyester.",
      qAndA:
        "Q: Is this shirt shrink-resistant? A: Yes, it is designed to resist shrinking.",
      review: "Great fit and feel. Good value for the price.",
    },
  },
  {
    id: 3,
    img: product3,
    sliderImg1: product3,
    sliderImg2: product4,
    sliderImg3: product5,
    name: "Red T-Shirt",
    price: "6000Tk.",
    stokes: "10 (Available)",
    isTopSelling: true,
    isNewArrival: false,
    isFeatureProduct: true,
    category: "#1 Best Seller",
    brand: "Nike",
    regularPrice: {
      amount: 897,
      currency: "BDT",
    },
    specialPrice: {
      amount: 780,
      currency: "BDT",
    },
    rating: {
      stars: 5,
      totalRatings: 200,
      reviews: 15,
    },
    sizes: ["M", "L", "XL"],
    colors: ["Red"],
    description: {
      details: "Bright red T-shirt with a sporty design. Perfect for workouts.",
      specification:
        "Made from moisture-wicking fabric. Ideal for active wear.",
      qAndA:
        "Q: Does this shirt come in different sizes? A: Yes, it is available in various sizes.",
      review: "Excellent for running and gym sessions. Very comfortable.",
    },
  },
  {
    id: 4,
    img: product4,
    sliderImg1: product4,
    sliderImg2: product5,
    sliderImg3: product6,
    name: "Blue T-Shirt",
    price: "6000Tk.",
    stokes: "25 (Available)",
    isTopSelling: false,
    isNewArrival: true,
    isFeatureProduct: false,
    category: "New Arrival",
    brand: "Puma",
    regularPrice: {
      amount: 897,
      currency: "BDT",
    },
    specialPrice: {
      amount: 790,
      currency: "BDT",
    },
    rating: {
      stars: 3,
      totalRatings: 50,
      reviews: 4,
    },
    sizes: ["S", "M"],
    colors: ["Blue"],
    description: {
      details:
        "Stylish blue T-shirt with a relaxed fit. Great for casual outings.",
      specification: "Soft fabric with a relaxed cut. Easy to maintain.",
      qAndA: "Q: Is this shirt durable? A: Yes, it is made for everyday wear.",
      review: "Good quality, but the fit is a bit loose.",
    },
  },
  {
    id: 5,
    img: product5,
    sliderImg1: product5,
    sliderImg2: product6,
    sliderImg3: product7,
    name: "Green T-Shirt",
    price: "6000Tk.",
    stokes: "18 (Available)",
    isTopSelling: false,
    isNewArrival: true,
    isFeatureProduct: true,
    category: "Eco-Friendly",
    brand: "Levis",
    regularPrice: {
      amount: 897,
      currency: "BDT",
    },
    specialPrice: {
      amount: 750,
      currency: "BDT",
    },
    rating: {
      stars: 4,
      totalRatings: 75,
      reviews: 6,
    },
    sizes: ["M", "L", "XL"],
    colors: ["Green"],
    description: {
      details:
        "Eco-friendly green T-shirt made from organic cotton. Comfortable and sustainable.",
      specification: "Made from 100% organic cotton. Eco-friendly dye.",
      qAndA:
        "Q: Is the color fast? A: Yes, the color remains vibrant after washing.",
      review: "Love the eco-friendly aspect. Very soft fabric.",
    },
  },
  {
    id: 6,
    img: product6,
    sliderImg1: product6,
    sliderImg2: product7,
    sliderImg3: product8,
    name: "Yellow T-Shirt",
    price: "6000Tk.",
    stokes: "30 (Available)",
    isTopSelling: false,
    isNewArrival: false,
    isFeatureProduct: true,
    category: "Summer Collection",
    brand: "GAP",
    regularPrice: {
      amount: 897,
      currency: "BDT",
    },
    specialPrice: {
      amount: 800,
      currency: "BDT",
    },
    rating: {
      stars: 4,
      totalRatings: 85,
      reviews: 7,
    },
    sizes: ["S", "M", "L"],
    colors: ["Yellow"],
    description: {
      details: "Bright yellow T-shirt ideal for summer. Light and breezy.",
      specification: "Made from lightweight, breathable fabric.",
      qAndA:
        "Q: Is this shirt suitable for hot weather? A: Yes, it's designed to keep you cool.",
      review: "Great summer shirt. Color is vibrant and material is light.",
    },
  },
  {
    id: 7,
    img: product7,
    sliderImg1: product7,
    sliderImg2: product8,
    sliderImg3: product9,
    name: "Purple T-Shirt",
    price: "7000Tk.",
    stokes: "12 (Available)",
    isTopSelling: true,
    isNewArrival: true,
    isFeatureProduct: true,
    category: "#1 Best Seller",
    brand: "Tommy Hilfiger",
    regularPrice: {
      amount: 1200,
      currency: "BDT",
    },
    specialPrice: {
      amount: 950,
      currency: "BDT",
    },
    rating: {
      stars: 5,
      totalRatings: 90,
      reviews: 8,
    },
    sizes: ["M", "L"],
    colors: ["Purple"],
    description: {
      details:
        "Elegant purple T-shirt with a premium finish. Great for formal occasions.",
      specification: "Made from high-quality fabric with a smooth texture.",
      qAndA:
        "Q: Is this shirt suitable for formal events? A: Yes, it has a refined look.",
      review: "Excellent quality and fit. Perfect for a polished appearance.",
    },
  },
  {
    id: 8,
    img: product8,
    sliderImg1: product9,
    sliderImg2: product10,
    sliderImg3: product11,
    name: "Orange T-Shirt",
    price: "7000Tk.",
    stokes: "14 (Available)",
    isTopSelling: false,
    isNewArrival: false,
    isFeatureProduct: false,
    category: "Casual Wear",
    brand: "H&M",
    regularPrice: {
      amount: 1000,
      currency: "BDT",
    },
    specialPrice: {
      amount: 850,
      currency: "BDT",
    },
    rating: {
      stars: 3,
      totalRatings: 65,
      reviews: 4,
    },
    sizes: ["M"],
    colors: ["Orange"],
    description: {
      details:
        "Casual orange T-shirt with a relaxed fit. Ideal for everyday wear.",
      specification:
        "Made from soft, comfortable fabric. Easy to pair with jeans.",
      qAndA:
        "Q: Does this shirt fade quickly? A: No, it maintains its color well.",
      review: "Nice casual shirt. The color is vibrant and the fabric is soft.",
    },
  },
  {
    id: 9,
    img: product9,
    sliderImg1: product9,
    sliderImg2: product10,
    sliderImg3: product11,
    name: "Pink T-Shirt",
    price: "6500Tk.",
    stokes: "22 (Available)",
    isTopSelling: true,
    isNewArrival: false,
    isFeatureProduct: true,
    category: "#1 Best Seller",
    brand: "Under Armour",
    regularPrice: {
      amount: 950,
      currency: "BDT",
    },
    specialPrice: {
      amount: 700,
      currency: "BDT",
    },
    rating: {
      stars: 5,
      totalRatings: 110,
      reviews: 10,
    },
    sizes: ["L", "XL"],
    colors: ["Pink"],
    description: {
      details:
        "Charming pink T-shirt with a modern design. Suitable for various occasions.",
      specification: "Soft, durable fabric with a modern cut.",
      qAndA:
        "Q: Is this shirt machine washable? A: Yes, it is easy to care for.",
      review: "Great color and fit. Soft and comfortable to wear.",
    },
  },
  {
    id: 10,
    img: product10,
    sliderImg1: product10,
    sliderImg2: product11,
    sliderImg3: product12,
    name: "Gray T-Shirt",
    price: "6500Tk.",
    stokes: "30 (Available)",
    isTopSelling: false,
    isNewArrival: true,
    isFeatureProduct: true,
    category: "New Arrival",
    brand: "Abercrombie",
    regularPrice: {
      amount: 950,
      currency: "BDT",
    },
    specialPrice: {
      amount: 700,
      currency: "BDT",
    },
    rating: {
      stars: 4,
      totalRatings: 60,
      reviews: 6,
    },
    sizes: ["S", "M", "L"],
    colors: ["Gray"],
    description: {
      details:
        "Versatile gray T-shirt with a clean design. Great for layering.",
      specification: "Made from high-quality cotton with a comfortable fit.",
      qAndA:
        "Q: Does this shirt retain its shape after washing? A: Yes, it is designed to hold its shape.",
      review: "Perfect for casual outfits. Comfortable and well-made.",
    },
  },
  {
    id: 11,
    img: product11,
    sliderImg1: product11,
    sliderImg2: product12,
    sliderImg3: product1,
    name: "Brown T-Shirt",
    price: "7000Tk.",
    stokes: "8 (Available)",
    isTopSelling: false,
    isNewArrival: true,
    isFeatureProduct: true,
    category: "New Arrival",
    brand: "Reebok",
    regularPrice: {
      amount: 1050,
      currency: "BDT",
    },
    specialPrice: {
      amount: 800,
      currency: "BDT",
    },
    rating: {
      stars: 4,
      totalRatings: 45,
      reviews: 5,
    },
    sizes: ["M", "L"],
    colors: ["Brown"],
    description: {
      details:
        "Stylish brown T-shirt with a comfortable fit. Ideal for casual wear.",
      specification: "Made from premium cotton with a soft texture.",
      qAndA:
        "Q: Is this shirt good for layering? A: Yes, it pairs well with other clothing.",
      review: "Great quality and color. Fits well and feels comfortable.",
    },
  },
  {
    id: 12,
    img: product12,
    sliderImg1: product12,
    sliderImg2: product2,
    sliderImg3: product3,
    name: "Beige T-Shirt",
    price: "6500Tk.",
    stokes: "25 (Available)",
    isTopSelling: false,
    isNewArrival: false,
    isFeatureProduct: false,
    category: "Casual Wear",
    brand: "Levi's",
    regularPrice: {
      amount: 950,
      currency: "BDT",
    },
    specialPrice: {
      amount: 700,
      currency: "BDT",
    },
    rating: {
      stars: 3,
      totalRatings: 55,
      reviews: 4,
    },
    sizes: ["S", "M"],
    colors: ["Beige"],
    description: {
      details:
        "Neutral beige T-shirt with a minimalist design. Great for everyday use.",
      specification: "Soft cotton fabric with a relaxed fit.",
      qAndA:
        "Q: Does this shirt fit true to size? A: Yes, it fits as expected.",
      review: "Nice basic tee. Comfortable and versatile.",
    },
  },
];

// export const uniqueCategories = [
//   ...new Set(productsArray.map((product) => product.category)),
// ];

// export const uniqueBrands = [
//   ...new Set(productsArray.map((product) => product.brand)),
// ];

// export const uniqueColors = [
//   ...new Set(productsArray.flatMap((product) => product.colors)),
// ];

export default productsArray;

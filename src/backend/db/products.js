import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Fitonia Green Plant",
    image: "",
    actualPrice: 399,
    discountedPrice: 299,
    discount: "25% OFF",
    categoryName: "indoor",
    rating: 3,
    outOfStock: true
  },
  {
    _id: uuid(),
    name: "Jade Plant Mini",
    image: "",
    actualPrice: 349,
    discountedPrice: 249,
    discount: "29% OFF",
    categoryName: "indoor",
    rating: 5,
    outOfStock: false
  },
  {
    _id: uuid(),
    name: "Money Plant",
    image: "",
    actualPrice: 399,
    discountedPrice: 349,
    discount: "13% OFF",
    categoryName: "indoor",
    rating: 2,
    outOfStock: false
  },
  {
    _id: uuid(),
    name: "Peperomia Creeper",
    image: "",
    actualPrice: 995,
    discountedPrice: 995,
    discount: "0",
    categoryName: "climbers",
    rating: 3,
    outOfStock: false
  },
  {
    _id: uuid(),
    name: "Christmas Cactus",
    image: "",
    actualPrice: 399,
    discountedPrice: 349,
    discount: "13% OFF",
    categoryName: "cacti",
    rating: 4,
    outOfStock: false
  },
  {
    _id: uuid(),
    name: "Sansevieria Boncel",
    image: "",
    actualPrice: 499,
    discountedPrice: 399,
    discount: "20% OFF",
    categoryName: "cacti",
    rating: 2,
    outOfStock: true
  },
  {
    _id: uuid(),
    name: "Zebra Haworthia",
    image: "",
    actualPrice: 499,
    discountedPrice: 399,
    discount: "20% OFF",
    categoryName: "cacti",
    rating: 5,
    outOfStock: false
  },
  {
    _id: uuid(),
    name: "Rugmini Plant",
    image: "",
    actualPrice: 749,
    discountedPrice: 599,
    discount: "20% OFF",
    categoryName: "flowering",
    rating: 5,
    outOfStock: false
  },
  {
    _id: uuid(),
    name: "White Orchid",
    image: "",
    actualPrice: 1299,
    discountedPrice: 999,
    discount: "23% OFF",
    categoryName: "flowering",
    rating: 5,
    outOfStock: true
  }
];

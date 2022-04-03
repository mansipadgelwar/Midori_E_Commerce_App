import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "indoor"
  },
  {
    _id: uuid(),
    categoryName: "climbers"
  },
  {
    _id: uuid(),
    categoryName: "cacti"
  },
  {
    _id: uuid(),
    categoryName: "flowering"
  }
];

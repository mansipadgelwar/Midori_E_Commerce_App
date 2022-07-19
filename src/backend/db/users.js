import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Mansi",
    lastName: "Padgelwar",
    email: "mansipadgelwar@gmail.com",
    password: "Mansi123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    address: [
      {
        _id: uuid(),
        name: "Mansi Padgelwar",
        mobile: "9111345567",
        address: "66 /ground Floor C Kapol Niwas Carpenter Street Girgaon",
        pincode: "440001",
        locality: "Nagpur",
        state: "Maharashtra",
        tag: "Default",
      },
    ],
  },
];

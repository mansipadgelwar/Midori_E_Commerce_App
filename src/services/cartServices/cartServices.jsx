import axios from "axios";

const getAllItemOfCartService = (authToken) => {
  return axios.get("/api/user/cart", {
    headers: { authorization: authToken },
  });
};

const addNewItemTocart = (authToken, product) => {
  return axios.post(
    "/api/user/cart",
    { product },
    { headers: { authorization: authToken } }
  );
};

const removeItemFromCart = (authToken, productId) => {
  return axios.delete(`/api/user/cart/${productId}`, {
    headers: { authorization: authToken },
  });
};

export { getAllItemOfCartService, addNewItemTocart, removeItemFromCart };

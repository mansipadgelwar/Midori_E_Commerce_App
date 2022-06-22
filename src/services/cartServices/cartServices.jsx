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

const increaseQuantityService = (authToken, productId) => {
  return axios.post(
    `/api/user/cart/${productId}`,
    { action: { type: "increment" } },
    { headers: { authorization: authToken } }
  );
};

const decreaseQuantityService = (authToken, productId) => {
  return axios.post(
    `/api/user/cart/${productId}`,
    { action: { type: "decrement" } },
    { headers: { authorization: authToken } }
  );
};

export {
  getAllItemOfCartService,
  addNewItemTocart,
  removeItemFromCart,
  increaseQuantityService,
  decreaseQuantityService,
};

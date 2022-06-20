import axios from "axios";

const getAllItemsOfWishlist = (authToken) => {
  return axios.get(`/api/user/wishlist`, {
    headers: { authorization: authToken },
  });
};

const addProductToWishlist = (authToken, product) => {
  return axios.post(
    `/api/user/wishlist`,
    { product },
    { headers: { authorization: authToken } }
  );
};

const removeProductFromWishlist = (authToken, productId) => {
  return axios.delete(`/api/user/wishlist/${productId}`, {
    headers: { authorization: authToken },
  });
};

export {
  getAllItemsOfWishlist,
  addProductToWishlist,
  removeProductFromWishlist,
};

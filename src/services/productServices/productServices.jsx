const { default: axios } = require("axios");

const getAllProducts = (authToken) => {
  return axios.get("/api/products", { headers: { authorization: authToken } });
};

const getSingleProduct = (authToken, productId) => {
  return axios.get(`/api/products/${productId}`, {
    headers: { authorization: authToken },
  });
};

export { getAllProducts, getSingleProduct };

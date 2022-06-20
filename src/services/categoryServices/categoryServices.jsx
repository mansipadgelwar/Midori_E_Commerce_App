import axios from "axios";

const getAllCategoriesService = (authToken) => {
  return axios.get("/api/categories", {
    headers: { authorization: authToken },
  });
};

const getSingleCategoryService = (authToken, categoryId) => {
  return axios.get(`/api/category/${categoryId}`, {
    headers: { authorization: authToken },
  });
};

export { getAllCategoriesService, getSingleCategoryService };

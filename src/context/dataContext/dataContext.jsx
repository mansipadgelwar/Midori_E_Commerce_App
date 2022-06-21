import axios from "axios";
import React, { createContext, useContext, useReducer, useEffect } from "react";
import {
  addProductToWishlist,
  getAllItemsOfWishlist,
  removeProductFromWishlist,
} from "../../services";
import { useAuth } from "../authContext/authContext";
import { useToast } from "../../custom-hooks/useToast";

const DataLayerContext = createContext();

const DataLayerProvider = ({ children }) => {
  const { authToken } = useAuth();
  const { showToast } = useToast();
  const storeDataReducer = (state, action) => {
    switch (action.type) {
      case "GET_WISHLIST_DATA":
        return { ...state, wishlistData: [...action.payload] };
      case "GET_PRODUCT_DATA":
        return { ...state, productData: [...action.payload] };
      default:
        return state;
    }
  };

  const getListOfProducts = async () => {
    try {
      let response = await axios.get("/api/products");
      if (response.status === 201 || response.status === 200) {
        dispatch({
          type: "GET_PRODUCT_DATA",
          payload: response.data.products,
        });
      }
      showToast("Product list success", "success");
    } catch (error) {
      showToast("Product list error", "error");
      console.error("Product list error", error);
    }
  };

  const getWishlistedItems = async () => {
    try {
      let {
        data: { wishlist },
      } = await getAllItemsOfWishlist(authToken);
      dispatch({
        type: "GET_WISHLIST_DATA",
        payload: wishlist,
      });
    } catch (error) {
      console.error("get wishlist item error", error);
    }
  };

  const addToWishlist = async (product) => {
    const currentProductInWishlist = state.wishlistData.find(
      (element) => element._id === product._id
    );
    const isInWishlist = currentProductInWishlist === undefined ? false : true;
    try {
      let {
        data: { wishlist },
      } = isInWishlist
        ? await removeProductFromWishlist(authToken, product._id)
        : await addProductToWishlist(authToken, product);
      dispatch({
        type: "GET_WISHLIST_DATA",
        payload: wishlist,
      });
      console.log("whishlist data", state.wishlistData);
      showToast(
        isInWishlist
          ? "Product removed from wishlist"
          : "Product added to wishlist",
        "success"
      );
    } catch (error) {
      showToast("Wishlist error", "error");
    }
  };

  const [state, dispatch] = useReducer(storeDataReducer, {
    productData: [],
    wishlistData: [],
    cartData: [],
  });

  useEffect(() => {
    getWishlistedItems();
  }, []);

  return (
    <DataLayerContext.Provider
      value={{ getListOfProducts, addToWishlist, state, dispatch }}
    >
      {children}
    </DataLayerContext.Provider>
  );
};

const useDataLayer = () => useContext(DataLayerContext);

export { useDataLayer, DataLayerProvider };

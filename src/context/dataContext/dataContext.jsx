import axios from "axios";
import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import {
  addNewItemTocart,
  addProductToWishlist,
  getAllItemsOfWishlist,
  removeItemFromCart,
  removeProductFromWishlist,
} from "../../services";
import { useAuth } from "../authContext/authContext";
import { useToast } from "../../custom-hooks/useToast";

const DataLayerContext = createContext();

const DataLayerProvider = ({ children }) => {
  const { authToken } = useAuth();
  const { showToast } = useToast();
  const [searchTerm, setSearchTerm] = useState(" ");

  const storeDataReducer = (state, action) => {
    switch (action.type) {
      case "GET_WISHLIST_DATA":
        return { ...state, wishlistData: [...action.payload] };
      case "GET_PRODUCT_DATA":
        return { ...state, productData: [...action.payload] };
      case "GET_CART_DATA":
        return { ...state, cartData: [...action.payload] };
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

  const addToWishlist = async (event, product) => {
    event.preventDefault();
    event.stopPropagation();
    const isInWishlist =
      state.wishlistData.find((element) => element._id === product._id) ===
      undefined
        ? false
        : true;
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

  const handleAddToCart = async (event, product) => {
    event.preventDefault();
    event.stopPropagation();
    const isInCart =
      state.cartData.find((element) => element._id === product._id) ===
      undefined
        ? false
        : true;
    try {
      let {
        data: { cart },
      } = isInCart
        ? await removeItemFromCart(authToken, product._id)
        : await addNewItemTocart(authToken, product);
      dispatch({
        type: "GET_CART_DATA",
        payload: cart,
      });
      showToast(
        isInCart ? "Product removed from cart" : "Product added to cart",
        "success"
      );
    } catch (error) {
      showToast("Cart error", "error");
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
      value={{
        getListOfProducts,
        addToWishlist,
        state,
        dispatch,
        handleAddToCart,
        setSearchTerm,
        searchTerm,
      }}
    >
      {children}
    </DataLayerContext.Provider>
  );
};

const useDataLayer = () => useContext(DataLayerContext);

export { useDataLayer, DataLayerProvider };

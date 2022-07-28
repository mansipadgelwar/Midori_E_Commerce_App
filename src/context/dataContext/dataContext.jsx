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

const initialCategoryState = [
  { id: "Climbers", checked: false, label: "Climbers" },
  { id: "Indoor", checked: false, label: "Indoor" },
  { id: "Cacti", checked: false, label: "Cacti" },
  { id: "Flowering", checked: false, label: "Flowering" },
];

const filterByRatingsDB = [
  { id: 4, label: "4 Stars & above", checked: false },
  { id: 3, label: "3 Stars & above", checked: false },
  { id: 2, label: "2 Stars & above", checked: false },
  { id: 1, label: "1 Stars & above", checked: false },
];

const sortByPriceDB = [
  { id: 1, label: "Low to High", checked: false },
  { id: 2, label: "High to Low", checked: false },
];

const initialDataState = {
  productData: [],
  wishlistData: [],
  cartData: [],
  filteredData: [],
};

const DataLayerProvider = ({ children }) => {
  const { authToken, isAuthorized } = useAuth();
  const { showToast } = useToast();
  const [searchTerm, setSearchTerm] = useState(" ");
  const [category, setCategory] = useState(initialCategoryState);
  const [rangePrice, setRangePrice] = useState(1000);
  const [rating, setRating] = useState(filterByRatingsDB);
  const [sortType, setSortType] = useState(sortByPriceDB);

  const storeDataReducer = (state, action) => {
    switch (action.type) {
      case "GET_WISHLIST_DATA":
        return { ...state, wishlistData: [...action.payload] };
      case "GET_PRODUCT_DATA":
        return {
          ...state,
          productData: [...action.payload],
          filteredData: [...action.payload],
        };
      case "GET_CART_DATA":
        return { ...state, cartData: [...action.payload] };
      case "SET_FILTERED_DATA":
        return { ...state, filteredData: [...action.payload] };
      case "RESET_DATA":
        return initialDataState;
      default:
        return state;
    }
  };

  const handlChangeChecked = (id) => {
    const categoryStateList = category;
    const changeCheckedCategory = categoryStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCategory(changeCheckedCategory);
  };

  const handlRadioChangeChecked = (id) => {
    const ratingStateList = filterByRatingsDB;
    const changeCheckedrating = ratingStateList.map((item) =>
      item.id === id ? { ...item, checked: true } : item
    );

    setRating(changeCheckedrating);
  };

  const handleSortRadioChangeChecked = (id) => {
    const sortingStateList = sortByPriceDB;
    const changeCheckedsorting = sortingStateList.map((item) =>
      item.id === id ? { ...item, checked: true } : item
    );
    setSortType(changeCheckedsorting);
  };

  const getWishlistedItems = async () => {
    if (isAuthorized) {
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
    } catch (error) {
      showToast("Product list error", "error");
    }
  };

  const addToWishlist = async (event, product) => {
    event.preventDefault();
    if (!isAuthorized) {
      showToast("Please login to add product to wishlist", "info");
    } else {
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
    }
  };

  const handleAddToCart = async (event, product) => {
    event.preventDefault();
    if (!isAuthorized) {
      showToast("Please login to add product to wishlist", "info");
    } else {
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
        showToast(!isInCart && "Product added to cart", "success");
      } catch (error) {
        showToast("Cart error", "error");
      }
    }
  };

  const [state, dispatch] = useReducer(storeDataReducer, initialDataState);

  useEffect(() => {
    getWishlistedItems();
  }, []);

  return (
    <DataLayerContext.Provider
      value={{
        addToWishlist,
        state,
        dispatch,
        handleAddToCart,
        setSearchTerm,
        searchTerm,
        category,
        setCategory,
        rangePrice,
        setRangePrice,
        sortType,
        setSortType,
        rating,
        setRating,
        handlChangeChecked,
        initialCategoryState,
        initialDataState,
        getListOfProducts,
        filterByRatingsDB,
        handlRadioChangeChecked,
        handleSortRadioChangeChecked,
        sortByPriceDB,
      }}
    >
      {children}
    </DataLayerContext.Provider>
  );
};

const useDataLayer = () => useContext(DataLayerContext);

export { useDataLayer, DataLayerProvider };

import "./CartCard.css";
import { useDataLayer, useAuth } from "../../context";
import { useToast } from "../../custom-hooks/useToast";
import { addProductToWishlist } from "../../services";

const CartCard = ({ product }) => {
  const { handleAddToCart, state, dispatch } = useDataLayer();
  const { showToast } = useToast();
  const { authToken } = useAuth();

  const handleWishlistFromCart = (event, product) => {
    handleAddToCart(event, product);
    const timer = setTimeout(() => {
      (async (product) => {
        const isInWishlist =
          state.wishlistData?.find(
            (element) => element?._id === product._id
          ) === undefined
            ? false
            : true;
        try {
          let {
            data: { wishlist },
          } = isInWishlist
            ? showToast("Product is already wishlisted.", "success")
            : await addProductToWishlist(authToken, product);
          dispatch({
            type: "GET_WISHLIST_DATA",
            payload: wishlist,
          });
          showToast("Product added to wishlist", "success");
        } catch (error) {
          showToast("Wishlist error", "error");
          console.log("wishlist error", error);
        }
      })(product);
    }, 1500);
    return () => clearTimeout(timer);
  };

  return (
    <article className="sub-section-container">
      <div className="sub-section-image">
        <img
          src={product.image}
          alt={product.name}
          className="img-responsive ss-image"
        />
      </div>
      <div className="mycart-description">
        <h3>{product.name}</h3>
        <h2>₹{product.discountedPrice}</h2>
        <span className="text-line-through">₹{product.actualPrice}</span>
        <h4>{product.discount}</h4>
        <div className="quantity-container">
          <button className="btn btn-primary-outline">-</button>
          <p className="quantity-display">1</p>
          <button className="btn btn-primary-outline">+</button>
        </div>
        <div className="btn-link">
          <span
            className="btn-link material-icons"
            onClick={(event) => handleAddToCart(event, product)}
          >
            delete
          </span>
        </div>
        <button
          className="btn btn-primary-outline"
          onClick={(event) => handleWishlistFromCart(event, product)}
        >
          Move to Wishlist
        </button>
      </div>
    </article>
  );
};

export { CartCard };

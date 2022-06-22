import "./CartCard.css";
import { useDataLayer } from "../../context/dataContext/dataContext";

const CartCard = ({ product }) => {
  const { handleAddToCart, state, addToWishlist } = useDataLayer();

  const isInCart =
    state.cartData.find((element) => element._id === product._id) === undefined
      ? false
      : true;

  const handleWishlistFromCart = (event) => {
    event.preventDefault();
    handleAddToCart(event, product);
    const timer = setTimeout(() => {
      addToWishlist(event, product);
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
        <div class="btn-link">
          <span
            className="btn-link material-icons"
            onClick={(event) => handleAddToCart(event, product)}
          >
            delete
          </span>
        </div>
        <button
          className="btn btn-primary-outline"
          onClick={(event) => handleWishlistFromCart(event)}
        >
          Move to Wishlist
        </button>
      </div>
    </article>
  );
};

export { CartCard };

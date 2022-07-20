import { Footer, CartPrice, CartCard, NavBar } from "../../components";
import { useDataLayer } from "../../context";
import { Link } from "react-router-dom";
import { EmptyBasket } from "../../asset";

const MyCart = () => {
  const { state } = useDataLayer();
  return (
    <>
      <NavBar />
      {state.cartData.length > 0 && (
        <h3 className="h3 center-text wishlist-page-heading">My Cart</h3>
      )}
      <div className="mycart-container">
        {state.cartData.length > 0 ? (
          <>
            <div className="horizontal-card-container">
              {state.cartData.map((product) => {
                return <CartCard product={product} key={product._id} />;
              })}
            </div>
            <CartPrice />
          </>
        ) : (
          <div className="authentication-page">
            <div className="logout-content">
              <h3 className="h3 ">Hey, it feels so light!</h3>
              <h4 className="gray-text content-heading">
                There is nothing in your cart. Let's add some items.
              </h4>
              <div className="ecom-image-container">
                <img
                  src={EmptyBasket}
                  alt="empty-basket"
                  className="img-responsive"
                />
              </div>
              <Link to="/mywishlist" className="btn btn-cta btn-link">
                Add from wishlist
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export { MyCart };

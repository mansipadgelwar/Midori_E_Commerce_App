import { useDataLayer } from "../../context";
import { VerticalCard } from "../../components";
import { EmptyBasket } from "../../asset";

const MyWishlist = () => {
  const { state } = useDataLayer();
  return (
    <div>
      <h3 className="h3 center-text">My Wishlist</h3>
      {state.wishlistData.length > 0 ? (
        <section className="mywishlist-land-page">
          {state.wishlistData.map((element) => {
            return <VerticalCard product={element} key={element._id} />;
          })}
        </section>
      ) : (
        <div className="authentication-page">
          <div className="logout-content">
            <h3 className="h3 ">Hey, it feels so light!</h3>
            <h4 className="gray-text content-heading">
              There is nothing in your wishlist. Let's add some items.
            </h4>
            <div className="ecom-image-container">
              <img
                src={EmptyBasket}
                alt="empty-basket"
                className="img-responsive"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { MyWishlist };

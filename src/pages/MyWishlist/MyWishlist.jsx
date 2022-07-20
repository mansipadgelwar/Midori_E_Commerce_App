import { useDataLayer } from "../../context";
import { Footer, VerticalCard, NavBar } from "../../components";
import { EmptyBasket } from "../../asset";
import { useEffect } from "react";

const MyWishlist = () => {
  const { state } = useDataLayer();

  useEffect(() => {
    document.title = "Midori | MyWishlist";
  }, []);

  return (
    <>
      <NavBar />
      <div>
        {state.wishlistData.length > 0 ? (
          <h3 className="h3 center-text wishlist-page-heading">My Wishlist</h3>
        ) : (
          ""
        )}
        {state.wishlistData.length > 0 ? (
          <section className="wishlist-page">
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
        <Footer />
      </div>
    </>
  );
};

export { MyWishlist };

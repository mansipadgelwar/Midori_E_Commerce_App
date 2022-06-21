import { useDataLayer } from "../../context";
import { VerticalCard } from "../../components";

const MyWishlist = () => {
  const { state } = useDataLayer();
  return (
    <div>
      <h3 className="h3 center-text">My Wishlist</h3>
      <section class="mywishlist-land-page">
        {state.wishlistData.map((element) => {
          return <VerticalCard product={element} />;
        })}
      </section>
    </div>
  );
};

export { MyWishlist };

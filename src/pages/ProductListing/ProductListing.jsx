import { useState } from "react";
import {
  ProductFilter,
  VerticalCard,
  ProductFilterModal,
} from "../../components";
import { useDataLayer } from "../../context";
import "../ProductListing/ProductListing.css";

const ProductListing = () => {
  const { state } = useDataLayer();
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };

  return (
    <div className="documentation-container">
      <div className="product-main-content">
        <ProductFilter />

        <div className="desktop-hide mobile-filter">
          <ProductFilterModal show={show} onClose={() => setShow(false)} />
        </div>
        <main className="main-body">
          <div className="main-body-heading">
            Showing All Products
            <span className="main-body-sub-heading">
              (Showing {state.filteredData.length} products)
            </span>
          </div>
          <section className="mywishlist-land-page">
            {state.filteredData.map((product) => {
              return <VerticalCard product={product} key={product._id} />;
            })}
          </section>
          <div className="desktop-hide mobile-filter">
            <div className="h3 text-bold">Filters</div>
            <div>
              <span className="material-icons text-bold" onClick={handleClick}>
                tune
              </span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export { ProductListing };

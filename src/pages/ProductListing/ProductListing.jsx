import { ProductFilter, VerticalCard } from "../../components";
import { useEffect } from "react";
import { useDataLayer } from "../../context";

const ProductListing = () => {
  const { getListOfProducts, state, searchTerm } = useDataLayer();
  useEffect(() => {
    getListOfProducts();
  }, []);

  return (
    <div class="documentation-container">
      <div class="product-main-content">
        <ProductFilter />
        <main class="main-body">
          <div class="main-body-heading">
            Showing All Products
            <span class="main-body-sub-heading">(Showing 20 products)</span>
          </div>
          <section class="mywishlist-land-page">
            {state.productData
              .filter((item) => {
                if (searchTerm === "") {
                  return item;
                } else if (
                  item.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((product) => {
                return <VerticalCard product={product} />;
              })}
          </section>
        </main>
      </div>
    </div>
  );
};

export { ProductListing };

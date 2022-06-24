import { ProductFilter, VerticalCard } from "../../components";
import { useEffect } from "react";
import { useDataLayer } from "../../context";

const ProductListing = () => {
  const { getListOfProducts, state, searchTerm } = useDataLayer();
  useEffect(() => {
    getListOfProducts();
  }, []);

  return (
    <div className="documentation-container">
      <div className="product-main-content">
        <ProductFilter />
        <main className="main-body">
          <div className="main-body-heading">
            Showing All Products
            <span className="main-body-sub-heading">(Showing 20 products)</span>
          </div>
          <section className="mywishlist-land-page">
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
                return <VerticalCard product={product} key={product._id} />;
              })}
          </section>
        </main>
      </div>
    </div>
  );
};

export { ProductListing };

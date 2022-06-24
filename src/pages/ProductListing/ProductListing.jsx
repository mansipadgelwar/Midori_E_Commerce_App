import { ProductFilter, VerticalCard } from "../../components";
import { useDataLayer } from "../../context";

const ProductListing = () => {
  const { state, searchTerm } = useDataLayer();

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
            {state.filteredData
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

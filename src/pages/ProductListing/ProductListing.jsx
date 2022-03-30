import { ProductFilter, VerticalCard } from "../../components";

const ProductListing = () => {
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
            <VerticalCard />
          </section>
        </main>
      </div>
    </div>
  );
};

export { ProductListing };

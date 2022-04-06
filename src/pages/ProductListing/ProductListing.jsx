import axios from "axios";
import { useEffect, useState } from "react";
import { ProductFilter, VerticalCard } from "../../components";

const ProductListing = () => {
  const [product, setProduct] = useState([]);

  const getListOfProducts = async () => {
    const response = await axios.get("/api/products");
    const data = response.data.products;
    setProduct(data);
    return data;
  };

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
            {product.map(
              ({
                _id,
                name,
                image,
                actualPrice,
                discountedPrice,
                discount,
                categoryName,
                rating,
                outOfStock
              }) => {
                return (
                  <VerticalCard
                    key={_id}
                    id={_id}
                    name={name}
                    image={image}
                    actualPrice={actualPrice}
                    discountedPrice={discountedPrice}
                    discount={discount}
                    categoryName={categoryName}
                    rating={rating}
                    outOfStock={outOfStock}
                  />
                );
              }
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export { ProductListing };

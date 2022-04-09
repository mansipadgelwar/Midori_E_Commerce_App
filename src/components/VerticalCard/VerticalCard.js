const VerticalCard = ({
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
    <article className="vertical-card">
      <span className="material-icons-outlined icon">favorite</span>
      <div className="img-container">
        <img src={image} alt={name} className="img-responsive" />
      </div>
      <div className="product-description">
        <h3 className="product-main-heading">{name}</h3>
        <p className="product-sub-heading">
          {actualPrice}
          <span className="product-discount">({discount})</span>
        </p>
      </div>
      <div className="button-container">
        <button className="btn btn-cta">Add To Bag</button>
      </div>
    </article>
  );
};

export { VerticalCard };

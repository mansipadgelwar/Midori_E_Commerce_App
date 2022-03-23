import "./App.css";

const VerticalCard = () => {
    return(
    <article className="vertical-card"> 
        <span className="material-icons-outlined icon">
           favorite
        </span>       
        <div className="img-container"> 
            <img src="/images/Plant1.jpg" alt="plant" className="img-responsive"/>
        </div>
        <div className="product-description">
           <h3 className="product-main-heading"> Monstera Deliciosa Plant </h3>
           <p className="product-sub-heading">
            Rs. 1945 <span className="product-discount">(5% OFF)</span>
           </p>
        </div>
        <div className="button-container">                   
            <button className="btn btn-cta">Add To Bag</button>
        </div>
        </article>
   );
};

export {VerticalCard};

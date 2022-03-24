import "./CartCard.css";

const CartCard = () => {
    return(
    <article className="sub-section-container">        
        <div className="sub-section-image">
            <img src="/images/Plant1.jpg" alt="product-image" className="img-responsive ss-image"/>
        </div>
        <div className="mycart-description">
            <h3>Fittonia Green Plant</h3>
            <h2>₹299</h2><span className="text-line-through">₹399</span>
            <h4>25% off</h4>
            <div className="quantity-container">
                <button className="btn btn-primary-outline">-</button>
                <p className="quantity-display">1</p>
                <button className="btn btn-primary-outline">+</button>  
            </div>
            <a className="btn-link" href="/">
                <span className="material-icons">delete</span>
            </a>
            <button className="btn btn-primary-outline">Move to Wishlist</button>            
         </div>        
    </article> 
    );
};

export {CartCard};
import "App.css";
import "./CartCard";

const CartCard = () => {
    return(
    <article class="sub-section-container">        
        <div class="sub-section-image">
            <img src="/images/Plant1.jpg" alt="" class="img-responsive ss-image"/>
        </div>
        <div class="mycart-description">
            <h3>Fittonia Green Plant</h3>
            <h2>₹299</h2><span class="text-line-through">₹399</span>
            <h4>25% off</h4>
            <div class="quantity-container">
                <button class="btn btn-primary-outline">-</button>
                <p class="quantity-display">1</p>
                <button class="btn btn-primary-outline">+</button>  
            </div>
            <a class="btn-link" href="/">
                <span class="material-icons">delete</span>
            </a>
            <button class="btn btn-primary-outline">Move to Wishlist</button>            
         </div>        
    </article> 
    );
};

export {CartCard};
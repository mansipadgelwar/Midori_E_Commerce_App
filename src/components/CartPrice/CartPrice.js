import "./CartPrice.css";

const CartPrice = () => {
    return(
    <article class="mycart vertical-card text-only-card">     
        <div class="product-description">
           <h3 class="product-main-heading"> PRICE DETAILS</h3>
           <hr/>  
           <div class="card-mycart">         
            <div class="card-mycart-detail">
                <span>Price(2 items)</span>
                <span>Rs. 4999</span>
            </div>
            <div class="card-mycart-detail">
                <span>Discount</span>
                <span> - Rs. 4999</span>
            </div>
            <div class="card-mycart-detail">
                <span>Delivery Charges</span>
                <span>Rs. 499</span>
            </div>
            <hr/>
            <div class="card-mycart-detail">
                <span>TOTAL AMOUNT</span>
                <span>Rs. 3499</span>
            </div>
             <hr/> 
             <p>You will save Rs. 1999 on this order</p>
           </div>
        </div>
        <div class="button-container">                   
            <button class="btn btn-cta">PLACE ORDER</button>
        </div>
    </article>
    );
};
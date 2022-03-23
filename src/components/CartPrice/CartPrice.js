import "./CartPrice.css";

const CartPrice = () => {
    return(
    <article className="mycart vertical-card text-only-card">     
        <div className="product-description">
           <h3 className="product-main-heading"> PRICE DETAILS</h3>
           <hr/>  
           <div className="card-mycart">         
            <div className="card-mycart-detail">
                <span>Price(2 items)</span>
                <span>Rs. 4999</span>
            </div>
            <div className="card-mycart-detail">
                <span>Discount</span>
                <span> - Rs. 4999</span>
            </div>
            <div className="card-mycart-detail">
                <span>Delivery Charges</span>
                <span>Rs. 499</span>
            </div>
            <hr/>
            <div className="card-mycart-detail">
                <span>TOTAL AMOUNT</span>
                <span>Rs. 3499</span>
            </div>
             <hr/> 
             <p>You will save Rs. 1999 on this order</p>
           </div>
        </div>
        <div className="button-container">                   
            <button className="btn btn-cta">PLACE ORDER</button>
        </div>
    </article>
    );
};

export {CartPrice};
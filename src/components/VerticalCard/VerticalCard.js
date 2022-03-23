import "./App.css";

const VerticalCard = () => {
    return(
    <article class="vertical-card"> 
        <span class="material-icons-outlined icon">
           favorite
        </span>       
        <div class="img-container"> 
            <img src="/images/Plant1.jpg" alt="plant" class="img-responsive"/>
        </div>
        <div class="product-description">
           <h3 class="product-main-heading"> Monstera Deliciosa Plant </h3>
           <p class="product-sub-heading">
            Rs. 1945 <span class="product-discount">(5% OFF)</span>
           </p>
        </div>
        <div class="button-container">                   
            <button class="btn btn-cta">Add To Bag</button>
        </div>
        </article>
   );
};

export {VerticalCard};


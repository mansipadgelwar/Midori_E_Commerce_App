import "./Header.css";

const Header = () => {
    return(
    <header className="header">
      <div className="header-items">
        <div className="nav-brand">
          <a className="btn-link" href="/index.html">Midori</a>
        </div>
          <div className="input-icon icons-left">
            <span className="material-icons">search</span> 
            <input className="input" type="text" id="search-bar" name="search-bar" placeholder="search"/> 
          </div>
          <div className="sub-menu"> 
            <button className="btn btn-cta">Login</button>
            <div className="header-icon">
              <a className="btn-link" href="/mycart/mycart.html"><span className="material-icons">shopping_cart</span></a>                   
            </div>
            <div className="header-icon"> 
              <a className="btn-link" href="/mywishlist/wishlist.html"><span className="material-icons">favorite_border</span></a>                
            </div>                         
         </div> 
       </div>
    </header>  
 );
};

export {Header};
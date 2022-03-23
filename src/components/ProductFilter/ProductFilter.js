import "./ProductFilter.css";
import "App.css";

const ProductFilter = () => {
    return(
    <aside className="side_bar">
        <div className="sidebar_menu">
         <div className="filter-heading">
             <p>Filters</p>
             <button className="btn btn-text">Clear</button>
         </div>
         <div>
            <h3>Range</h3>
            <div className="slider-container">
                <div className="range-container">
                  <span className="range min-range">50</span>
                  <span className="range mid-range">150</span>
                  <span className="range max-range">250</span>
                </div>
                <input type="range" min="50" max="250" value="150" className="slider"/>
            </div>
         </div>
         <div>
             <h3>Category</h3>
             <div className="checkbox-container">
                <input className="checkbox" type="checkbox" name="climbers" id="climbers"/>
                <label for="climbers" className="checkbox-detail">Climbers</label>
            </div>
            <div className="checkbox-container">
                <input className="checkbox" type="checkbox" name="flowering" id="flowering"/>
                <label for="flowering" className="checkbox-detail">Flowering Plants</label>
            </div>
            <div className="checkbox-container">
                <input className="checkbox" type="checkbox" name="cacti" id="cacti"/>
                <label for="cacti" className="checkbox-detail">Cacti & Succulents</label>
            </div>
        </div>
        <div>
            <h3>Rating</h3>
            <div className="checkbox-container">
               <input className="checkbox" type="radio" name="four-star" id="four-star"/>
               <label for="four-star" className="checkbox-detail">4 Stars & above</label>
           </div>
           <div className="checkbox-container">
            <input className="checkbox" type="radio" name="three-star" id="three-star"/>
            <label for="three-star" className="checkbox-detail">3 Stars & above</label>
        </div>
        <div className="checkbox-container">
            <input className="checkbox" type="radio" name="two-star" id="two-star"/>
            <label for="two-star" className="checkbox-detail">2 Stars & above</label>
        </div>
        <div className="checkbox-container">
            <input className="checkbox" type="radio" name="one-star" id="one-star"/>
            <label for="one-star" className="checkbox-detail">1 Star & above</label>
        </div>
       </div>
        <div>
            <h3>Sort by</h3>
            <div className="checkbox-container">
               <input className="checkbox" type="radio" name="price" id="low-to-high"/>
               <label for="low-to-high" className="checkbox-detail">Price - Low to High</label>
           </div>
           <div className="checkbox-container">
               <input className="checkbox" type="radio" name="price" id="high-to-low"/>
               <label for="high-to-low" className="checkbox-detail">Price - High to Low</label>
           </div>
        </div>
       </div>
    </aside> 
    );
};

export {ProductFilter};
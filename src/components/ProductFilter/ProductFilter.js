import "./ProductFilter.css";
import "App.css";

const ProductFilter = () => {
    return(
    <aside class="side_bar">
        <div class="sidebar_menu">
         <div class="filter-heading">
             <p>Filters</p>
             <button class="btn btn-text">Clear</button>
         </div>
         <div>
            <h3>Range</h3>
            <div class="slider-container">
                <div class="range-container">
                  <span class="range min-range">50</span>
                  <span class="range mid-range">150</span>
                  <span class="range max-range">250</span>
                </div>
                <input type="range" min="50" max="250" value="150" class="slider"/>
            </div>
         </div>
         <div>
             <h3>Category</h3>
             <div class="checkbox-container">
                <input class="checkbox" type="checkbox" name="climbers" id="climbers"/>
                <label for="climbers" class="checkbox-detail">Climbers</label>
            </div>
            <div class="checkbox-container">
                <input class="checkbox" type="checkbox" name="flowering" id="flowering"/>
                <label for="flowering" class="checkbox-detail">Flowering Plants</label>
            </div>
            <div class="checkbox-container">
                <input class="checkbox" type="checkbox" name="cacti" id="cacti"/>
                <label for="cacti" class="checkbox-detail">Cacti & Succulents</label>
            </div>
        </div>
        <div>
            <h3>Rating</h3>
            <div class="checkbox-container">
               <input class="checkbox" type="radio" name="four-star" id="four-star"/>
               <label for="four-star" class="checkbox-detail">4 Stars & above</label>
           </div>
           <div class="checkbox-container">
            <input class="checkbox" type="radio" name="three-star" id="three-star"/>
            <label for="three-star" class="checkbox-detail">3 Stars & above</label>
        </div>
        <div class="checkbox-container">
            <input class="checkbox" type="radio" name="two-star" id="two-star"/>
            <label for="two-star" class="checkbox-detail">2 Stars & above</label>
        </div>
        <div class="checkbox-container">
            <input class="checkbox" type="radio" name="one-star" id="one-star"/>
            <label for="one-star" class="checkbox-detail">1 Star & above</label>
        </div>
       </div>
        <div>
            <h3>Sort by</h3>
            <div class="checkbox-container">
               <input class="checkbox" type="radio" name="price" id="low-to-high"/>
               <label for="low-to-high" class="checkbox-detail">Price - Low to High</label>
           </div>
           <div class="checkbox-container">
               <input class="checkbox" type="radio" name="price" id="high-to-low"/>
               <label for="high-to-low" class="checkbox-detail">Price - High to Low</label>
           </div>
        </div>
       </div>
    </aside> 
    );
};

export {ProductFilter};
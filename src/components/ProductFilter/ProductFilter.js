import { useEffect } from "react";
import "./ProductFilter.css";
import { useDataLayer } from "../../context";

const sortByPriceDB = [
  { id: 1, label: "Low to High" },
  { id: 2, label: "High to Low" },
];

const filterByRatingsDB = [
  { id: 4, label: "4 Stars & above" },
  { id: 3, label: "3 Stars & above" },
  { id: 2, label: "2 Stars & above" },
  { id: 1, label: "1 Stars & above" },
];
const ProductFilter = () => {
  const {
    state,
    dispatch,
    rangePrice,
    setRangePrice,
    category,
    sortType,
    setSortType,
    rating,
    setRating,
    searchTerm,
    handlChangeChecked,
  } = useDataLayer();

  const handleClearFilter = () => {
    state.filteredData = state.productData;
  };

  useEffect(() => {
    const applyFilters = () => {
      let filteredData = state.productData;

      //filter by category
      const categoriesChecked = category
        .filter((item) => item.checked)
        .map((item) => item.label.toLowerCase());

      if (categoriesChecked.length) {
        filteredData = filteredData?.filter((item) =>
          categoriesChecked.includes(item.categoryName)
        );
      }

      //filter by price range
      if (rangePrice) {
        filteredData = filteredData?.filter(
          (item) => item.discountedPrice < rangePrice
        );
      }

      //filter by rating
      if (rating) {
        filteredData = filteredData?.filter((item) => item.rating >= rating);
      }

      //filter by search
      if (searchTerm) {
        filteredData = filteredData.filter(
          (item) =>
            item.name.toLowerCase().search(searchTerm.toLowerCase().trim()) !==
            -1
        );
      }
      //sort by price
      filteredData =
        sortType === 2
          ? filteredData.sort((a, b) => b.discountedPrice - a.discountedPrice)
          : filteredData.sort((a, b) => a.discountedPrice - b.discountedPrice);

      dispatch({ type: "SET_FILTERED_DATA", payload: filteredData });
    };
    applyFilters();
  }, [rating, rangePrice, category, sortType, searchTerm]);

  return (
    <aside className="side_bar">
      <div className="sidebar_menu">
        <div className="filter-heading">
          <p>Filters</p>
          <button className="btn btn-text" onClick={() => handleClearFilter()}>
            Clear
          </button>
        </div>
        <div>
          <h3>Range</h3>
          <div className="slider-container">
            <div className="range-container">
              <span className="range min-range">0</span>
              <span className="range mid-range">500</span>
              <span className="range max-range">1000</span>
            </div>
            <input
              type="range"
              min="0"
              max="1000"
              className="slider"
              value={rangePrice}
              onChange={(e) => setRangePrice(e.target.value)}
            />
          </div>
        </div>
        <div>
          <h3>Category</h3>
          {category.map((item) => {
            return (
              <div className="checkbox-container" key={item.id}>
                <input
                  className="checkbox"
                  type="checkbox"
                  name={item.label}
                  id={item.id}
                  checked={item.checked}
                  onChange={() => handlChangeChecked(item.id)}
                />
                <label htmlFor={item.label} className="checkbox-detail">
                  {item.label}
                </label>
              </div>
            );
          })}
        </div>
        <div>
          <h3>Rating</h3>
          {filterByRatingsDB.map((item) => {
            return (
              <div className="checkbox-container" key={item.id}>
                <input
                  className="checkbox"
                  type="radio"
                  name="star"
                  id={item.id}
                  onChange={() => setRating(item.id)}
                  value={rating}
                />
                <label htmlFor={item.id} className="checkbox-detail">
                  {item.label}
                </label>
              </div>
            );
          })}
        </div>
        <div>
          <h3>Sort by</h3>
          {sortByPriceDB.map((item) => {
            return (
              <div className="checkbox-container" key={item.id}>
                <input
                  className="checkbox"
                  type="radio"
                  name="price"
                  id={item.id}
                  onChange={() => setSortType(item.id)}
                  value={sortType}
                />
                <label htmlFor="low-to-high" className="checkbox-detail">
                  Price - {item.label}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export { ProductFilter };

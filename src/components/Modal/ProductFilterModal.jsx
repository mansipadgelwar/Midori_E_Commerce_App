import { useEffect } from "react";
import "../ProductFilter/ProductFilter.css";
import { useDataLayer } from "../../context";

const ProductFilterModal = ({ show, onClose }) => {
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
    setCategory,
    initialCategoryState,
    handlRadioChangeChecked,
    filterByRatingsDB,
    sortByPriceDB,
  } = useDataLayer();

  const handleClearFilter = () => {
    setRating(filterByRatingsDB);
    setSortType(sortByPriceDB);
    setRangePrice(1000);
    setCategory(initialCategoryState);
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

      const checkedRating = rating.find((item) => item.checked);

      //filter by rating
      if (checkedRating) {
        filteredData = filteredData?.filter(
          (item) => item.rating >= Number(checkedRating.id)
        );
      }

      //filter by search
      if (searchTerm) {
        filteredData = filteredData.filter(
          (item) =>
            item.name.toLowerCase().search(searchTerm.toLowerCase().trim()) !==
            -1
        );
      }

      const checkedSortingType = sortType.find((item) => item.checked);

      //sort by price
      if (checkedSortingType) {
        filteredData =
          checkedSortingType.id === 2
            ? filteredData.sort((a, b) => b.discountedPrice - a.discountedPrice)
            : filteredData.sort(
                (a, b) => a.discountedPrice - b.discountedPrice
              );
      }

      dispatch({ type: "SET_FILTERED_DATA", payload: filteredData });
    };
    applyFilters();
  }, [rating, rangePrice, category, sortType, searchTerm]);

  if (!show) {
    return null;
  }

  return (
    <div className="modal-wrapper">
      <aside className="side_bar modal">
        <div className="sidebar_menu">
          <button className="modal-close-icon" onClick={onClose}>
            <span className="material-icons">close</span>
          </button>
          <div className="filter-heading">
            <p>Filters</p>
            <button
              className="btn btn-text"
              onClick={() => handleClearFilter()}
            >
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
            {rating.map((item) => {
              return (
                <div className="checkbox-container" key={item.id}>
                  <input
                    className="checkbox"
                    type="radio"
                    name="star"
                    id={item.id}
                    onChange={() => handlRadioChangeChecked(item.id)}
                    value={item.id}
                    checked={item.checked}
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
            {sortType.map((item) => {
              return (
                <div className="checkbox-container" key={item.id}>
                  <input
                    className="checkbox"
                    type="radio"
                    name="price"
                    id={item.id}
                    onChange={() => handleSortRadioChangeChecked(item.id)}
                    value={item.id}
                    checked={item.checked}
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
    </div>
  );
};

export { ProductFilterModal };

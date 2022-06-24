import { useState, useEffect } from "react";
import "./ProductFilter.css";
import { useDataLayer } from "../../context";

const ProductFilter = () => {
  const {
    state,
    dispatch,
    rangePrice,
    setRangePrice,
    category,
    setCategory,
    sortType,
    setSortType,
  } = useDataLayer();

  const handlChangeChecked = (id) => {
    const categoryStateList = category;
    const changeCheckedCategory = categoryStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCategory(changeCheckedCategory);
  };

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
    filteredData = filteredData?.filter(
      (item) => item.discountedPrice < rangePrice
    );

    //sort by price
    filteredData =
      sortType === 1
        ? filteredData.sort((a, b) => b.discountedPrice - a.discountedPrice)
        : filteredData.sort((a, b) => a.discountedPrice - b.discountedPrice);

    dispatch({ type: "SET_FILTERED_DATA", payload: filteredData });
  };

  useEffect(() => {
    applyFilters();
  }, [category, rangePrice]);

  return (
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
          <div className="checkbox-container">
            <input
              className="checkbox"
              type="radio"
              name="star"
              id="four-star"
            />
            <label htmlFor="four-star" className="checkbox-detail">
              4 Stars & above
            </label>
          </div>
          <div className="checkbox-container">
            <input
              className="checkbox"
              type="radio"
              name="star"
              id="three-star"
            />
            <label htmlFor="three-star" className="checkbox-detail">
              3 Stars & above
            </label>
          </div>
          <div className="checkbox-container">
            <input
              className="checkbox"
              type="radio"
              name="star"
              id="two-star"
            />
            <label htmlFor="two-star" className="checkbox-detail">
              2 Stars & above
            </label>
          </div>
          <div className="checkbox-container">
            <input
              className="checkbox"
              type="radio"
              name="star"
              id="one-star"
            />
            <label htmlFor="one-star" className="checkbox-detail">
              1 Star & above
            </label>
          </div>
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
                  onChange={() => setSortType(sortType)}
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

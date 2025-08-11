import React, { useState } from "react";
import "./productCard.css";
import searchIcon from "../../../Assets/icons/search.png";
import searchBar from "../../../Assets/icons/search_expand.png";
import left_btn from "../../../Assets/icons/left_btn.png";
import right_btn from "../../../Assets/icons/right_btn.png";

function ProductCard({ productData }) {
  const [count, setCount] = useState(() => productData.map(() => 0));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const itemsPerPage = 6;

  const filteredProducts = productData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleProducts = filteredProducts.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  const increaseByOne = (idx) => {
    setCount((prevCounts) =>
      prevCounts.map((count, index) => (index === idx ? count + 1 : count))
    );
  };

  const decreaseByOne = (idx) => {
    setCount((prevCounts) =>
      prevCounts.map((count, index) =>
        index === idx && count > 0 ? count - 1 : count
      )
    );
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const handleNext = () => {
    if (currentIndex + itemsPerPage <= productData.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };
  return (
    <>
      <div id="productCardContainer">
        {visibleProducts.map((product, idx) => {
          const actualIndex = productData.indexOf(product);
          return (
            <div key={actualIndex} className="product-card">
              <img src={product.imgUrl} alt="" />
              <div className="context">
                <h4>{product.name}</h4>
                <div className="actionDiv">
                  <button className="commonBtn">Place Order</button>
                  <div id="count">
                    <button onClick={() => decreaseByOne(idx)}>–</button>
                    <span>{count[idx]}</span>
                    <button onClick={() => increaseByOne(idx)}>+</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div id="actionBtn">
        <div id="searchBtn">
          <button
            onClick={() => {
              setShowSearch(!showSearch);
              if (showSearch) {
                setSearchTerm("");
                setCurrentIndex(0);
              }
            }}
          >
            <img src={searchIcon} alt="" />
          </button>
          {showSearch && (
            <div id="searchBar">
              <img src={searchBar} alt="" />
              <input
                type="text"
                placeholder="Search Accessories"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentIndex(0);
                }}
              />
            </div>
          )}
        </div>
        <div id="prodNavBtns">
          <button className="nav_btn" onClick={handlePrev}>
            <img src={left_btn} alt=" " />
          </button>
          <button className="nav_btn" onClick={handleNext}>
            <img src={right_btn} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;

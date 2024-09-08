import React, { useState } from "react";
import { useSelector } from "react-redux";

export const PriceFilter = ({
  minPrice,
  setMinPrice,
  highPrice,
  setHighPrice,
  handleSubmit,
}) => {
  const { isDarkMode } = useSelector((state) => state.user);

  const handleReset = () => {
    setMinPrice(0);
    setHighPrice(Infinity);
  };

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="flex justify-center items-center h-auto py-10 div">
        <div className="shadow-lg rounded-lg w-[300px] p-4 h-auto">
          <strong className="block text-lg mb-4">Set price range</strong>
          <div className="flex justify-between items-center mb-4">
            <div className="text-center">
              <p className="text-gray-600 dark:text-white text-sm">Min price</p>
              <input
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                type="number"
                className="text-lg font-semibold py-2 px-4 border border-gray-300 rounded-md text-center w-[80px] bg"
              />
            </div>
            <span className="text-lg font-semibold dark:text-white">-</span>
            <div className="text-center">
              <p className="text-gray-600 dark:text-white text-sm">Max price</p>
              <input
                value={highPrice}
                onChange={(e) => setHighPrice(Number(e.target.value))}
                type="number"
                className="text-lg font-semibold py-2 px-4 border border-gray-300 rounded-md text-center w-[80px] bg"
              />
            </div>
          </div>
          <p className="text-gray-500 dark:text-gray-300 text-xs text-center mb-4">
            Prices exclude taxes and fees.
          </p>
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={handleReset}
              className="bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-white py-2 px-6 rounded-md"
            >
              Reset
            </button>
            <button
              onClick={handleSubmit}
              className="bg-blue-600 dark:bg-blue-800 text-white py-2 px-6 rounded-md"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

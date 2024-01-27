"use client";

import React, { useState } from "react";

import './product.css';



interface FilterProps {
  categories: string[];
  loading: boolean;
  setFilteredData?: any;
  setSelectedCategories?: any;
  setSelectedOption?: any;
}

const FilterComponent: React.FC<FilterProps> = ({
  categories,
  loading,
  setFilteredData,
  setSelectedCategories,
  setSelectedOption,
}) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleCheckboxChange = (category: string) => {
    setSelectedFilters((prevFilters) => {
      if (prevFilters.includes(category)) {
        return prevFilters.filter((filter) => filter !== category);
      } else {
        return [...prevFilters, category];
      }
    });
  };

  const handleApplyFilters = async () => {
    const baseApiUrl = "https://dummyjson.com/products/category";
    setSelectedOption('')
    try {
     
      const responses = await Promise.all(
        selectedFilters.map(async (category) => {
          const apiUrl = `${baseApiUrl}/${category}`;
          const response = await fetch(apiUrl);

          if (!response.ok) {
            throw new Error(`Error fetching data for category ${category}`);
          }

          return response.json();
        })
      );
      const extractedData = responses.map((item) => item.products).flat();
      setFilteredData(extractedData);
      setSelectedCategories([...selectedFilters]);
    } catch (error: any) {
      console.error("Error during API calls:", error.message);
    }
  };

  return (
    <div>
      <h2 className="text-1xl font-bold mb-4">Categories</h2>
      {loading ? (
        <p>Loading :-)</p>
      ) : (
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center">
              <input
                type="checkbox"
                id={category}
                checked={selectedFilters.includes(category)}
                onChange={() => handleCheckboxChange(category)}
                className="mr-4 checkbox"
              />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </div>
      )}

      <div className="dfc mt-4">
        <button onClick={handleApplyFilters} className="btn2">
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;

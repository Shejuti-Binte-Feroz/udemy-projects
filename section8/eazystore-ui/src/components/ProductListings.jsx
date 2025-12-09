import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Dropdown from "./Dropdown";
import SearchBox from "./SearchBox";

const sortList = [
  "Popularity",
  "Price: Low to High",
  "Price: High to Low",
];

export default function ProductListings({ products }) {

  const [searchText, setsearchText] = useState("");
  const [selectedSort, setselectedSort] = useState("Popularity");

  function handleSearchChange(inputSearch) {
    setsearchText(inputSearch);
  }

  function handleSortChange(sortType) {
    setselectedSort(sortType);
  }

  let filteredSortedProducts = Array.isArray(products) ? products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase()) ||
    product.description.toLowerCase().includes(searchText.toLowerCase())
  )
    : [];

  switch (selectedSort) {
    case "Price: Low to High":
      filteredSortedProducts = filteredSortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      break;
    case "Price: High to Low":
      filteredSortedProducts = filteredSortedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      break;
    default:
      filteredSortedProducts = filteredSortedProducts.sort((a, b) => parseInt(b.popularity) - parseInt(a.popularity));
      break;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-12">
        <SearchBox label="Search" placeholder="Search Products..." value={searchText} handleSearch={(value) => handleSearchChange(value)}></SearchBox>
        <Dropdown label="Sort By" options={sortList} value={selectedSort} handleSort={(value) => handleSortChange(value)}></Dropdown>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 py-12">
        {Array.isArray(products) && filteredSortedProducts.length > 0 ? (
          filteredSortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center font-primary font-bold text-lg text-primary">
            No products found
          </p>
        )}
      </div>
    </div>
  );
}
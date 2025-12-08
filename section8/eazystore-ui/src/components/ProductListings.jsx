import React from "react";
import ProductCard from "./ProductCard";
import Dropdown from "./Dropdown";
import SearchBox from "./SearchBox";

const sortList = [
  "Price: Low to High",
  "Price: High to Low",
  "Popularity",
];

export default function ProductListings({ products }) {

  function handleSearchChange(inputSearch) {
    console.log(inputSearch);
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-12">
        <SearchBox label="Search" placeholder="Search Products..." value="" handleSearch={(value)=>handleSearchChange(value)}></SearchBox>
        <Dropdown label="Sort By" options={sortList} value="Popularity"></Dropdown>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 py-12">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
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
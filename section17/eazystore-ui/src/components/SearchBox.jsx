import React from "react";

export default function SearchBox({ label, placeholder, value, handleSearch }) {

  

  return (
    <div className="flex items-center gap-3 pl-4 flex-1 font-primary dark:text-light">
      <label className="text-lg font-semibold text-primary dark:text-light">{label}</label>
      <input
        type="text"
        className="px-4 py-2 text-base border rounded-md transition border-primary focus:ring focus:ring-dark focus:outline-none dark:focus:ring-lighter text-gray-800 dark:border-light dark:text-lighter"
        placeholder={placeholder}
        value={value}
        onChange={(event)=>handleSearch(event.target.value)}
      />
    </div>
  );
}
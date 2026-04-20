import React from 'react'

export default function Dropdown({label, options, selectedValue, handleSort}) {
  return (
    <div className='flex items-center gap-2 justify-end pr-12 flex-1 font-primary dark:text-light'>
        <label className="text-lg font-semibold text-primary dark:text-light">{label}</label>
        <select className='px-3 py-2 text-base border rounded-md transition border-primary focus:ring focus:ring-dark focus:outline-none text-grey-900 dark:text-light dark:border-light dark:focus:ring-light'
            value={selectedValue} onChange={(event)=>handleSort(event.target.value)}>
                {options.map((optionVal,index) => (
                    <option key={index} value={optionVal}>{optionVal}</option>
               ))}
        </select>
    </div>
  );
}

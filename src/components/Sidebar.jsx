import { useNavigate } from "react-router-dom";
import PriceFilter from "./PriceFilter";

import { useState } from "react";
function Sidebar() {
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigate();

  const categorylist = [
    "all products",
    "jewelery",
    "women's clothing",
    "men's clothing",
  ];

  // Helper function to capitalize the first letter
  const capitalizeFirstLetter = (string) => {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <div className='w-1/6 pr-3 border-r mb-8 border-gray-200'>
      <h3 className='text-lg font-medium mb-4 border-b-2 pb-4'>Browse by</h3>
      <div className='mb-8'>
        {/* <li className='text-lg hover:underline cursor-pointer list-none '>
          all products
        </li> */}
        <ul className='space-y-2'>
          {categorylist.map((category, index) => (
            <li
              key={index}
              onClick={() => {
                navigate(`/ViewAll/${category}`);
                setActiveCategory(category);
              }}
              className={`text-lg hover:underline cursor-pointer ${activeCategory === category ? "text-red-500" : ""}`}
            >
              {capitalizeFirstLetter(category)}
            </li>
          ))}
        </ul>
      </div>

      <PriceFilter />
    </div>
  );
}

export default Sidebar;

import { useState } from "react";
import CategoryCard from "./CategoryCard";
import womentop from "../assets/images/womenproduct.jpg";
import mentop from "../assets/images/manproduct.jpg";

function ShopByCategory() {
  const [activeCategory, setActiveCategory] = useState("Women");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const categories =
    activeCategory === "Women"
      ? [
          { imageSrc: womentop, text: "Tops" },
          { imageSrc: womentop, text: "Bottoms" },
          { imageSrc: womentop, text: "Accessories" },
        ]
      : [
          { imageSrc: mentop, text: "Tops" },
          { imageSrc: mentop, text: "Bottoms" },
          { imageSrc: mentop, text: "Accessories" },
        ];

  return (
    <div className='container mx-auto px-24 py-8'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-3xl mb-4'>Shop by Category</h2>
        {/* Toggle buttons for Women and Men */}
        <div className='flex justify-end '>
          <button
            className={`mr-4 text-xl ${activeCategory === "Women" ? "underline" : "text-gray-500"}`}
            onClick={() => handleCategoryChange("Women")}
          >
            Women
          </button>
          <button
            className={`text-xl ${activeCategory === "Men" ? "underline" : "text-gray-500"}`}
            onClick={() => handleCategoryChange("Men")}
          >
            Men
          </button>
        </div>
      </div>
      {/* Category cards display */}
      <div className='grid grid-cols-3 gap-2 justify-center'>
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            imageSrc={category.imageSrc}
            text={category.text}
          />
        ))}
      </div>
    </div>
  );
}

export default ShopByCategory;

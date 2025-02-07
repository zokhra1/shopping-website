import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import ProductsCard from "./ProductsCard";

function ProductSide() {
  const { products } = useProducts();
  const { category } = useParams();
  const filteredProducts =
    !category || category === "all products"
      ? products
      : products.filter((product) => product.category === category);

  // Helper function to capitalize each word's first letter
  const capitalizeWords = (string) => {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <div className='pl-5'>
      <div className='header'>
        <h1 className='text-[24px]'>
          {category ? capitalizeWords(category) : "All Products"}
        </h1>
        <p>
          This is your category description. Its a great place to tell customers
          what this category is about,<br></br> connect with your audience and
          draw attention to your products.
        </p>
      </div>

      <div className='grid grid-cols-4 mb-20 gap-8 mr-5'>
        {filteredProducts.map((product) => (
          <ProductsCard
            key={product.title}
            imageSrc={product.image}
            text={product.title}
            price={product.price}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductSide;

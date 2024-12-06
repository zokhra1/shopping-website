import { useProducts } from "../context/ProductContext";
import ProductsCard from "./ProductsCard";

function ProductSide() {
  const { products } = useProducts();
  console.log(products);

  return (
    <div className='pl-5'>
      <div className='header'>
        {/* <h1 className='text-lg'>{products[0].category}</h1> */}
        <p>
          This is your category description. Its a great place to tell customers
          what this category is about,<br></br> connect with your audience and
          draw attention to your products.
        </p>
      </div>

      <div className='grid grid-cols-4 mb-20 gap-8 mr-5'>
        {products.map((product) => (
          <ProductsCard
            key={product.title}
            imageSrc={product.image}
            text={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductSide;

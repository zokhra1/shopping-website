import { useProducts } from "../context/ProductContext";

function ProductsPage() {
  const { isLoading, error, category } = useProducts();
  return (
    <div>
      <div>
        <h1>Products</h1>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <ul>
          {category.map((product) => (
            <li key={product}>{product}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductsPage;

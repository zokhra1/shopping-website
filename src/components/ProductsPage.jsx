import ProductSide from "./ProductSide";
import Sidebar from "./Sidebar";

function ProductsPage() {
  return (
    <div className='pl-9'>
      <div className='flex'>
        <Sidebar />
        <ProductSide />
      </div>
    </div>
  );
}

export default ProductsPage;

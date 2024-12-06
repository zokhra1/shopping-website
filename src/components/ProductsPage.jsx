import Breadcrumb from "./Breadcrump";
import ProductSide from "./ProductSide";
import Sidebar from "./Sidebar";

function ProductsPage() {
  return (
    <div className='pl-9'>
      <Breadcrumb />
      <div className='flex'>
        <Sidebar />
        <ProductSide />
      </div>
    </div>
  );
}

export default ProductsPage;

import PriceFilter from "./PriceFilter";

import { useProducts } from "../context/ProductContext";
function Sidebar() {
  const { CategoriesProduct } = useProducts();

  const categorylist = ["jewelery", "women's clothing", "men's clothing"];

  return (
    <div className='w-1/6 pr-3 border-r mb-8 border-gray-200'>
      <h3 className='text-lg font-medium mb-4 border-b-2 pb-4'>Browse by</h3>
      <div className='mb-8'>
        <li className='text-lg hover:underline cursor-pointer list-none '>
          all products
        </li>
        <ul className='space-y-2'>
          {categorylist.map((product) => (
            <li
              onClick={() => CategoriesProduct(product)}
              className='text-lg hover:underline cursor-pointer active:color:red '
              key={product}
            >
              {product}
            </li>
          ))}
        </ul>
      </div>

      <PriceFilter />
    </div>
  );
}

export default Sidebar;

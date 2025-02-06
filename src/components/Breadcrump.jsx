import { FiChevronRight } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Breadcrumb() {
  const { category, id } = useParams();
  const [product, setProduct] = useState(null);
  const [productCategory, setProductCategory] = useState(null);

  // Fetch product details if an ID exists (on product detail page)
  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          setProductCategory(data.category);
        });
    }
  }, [id]);

  console.log(product);

  return (
    <nav className='text-lg mb-4 text pl-9 py-5'>
      <ul className='flex items-center space-x-2 text-black'>
        {/* Ana sayfa linki */}
        <li>
          <Link to='/' className='hover:text-black'>
            Home
          </Link>
        </li>
        <li className='text-black'>
          <FiChevronRight />
        </li>
        {/* ViewAll linki */}
        <li>
          <Link to='/ViewAll' className='hover:text-black'>
            View All
          </Link>
        </li>
        {category && (
          <>
            <li className='text-black'>
              <FiChevronRight />
            </li>
            <li>
              <Link
                to={`/ViewAll/${category}`}
                className='capitalize text-black font-normal'
              >
                {category}
              </Link>
            </li>
          </>
        )}
        {id && product && (
          <>
            <li className='text-black'>
              <FiChevronRight />
            </li>
            <li>
              <Link
                to={`/ViewAll/${productCategory}`}
                className='capitalize text-black font-normal'
              >
                {productCategory}
              </Link>
            </li>
            <li className='text-black'>
              <FiChevronRight />
            </li>
            <li className='capitalize text-black font-normal'>
              {product.title}
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Breadcrumb;

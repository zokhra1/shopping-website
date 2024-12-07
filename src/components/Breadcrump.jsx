import { FiChevronRight } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";

function Breadcrumb() {
  const { category } = useParams();

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
            <li className='capitalize text-black font-normal'>{category}</li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Breadcrumb;

import { Link, NavLink } from "react-router-dom";
import { FiUser, FiSearch, FiShoppingCart } from "react-icons/fi";
import { useEffect, useState } from "react";
import Search from "./Search";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Toggle the search input visibility
  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Set threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={` flex  justify-between items-center  py-4 px-8  w-full z-20 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <Link to='/' className='text-4xl font-medium'>
        rnd.apparel
      </Link>

      <nav className='flex space-x-8 items-center text-2xl'>
        <NavLink
          to='/women'
          className={({ isActive }) =>
            `cursor-pointer ${isActive ? "underline underline-offset-4" : "hover:underline"}`
          }
        >
          Women
        </NavLink>
        <NavLink
          to='/men'
          className={({ isActive }) =>
            `cursor-pointer ${isActive ? "underline underline-offset-4" : "hover:underline"}`
          }
        >
          Men
        </NavLink>
        <NavLink
          to='/ViewAll'
          className={({ isActive }) =>
            `cursor-pointer ${isActive ? "underline underline-offset-4" : "hover:underline"}`
          }
        >
          ViewAll
        </NavLink>
      </nav>

      <div className='flex space-x-4 items-center'>
        <Link to='/login'>
          <FiUser className='text-xl hover:text-gray-700' />
        </Link>
        <div>
          <FiSearch
            onClick={toggleSearch}
            className='text-xl hover:text-gray-700'
          />
        </div>
        <Link to='/cart' className='relative'>
          <FiShoppingCart className='text-xl hover:text-gray-700' />
          <span className='absolute top-0 right-0 rounded-full bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center'>
            0
          </span>
        </Link>
      </div>

      {/* Search Input Section */}
      {isSearchOpen && (
        <Search isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      )}
    </header>
  );
};

export default Header;

import { FiSearch } from "react-icons/fi";
import { useRef } from "react";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function Search({ isOpen, onClose }) {
  const searchRef = useRef(null);

  // Close search input when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;
  return (
    <div
      ref={searchRef}
      className='absolute top-16 left-0 w-full bg-white p-4 shadow-md items-center justify-center '
    >
      <input
        type='text'
        placeholder='Search for items'
        className='relative w-full py-2 px-12 text-[18px] outline-none '
      />
      <FiSearch className='absolute bottom-7 left-8 text-2xl' />
      <button
        onClick={() => isOpen(false)}
        className='mt-2 absolute right-[50px]  text-black'
      >
        Close
      </button>
    </div>
  );
}

export default Search;

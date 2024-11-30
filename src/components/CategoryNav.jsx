import { NavLink } from "react-router-dom";

function CategoryNav() {
  return (
    <div className='flex  text-2xl h-[53px] justify-center items-center space-x-8'>
      <NavLink
        to='/products'
        className={({ isActive }) =>
          `cursor-pointer ${isActive ? "underline underline-offset-4" : "hover:underline"}`
        }
      >
        Tops
      </NavLink>
      <NavLink
        to='/products'
        className={({ isActive }) =>
          `cursor-pointer ${isActive ? "underline underline-offset-4" : ""}`
        }
      >
        Bottoms
      </NavLink>
      <NavLink
        to='/products'
        className={({ isActive }) =>
          `cursor-pointer ${isActive ? "underline underline-offset-4" : ""}`
        }
      >
        Accessories
      </NavLink>
    </div>
  );
}

export default CategoryNav;

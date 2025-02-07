import { NavLink } from "react-router-dom";
import Button from "./Button";

/* eslint-disable react/prop-types */
function CategoryCard({ imageSrc, text }) {
  return (
    <div className='relative group hover:opacity-[0.9]  h-[414px]   p-2'>
      <img src={imageSrc} alt={text} className=' w-full h-full object-cover' />

      <NavLink to='/productsPage'>
        <Button buttonStyle='btn-category' buttonText={text}></Button>
      </NavLink>
    </div>
  );
}

export default CategoryCard;

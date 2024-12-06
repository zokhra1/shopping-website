import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types, no-unused-vars
function ProductsCard({ imageSrc, text, price, id }) {
  return (
    <NavLink to='/ProductDetailPage/{id}'>
      <div className='flex flex-col group hover:opacity-[0.9]  h-[373px] w-[280px] p-2'>
        <img
          src={imageSrc}
          alt={text}
          className=' w-full h-[300px] object-cover'
        />
        <div>
          <p>{text}</p>
          <span>{price}</span>
        </div>
      </div>
    </NavLink>
  );
}

export default ProductsCard;

import { NavLink } from "react-router-dom";


// eslint-disable-next-line react/prop-types
function LastArrivalsCard({ imageSrc, text }) {
  return (
    <NavLink to='/ProductDetailPage'>
      <div className='flex flex-col group hover:opacity-[0.9]  h-[414px]   p-2'>
        <img
          src={imageSrc}
          alt={text}
          className=' w-full h-full object-cover'
        />
        <div>
          <p>Unisex oversize t-shirt</p>
          <span>123dollar</span>
        </div>
      </div>
    </NavLink>
  );
}

export default LastArrivalsCard;

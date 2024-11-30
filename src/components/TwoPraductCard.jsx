import knitwear from "../assets/images/knitwear.jpg";
import sweatshirt from "../assets/images/sweatshirt.jpg";

function TwoPraductCard() {
  const images = [knitwear, sweatshirt];

  return (
    <div className=' flex h-[600px] w-full '>
      <div
        className=' h-full bg-cover bg-center w-1/2 relative '
        style={{ backgroundImage: `url(${images[0]})` }}
      >
        <div className='absolute bottom-14 left-16 bg-white text-black p-4 rounded-lg shadow-lg'>
          <p className='font-semibold'>Women Oversized Sweatshirt →</p>
        </div>
        <div className='absolute top-6 left-9 bg-white text-black p-4 rounded-lg shadow-lg'>
          <p className='font-semibold'>Unisex Knit Beanie →</p>
        </div>
      </div>
      <div
        className=' h-full bg-cover bg-center w-1/2 relative'
        style={{ backgroundImage: `url(${images[1]})` }}
      >
        <div className='absolute bottom-8 left-36 bg-white text-black p-4 rounded-lg shadow-lg'>
          <p className='font-semibold'>Shop the Knitwear Collection</p>
        </div>
      </div>
    </div>
  );
}

export default TwoPraductCard;

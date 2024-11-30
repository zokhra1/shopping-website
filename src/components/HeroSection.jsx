import heroimg from "../assets/images/hero-img.jpeg";
import Button from "./Button";

function HeroSection() {
  return (
    <>
      <section
        className=' w-full h-screen bg-cover  bg-center '
        style={{ backgroundImage: `url(${heroimg})` }}
      >
        {/* Background Image with Parallax Effect */}

        <div className='relative z-10 flex  flex-col items-start top-[20%] pl-11  justify-center w-full h-full text-white text-center'>
          <div className='items-start  '>
            <h1 className='text-4xl sm:text-5xl md:text-6xl mb-3  text-black'>
              Start with the basics
            </h1>
            <div className=' flex gap-5'>
              <Button buttonText='Shop Women' buttonStyle='btn-hero' />
              <Button
                buttonText='Shop Men'
                buttonStyle='px-6 py-2 text-xl rounded bg-white text-black hover:opacity-[0.8]  hover:text-gray-700 transition-opacity duration-300'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;

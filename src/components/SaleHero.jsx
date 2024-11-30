/* eslint-disable react/prop-types */
import Button from "./Button";

function SaleHero({
  backGround = "bg-[#d9e4ec]",
  height = "h-[568px]",
  mainText = "30%-70% On Selected Styles",
  subText = "",
  borderTop = "border-t-black-0",
  buttonStyle = "btn-hero",
}) {
  return (
    <section
      className={`w-full ${height} bg-cover flex justify-center items-center  bg-center ${backGround} ${borderTop}`}
    >
      <div className='flex flex-col justify-center gap-8 items-center '>
        <h2 className='text-6xl'>{mainText}</h2>
        {subText && <p className='text-xl'> {subText}</p>}
        <Button buttonStyle={buttonStyle} buttonText='Shop Sale' />
      </div>
    </section>
  );
}

export default SaleHero;

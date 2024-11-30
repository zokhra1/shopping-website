import CategoryNav from "../components/CategoryNav";
import LastArrivals from "../components/LastArrivals";
import SaleHero from "../components/salehero";
import TwoPraductCard from "../components/TwoPraductCard";

function Men() {
  return (
    <div>
      <CategoryNav />
      <SaleHero
        backGround='bg-white'
        borderTop='border-t-[0.5px] border-t-black'
        height='h-[389px]'
        mainText='The sale is now open'
        subText='Get 30%-70% off on selected styles'
        buttonStyle='btn-black'
      />
      <TwoPraductCard />
      <LastArrivals text='Explore the mens collection' link='view all' />
    </div>
  );
}

export default Men;

import HeroSection from "../components/HeroSection";
import LastArrivals from "../components/LastArrivals";
import MovingText from "../components/MovingText";
import SaleHero from "../components/SaleHero";
import ShopByCategory from "../components/ShopByCategory";
import SubscribeHero from "../components/SubscribeHero";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <MovingText />
      <ShopByCategory />
      <LastArrivals />
      <SaleHero />
      <SubscribeHero />
    </div>
  );
}

export default HomePage;

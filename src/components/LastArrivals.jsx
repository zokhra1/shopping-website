/* eslint-disable react/prop-types */
import ProductsCard from "./ProductsCard";
import jaket from "../assets/images/manproduct.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

function LastArrivals({ text = "Last Arrivals", link = "" }) {
  return (
    <div className='container mx-auto px-24 py-8'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-3xl mb-4'>{text}</h2>
        {link && <Link>View All</Link>}
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={3}
        slidesPerView={4}
        navigation
      >
        <SwiperSlide>
          <ProductsCard imageSrc={jaket} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductsCard imageSrc={jaket} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductsCard imageSrc={jaket} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductsCard imageSrc={jaket} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductsCard imageSrc={jaket} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductsCard imageSrc={jaket} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductsCard imageSrc={jaket} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductsCard imageSrc={jaket} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default LastArrivals;

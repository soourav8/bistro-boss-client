import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// import slide images
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div className="mb-12">
      <SectionTitle
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className=" text-center pb-12">
          <img className="w-full" src={img2} alt="" />
          <p className="uppercase md:text-4xl -mt-12   text-white ">pizzas</p>
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <img className="w-full" src={img1} alt="" />
          <p className="uppercase md:text-4xl -mt-12  text-white ">salads</p>
        </SwiperSlide>
        <SwiperSlide className=" text-center">
          <img className="w-full" src={img3} alt="" />
          <p className="uppercase md:text-4xl -mt-12  text-white ">soups</p>
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <img className="w-full" src={img4} alt="" />
          <p className="uppercase md:text-4xl -mt-12  text-white ">desserts</p>
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <img className="w-full" src={img5} alt="" />
          <p className="uppercase md:text-4xl -mt-12  text-white ">salads</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;

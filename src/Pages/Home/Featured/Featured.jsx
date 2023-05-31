import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured-item p-8 bg-fixed">
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"Featured Item"}
      ></SectionTitle>

      <div className=" md:flex justify-center items-center py-8 px-16 bg-[#00000025]"> 
        <div>
          <img src={featuredImage} alt="" />
        </div>
        <div className="md:ml-10 text-white ">
            <p>March 20, 2023</p>
            <p>WHERE CAN I GET SOME?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
            <button className="btn btn-outline text-white border-0 border-b-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

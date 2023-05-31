import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <section className="mt-20 ">
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        {menu.map((item) => (
          <MenuItems item={item} key={item._id}></MenuItems>
        ))}
      </div>
      <div className="text-center my-20">

      <button className="btn btn-outline border-0 border-b-4 ">
        view full menu
      </button>
      </div>
    </section>
  );
};

export default PopularMenu;

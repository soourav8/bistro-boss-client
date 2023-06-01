import React from "react";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

export const MenuCategory = ({ items, coverImg, title }) => {
  return (
    <div className="pt-10">
      {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 mb-12 ">
        {items.map((item) => (
          <MenuItems item={item} key={item._id}></MenuItems>
        ))}
      </div>
      <div className="text-center my-20">
        <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 ">
        ORDER YOUR FAVOURITE FOOD
        </button>
        </Link>
      </div>
    </div>
  );
};

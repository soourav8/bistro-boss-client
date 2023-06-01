import React from "react";
import { FoodCard } from "../../../Components/FoodCard/FoodCard";

export const OrderTab = ({items}) => {
  return (
    <div className="">
      <div className="grid md:grid-cols-3 gap-5">
        {items.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    </div>
  );
};

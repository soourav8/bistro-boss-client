import React from "react";


export const FoodCard = ({item}) => {
    const { name, image, price, recipe } = item;
    const handleAddToCart = item =>{
      console.log(item);
    }
  return (
    <div className="flex flex-col items-center">
      <div className="card w-96 h-full bg-base-100 shadow-xl">
        <figure>
          <img className=""
            src={image}
            alt="Shoes"
          />
        </figure>
        <p className=" absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleAddToCart(item)} className="btn btn-outline border-0 border-orange-400 border-b-4">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Helmet} from 'react-helmet-async';
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { MenuCategory } from "../MenuCategory/MenuCategory";



 const Menu = () => {
    const [menu] = useMenu();
    
    const desserts = menu.filter(item => item.category === "dessert")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")
    const pizza = menu.filter(item => item.category === "pizza")
    const offered = menu.filter(item => item.category === "offered")
    
    return (
       <div >
        <Helmet>
            <title>Bistro Boss | Menu</title>
        </Helmet>
        <Cover img={menuImg} title={"our menu"}></Cover>
        {/* main cover  */}
        <SectionTitle
        subHeading={"---Don't miss---"}
        heading={"TODAY'S OFFER"}></SectionTitle>

        {/* offered menu items  */}

        <MenuCategory items={offered}></MenuCategory>

        {/* dessert menu items  */}

        <MenuCategory
        items={desserts}
        title={"dessert"}
        coverImg={dessertImg}></MenuCategory>

        {/* pizza items  */}

        <MenuCategory
        items={pizza}
        title={"pizza"}
        coverImg={pizzaImg}></MenuCategory>

        {/* salad items  */}

        
        <MenuCategory
        items={salad}
        title={"salad"}
        coverImg={saladImg}></MenuCategory>


        {/* soup items  */}
        <MenuCategory
        items={soup}
        title={"soup"}
        coverImg={soupImg}></MenuCategory>
        
       </div>
    );
};

export default Menu;
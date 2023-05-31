import React from "react";
import { Helmet} from 'react-helmet-async';
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg"
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


 const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.dessert === "dessert")
    const salad = menu.filter(item => item.salad === "salad")
    const soup = menu.filter(item => item.soup === "soup")
    const pizza = menu.filter(item => item.pizza === "pizza")
    const offered = menu.filter(item => item.offered === "offered")
    return (
       <div >
        <Helmet>
            <title>Bistro Boss | Menu</title>
        </Helmet>
        <Cover img={menuImg} title={"our menu"}></Cover>
        <SectionTitle
        subHeading={"---Don't miss---"}
        heading={"TODAY'S OFFER"}></SectionTitle>
        
       </div>
    );
};

export default Menu;
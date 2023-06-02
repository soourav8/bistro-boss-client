import React from "react";
import { useLocation } from "react-router-dom";

export const Login = () => {
    const location = useLocation();
    console.log(location);
    return (
       <div className="">
        <h2>Please login</h2>
       </div>
    );
};
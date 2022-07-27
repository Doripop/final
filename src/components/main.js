import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./header";
import Banner from "./Banner";
import NavBtn from "./NavBtn";
import CardList from "./CardList";
import ScrollBtn from "./ScrollBtn";
import ReviewBtn from "./ReviewBtn";



const Main = () => {

   
    return (
        <>
            <div>
                <Banner/>
                <NavBtn/>
                <CardList/>
                <ReviewBtn/>
                <ScrollBtn/>
            </div>
        </>
    )
}


export default Main;
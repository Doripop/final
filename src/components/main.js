import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Public/Header";
import Banner from "./Banner";
import NavBtn from "./NavBtn";
import CardList from "./CardList";
import ScrollBtn from "./ScrollBtn";
import ReviewBtn from "./ReviewBtn";

import "../css/main/main.css"

const Main = () => {

    return (
        <>
            <div className="main">
                <div className="banner">
                    <Banner/>
                </div>
             
                <div className="element">                
                <NavBtn/>
                <CardList/>
                {/* <ReviewBtn/> */}
                <ScrollBtn/>
                </div>
            </div>
        </>
    )
}

export default Main;
import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./header";
import Banner from "./Banner";
import NavBtn from "./NavBtn";
import CardList from "./CardList";
import ScrollBtn from "./ScrollBtn";


const Main = () => {


    return (
        <>
            <div>
                <Banner/>
                <NavBtn/>
                <CardList/>
                <ScrollBtn/>
            </div>
        </>
    )
}


export default Main;
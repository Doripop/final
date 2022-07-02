import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./header";
import Banner from "./Banner";
import NavBtn from "./NavBtn";
import CardList from "./CardList";
import AdminAdd from "./adminAdd";

const Main = () => {


    return (
        <>
            <div>
                <Banner/>
                <NavBtn/>
                <CardList/>
            </div>
        </>
    )
}


export default Main;
import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./header";
import Banner from "./Banner";
import Search from "./Search";
import CardList from "./CardList";
import AdminAdd from "./adminAdd";

const Main = () => {


    return (
        <>
            <div>
                
                <Banner />
                <Search />
                <CardList />
               
    


                <Routes>
                <Route path="/admin"  element={<AdminAdd />}/> 
                </Routes>
            </div>
        </>
    )
}


export default Main;
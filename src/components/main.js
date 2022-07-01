import React from "react";
import Header from "./header";
import Banner from "./Banner";
import Search from "./Search";
import CardList from "./CardList";

const Main = () => {
    return (
        <>
        <div>
            <Header></Header>
            <Banner/>
            <Search/>
            <CardList/>
        </div>
        </>
    )
}


export default Main;
import React from "react";
import Header from "./header";
import Banner from "./Banner";
import NavBtn from "./NavBtn";
import CardList from "./CardList";

const Main = () => {
    return (
        <>
            <div>
                <Header></Header>
                <Banner/>
                <NavBtn/>
                <CardList/>
            </div>
        </>
    )
}


export default Main;
import React from "react";
import Login from "./login";
import Menu from "./Menu";

import "../shard/Header.css"
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="header">
                <div className="navBar">
                    <Menu/>
                    <Login />
                </div>
            </div>

        </>
    )
}


export default Header;
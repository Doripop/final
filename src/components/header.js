import React from "react";
import Login from "./login";

import "../shard/Header.css"
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="header">
                <div className="navBar">
                    <Login />
                </div>
            </div>

        </>
    )
}


export default Header;
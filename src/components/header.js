import React from "react";
import Login from "./login";
<<<<<<< HEAD
import Menu from "./Menu";
=======
import Signup from "./Signup";
>>>>>>> 6cfbb6daf82ad38466f71f3052857d953267b96c

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
                    <Signup />
                </div>
            </div>

        </>
    )
}


export default Header;
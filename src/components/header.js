import React from "react";
import Login from "./login";
import Signup from "./Signup";
import styled from 'styled-components';

import "../shard/Header.css"
import { useNavigate } from "react-router-dom";



const Header = () => {

    
    const navigate = useNavigate()
    return (
        <>
            <div className="header">
                <div className="navBar">
                    <Logo onClick={() => {
                        localStorage.clear();
                        window.location.replace("/");
                    }}>😁Logoipsum</Logo>
                    <SearchInput type="text" placeholder="서울특별시 용산구, 42 디저트카페">
                    </SearchInput>
                    <div>
                    <Login />
                    <Signup />
                    </div>
                </div>
            </div>

        </>
    )
}
const SearchInput = styled.input`
    width: 600px;
    height: 50px;
    background: #2b303b;
    border: none;
    font-size: 10pt;
    float: left;
    color: white;
    padding-left: 45px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
`;

const Logo = styled.button`
    color: white;
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 30px;
    font-weight: 500;
`;

export default Header;
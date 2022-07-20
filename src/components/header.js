import React, { useRef, useState } from "react";
import Login from "./login";
import Signup from "./Signup";
import styled from 'styled-components';

import "../css/partCss/Header.css"
import { useNavigate } from "react-router-dom";
import { LogOut } from "../redux/modules/AllSlice";
import { useDispatch } from "react-redux";
import Logo_Cat from "../css/Logo_Cat_lattee.png"



const Header = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(null)
    const [role , setRole] = useState(null)
    const searchItem = useRef("")
    const onKeyPress = (e) => {
        if ( e.key === 'Enter') {
            navigate(`/search/${searchItem.current.value}`)
        }
    }
    React.useEffect(()=>{
        setIsLogin(localStorage.getItem("token"))
        setRole(localStorage.getItem("role"))
    },[isLogin])
     
    const LogOutBtn = () => {
        dispatch(LogOut())
    }
  
    return (
        <>
            <div className="header">
                <div className="navBar">
                    <Logo onClick={() => {
                     navigate("/")
                    }}><img className="logoImg" src={Logo_Cat}/>Exotic</Logo>
                    <SearchInput 
                    type="text" 
                    placeholder="서울특별시 용산구, 42 디저트카페"
                    ref={searchItem}
                    onKeyPress={(e)=>{onKeyPress(e)}}
                    >
                    </SearchInput>
                    <div>
                    {!isLogin ? (
                        <>
                            <Login />
                            <Signup />
                        </>
                        
                    ): (
                        <>
                            <h1 style={{
                                color:"white",
                                fontSize:"20px",
                                cursor : "pointer"
                            }}
                            onClick = {()=>{LogOutBtn();}}
                            >LOGOUT</h1>

                            <h1 style={{
                                color:"white",
                                fontSize:"20px",
                                cursor : "pointer"
                            }}
                            onClick = {()=>{role === "admin" ? navigate("/admin") : navigate("/mypage");}}
                            >
                                MYPAGE
                            </h1>
                        </>
                    )}
                    
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
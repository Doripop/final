import React, { useRef, useState } from "react";
import Login from "./login";
import Signup from "./Signup";
import styled from 'styled-components';

import "../css/partCss/Header.css"
import { useNavigate } from "react-router-dom";
import { CafeSearch, LogOut } from "../redux/modules/AllSlice";
import { useDispatch } from "react-redux";
import Logo_Cat from "../css/Logo_Cat_lattee.png"

//아이콘
import {CgLogOut} from 'react-icons/cg'
import {FaUserEdit} from 'react-icons/fa'
import {FiLogIn} from 'react-icons/fi'
import {HiSearch} from 'react-icons/fa'



const Header = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(null)
    const [role , setRole] = useState(null)
    const searchItem = useRef("")
    const onKeyPress = (e) => {
        if ( e.key === 'Enter') {
            dispatch(CafeSearch({
                keyword : e.target.value
            }))
            navigate("/search")
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
                    }}><img className="logoImg" src={Logo_Cat}/><div> BLANK</div></Logo>
                    <SearchInput 
                    type="text" 
                    placeholder="서울특별시 용산구, 42 디저트카페"
                    ref={searchItem}
                    onKeyPress={(e)=>{onKeyPress(e)}}
                    />
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
                                fontSize:"30px",
                                cursor : "pointer"
                            }}
                            onClick = {()=>{LogOutBtn();}}
                            >logout</h1>
                            {/* <CgLogOut className="logout"/> 로그아웃 아이콘 */}

                            <h1 style={{
                                color:"white",
                                fontSize:"32px",
                                cursor : "pointer"
                            }}
                            onClick = {()=>{role === "admin" ? navigate("/admin") : navigate("/mypage");}}
                            >
                                <FiLogIn className="myPage"/>
                            </h1>
                            {/* <FaUserEdit/> 유저 아이콘 */}
                        </>
                    )}
                    
                    </div>
                </div>
            </div>
        </>
    )
}
const SearchInput = styled.input`
    width: 392px;
    height: 50px;
    background: #2b303b;
    border: none;
    font-size: 10pt;
    font-family: 'Arita-dotum-Medium';
    float: left;
    color: white;
    padding-left: 45px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
`;

const Logo = styled.div`
    color: white;
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-family: 'BMJUA';

    & div {
        margin-top:15px;
        margin-left: 20px;
        font-size: 40px;
    }
`;

export default Header;
import React, { useRef, useState } from "react";
import Login from "../login";
import Signup from "../Signup";
import styled from 'styled-components';


import { useNavigate } from "react-router-dom";
import { CafeSearch, LogOut } from "../../redux/modules/AllSlice";
import { useDispatch } from "react-redux";
import Logo_Cat from "../../css/Logo_Cat_lattee.png"
import { HeaderLogOut, HeaderLogOutIcon, HeaderSearchIcon } from "../../css/public";
import { FaUserEdit } from 'react-icons/fa'




const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(null)
  const [role, setRole] = useState(null)
  const searchItem = useRef("")

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      dispatch(CafeSearch({
        keyword: e.target.value
      }))
      navigate("/search")
    }
  }

  React.useEffect(() => {
    setIsLogin(localStorage.getItem("token"))
    setRole(localStorage.getItem("role"))
  }, [isLogin])


  return (
    <Wrap>
      <div className="center">

        <div class="leftMenu">
          <div className="logo">
            <img
              src={Logo_Cat}
              onClick={() => {
                navigate("/")
              }}
            />
            <p> BLANK </p>
          </div>

          <div className="search">
            <div className="hSearchIcon">
              <HeaderSearchIcon />
            </div>
            <input
              type="text"
              placeholder="검색"
              ref={searchItem}
              onKeyPress={(e) => { onKeyPress(e) }} />
          </div>
        </div>

        {!isLogin ?
          <>
            <Login />
            <Signup />
          </>
          :
          <div className="buttonArea">
            <div>
              <HeaderLogOut
                onClick={() => {
                  dispatch(LogOut())
                }} />
              <HeaderLogOutIcon
                onClick={() => {
                  role === "admin" ?
                    navigate("/admin") :
                    navigate("/mypage");
                }}
              />
            </div>
          </div>
        }
      </div>

    </Wrap>

  )
}


const Wrap = styled.div`
max-width: 1920px;
width: 100%;
height: 100px;
background: #19221F;
display: flex;
justify-content: center;
align-items: center;

.center{

  display: flex;
  justify-content: center;
  align-items: center;
  
  max-width: 1200px;
  min-width: 1050px;
  width: 100%;
  gap: 3%;

  .leftMenu{
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
    .logo{
    display: flex;
    flex-direction: row;

    img{
      width: 90px;
    margin: 0 20px 0 0;
    height: 92px;
    margin-top: 33px;
    }

    p{
      display: flex;
      align-items: flex-end;
      font-size: 3rem;
      font-family: 'Jua', sans-serif;
      color:white;
  
    }}

.search{
  display: flex;
  align-items: center;
  width: 392px;
  height: 50px;
  border: 1px solid white;
  border-radius: 5px;
  
  .hSearchIcon{
    padding: 1rem;

  }

  input{
    background: #19221F;
    width: 325px;
    font-size: 1.5rem;
    border: none;
    color: white;
    outline: none;

    &::-webkit-input-placeholder{
      color: white;
      opacity:  1;

    }
  }
  }
}

.buttonArea{
  width: 20%;
  justify-content: flex-end;
  
  div{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  }



}

}`;

export default Header;
import React, { useRef } from "react";
import styled from "styled-components";
import "./modal.css"
import { instance } from "../axios";
import {AiOutlineClose} from "react-icons/ai"

//google, naver, kakao login import
import NaverLogin from 'react-naver-login';
import KakaoLogin from 'react-kakao-login';
import GoogleLogin from 'react-google-login';

//Image import
import backImg1 from "../../css/cafeImg/cafeImg1.jpg";
import backImg2 from "../../css/cafeImg/cafeImg2.jpg";
import backImg3 from "../../css/cafeImg/cafeImg3.jpg";
import backImg4 from "../../css/cafeImg/cafeImg4.jpg";
import kakaoImg from "../../css/kakao_login_large_narrow.png";
import googleImg from "../../css/btn_google_signin_dark_normal_web2x.png";
import naverImg from "../../css/btnG_official.png"
import Logo_Cat from "../../css/Logo_Cat_lattee.png"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginModal = (props) => {
    const navigate = useNavigate()
    const userID = useRef("")
    const userPW = useRef("")
    const {open, close , header} = props;
    const clickSnsLoginKakao = (e) => {
        let kakaoid = e.profile.id; // 카카오에서 제공한 ID
    };
    const clickSnsLoginNaver = (e) => {
        let naverid = e.id; // 네이버에서 제공한 ID
    };
    const clickSnsLoginGoogle = (e) => {
        let googleid = e.Ft.NT; // 구글에서 제공한 ID
    };
   
    //Image array
    const backgroundArr = [backImg1,backImg2,backImg3,backImg4];
    const randomIndex = Math.floor(Math.random() * backgroundArr.length);
    const backgroundImg = backgroundArr[randomIndex];
    
    const userLogin = async()=>{
            try {
           const {data} =  await axios.post(
            "https://kyuhong.shop/api/user/signin",{
            email : userID.current.value,
            password : userPW.current.value
           });
            localStorage.setItem("token", data.data.accessToken)
            localStorage.setItem("refreshtoken", data.data.refreshToken)
            localStorage.setItem("nicname",data.data.nickname ) 
            localStorage.setItem("role",data.data.role )
            localStorage.setItem("profileimg",data.data.profileimg )
            localStorage.setItem("logoimg",data.data.logoimg )
            localStorage.setItem("cafename",data.data.businessname )
            console.log(data)
            return data.data.role ==="admin"? window.location.replace("/admin") : data.result ? window.location.replace("/") : close();
            } catch(error){
                // eslint-disable-next-line default-case
                switch (error.response.data.message) {
                    case "아이디 혹은 비밀번호가 틀렸습니다.":
                        alert("아이디 혹은 비밀번호가 틀렸습니다.");
                        break;
                }
            }
        }
    
    return (
        <>
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section className="modalBackImg" style={{backgroundImage: `url(${backgroundImg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
                    <div 
                        onClick={close}
                        style={{display:"flex",justifyContent:"flex-end"}}
                    >
                        <span style={{fontSize:"25px", cursor: "pointer"}}><AiOutlineClose /></span>
                    </div>
                    <Header>
                        <img className="logoImg" src={Logo_Cat}/>
                        {header}
                    </Header>
                    <Body>
                        <div>
                            <InputBox ref={userID} type="email" placeholder="E-mail" />
                        </div>
                        <div>
                            <InputBox ref={userPW} type="password" placeholder="Password" />
                        </div>
                        {/* <NaverLogin
                            clientId={'Khwo3ZGcF4998EqdYc6y'}
                            callbackURL="http://localhost:3000/"
                            render={renderProps => (
                                <div onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                    <Img_sns src={naverImg} resizeMode={'contain'}/>
                                </div>
                            )}
                        />
                        <KakaoLogin
                            token={'18f40c27569f0470621e75528f5bf4fa'}
                            callbackURL="http://localhost:3000/"
                            render={renderProps => (
                                <div onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                    <Img_sns src={kakaoImg} resizeMode={'contain'}/>
                                </div>
                            )}
                        />
                        <GoogleLogin
                            clientId={'AIzaSyCpUevbYDNdPRAI5Tdt3vnj74Da5hMeBU4'}
                            buttonText="Login"
                            render={renderProps => (
                                <div onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                    <Img_sns src={googleImg} resizeMode={'contain'}/>
                                </div>
                            )}
                        /> */}
                    </Body>
                    <Footer>
                        <button className="close" onClick={userLogin}>로그인</button>
                    </Footer>
                </section>
            ):null}

        </div>
        </>
    )
}

const Header = styled.header`
    display: flex; 
    justify-content: center;
    height: 100px;
    text-align: center;
    margin-top: 40px; 
    
    font-size: 40px;
    font-weight: bold;
    color: white;
`;

const Body = styled.body`
    display: flex; 
    flex-direction: column;
    align-items: center;
`;

const InputBox = styled.input`
    width: 290px;
    height: 50px;
    background: transparent;
    color: white;
    margin-bottom: 10px;

    font-size: 20px;

    border-left-width:0; 
    border-right-width:0; 
    border-top-width:0;
    border-bottom-width:1;
    border-bottom-color: white;

    ::placeholder {
        color: white;  
    }
`;

const Img_sns = styled.img`
    width: 290px;
    height: 60px;

    margin-top: 10px;
    cursor: pointer;
`;

const Footer = styled.footer`
    display: flex;
    width:fit-content;
    margin: 0 auto;

    & button {
        width: 290px;
        height: 50px;
        color: white;
        background-color: black;
    }
`;

export default LoginModal;
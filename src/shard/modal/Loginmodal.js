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
import coffee1 from "../../css/coffee1.jpg";
import coffee2 from "../../css/coffee2.jpg";
import coffee3 from "../../css/coffee3.jpg";
import coffee4 from "../../css/coffee4.jpg";
import kakaoImg from "../../css/kakao_login_large_narrow.png";
import googleImg from "../../css/btn_google_signin_dark_normal_web2x.png";
import naverImg from "../../css/btnG_official.png"

const LoginModal = (props) => {
    const userID = useRef("")
    const userPW = useRef("")

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
    const backgroundArr = [coffee1,coffee2,coffee3,coffee4];
    const randomIndex = Math.floor(Math.random() * backgroundArr.length);
    const backgroundImg = backgroundArr[randomIndex];
    
    const userLogin = async()=>{
            try {
           const {data} =  await instance.post("user-login",{
            email : userID.current.value,
            password : userPW.current.value
           });

            // localStorage.setItem("token", data.token)
            // localStorage.setItem("token", data.re_token) 

            // window.setTimeout(()=>{
            //     reLogin()
            // }, 590000)

            } catch(error){
              window.alert(error) 
            }
        }
    const {open, close , header} = props;
    return (
        <>
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section style={{backgroundImage: `url(${backgroundImg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
                    <div 
                        onClick={close}
                        style={{display:"flex",justifyContent:"flex-end"}}
                    >
                        <span style={{fontSize:"25px", cursor: "pointer"}}><AiOutlineClose /></span>
                    </div>
                    <Header>
                        {header}
                    </Header>
                    <Body>
                        <div>
                            <InputBox ref={userID} type="email" placeholder="E-mail" />
                        </div>
                        <div>
                            <InputBox ref={userPW} type="password" placeholder="Password" />
                        </div>
                        <NaverLogin
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
                        />
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
    font-family: "궁서";
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
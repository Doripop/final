import React, { useRef } from "react";
import styled from "styled-components";
import "./modal.css"
import { instance } from "../axios";

//Image import
import coffee1 from "../../css/coffee1.jpg";
import coffee2 from "../../css/coffee2.jpg";
import coffee3 from "../../css/coffee3.jpg";
import coffee4 from "../../css/coffee4.jpg";


const LoginModal = (props) => {
    const userID = useRef("")
    const userPW = useRef("")
   
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
                    <Header>
                        {header}
                    </Header>
                    <Body>
                        <div>
                            <InputBox ref={userID} type="email" placeholder="EMAIL" />
                        </div>
                        <div>
                            <InputBox ref={userPW} type="password" placeholder="PASSWORD" />
                        </div>
                        <div>네이버 로그인</div>
                        <div>카카오 로그인</div>
                        <div>구글 로그인</div>
                    </Body>
                    <Footer>
                        <button className="close" onClick={userLogin}>로그인</button>
                        <button className="close" onClick={close}>닫기</button>
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
    height: 150px;
    text-align: center;
    font-size: 50px;
    margin-top: 80px; 
`;

const Body = styled.body`
    display: flex; 
    flex-direction: column;
    align-items: center;
`;

const InputBox = styled.input`
    width: 200px;
    height: 30px;
    background: transparent;

    font-size: 20px;

    border-left-width:0; 
    border-right-width:0; 
    border-top-width:0;
    border-bottom-width:1;

    ::placeholder {
        color: white;  
    }
`;

const Footer = styled.footer`
    display: flex;
    width:fit-content;
    margin: 0 auto;

`;

export default LoginModal;
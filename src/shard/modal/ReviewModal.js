import React, { useRef } from "react";
import styled from "styled-components";
import "./modal.css"
import { instance } from "../axios";




const ReviewModal = (props) => {
 
    const {open, close , header} = props;

    return (
        <>
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <Header>
                        {header}
                    </Header>
                    <Body>
                        <h2>네이버 로그인</h2>
                        <h2>카카오 로그인</h2>
                        <h2>구글 로그인</h2>
                    </Body>
                    <Footer>
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

export default ReviewModal;
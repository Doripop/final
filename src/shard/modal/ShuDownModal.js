import React, { useRef } from "react";
import styled from "styled-components";
import "./modal.css"
import { instance } from "../axios";
import { AiOutlineClose } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";
import { OwnerCafeLoad } from "../../redux/modules/MypageSlice";
import axios from "axios";



const ShuDown = (props) => {

    const { open, close } = props;
   
    const ShutDownCafe = async() => {
        try{
           const {data} = await instance.delete("api/owner")
      
            console.log(data)
         
            return data.result ? alert("카페가 정상적으로 삭제 되었습니다.")
                    : alert("폐업에 실패했습니다.")
            
        }catch(error){
            console.log(error)
        }
    }


    return (
        <>
            <div className={open ? 'openModal modal' : 'modal'}>
                {open ? (
                    <section className="modalBackImg" >
                        <div
                            onClick={close}
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                cursor: "pointer",
                                color: "black"
                            }}>
                            <span style={{ fontSize: "25px", cursor: "pointer", padding: 15 }}><AiOutlineClose /></span>
                            <span style={{ fontSize: "25px", cursor: "pointer" }}></span>
                        </div>
                        <Header>

                        </Header>
                        <Body>
                            <span
                            style={{
                            fontSize:"20px",
                            padding:"30px",
                            fontWeight:"bold"}}>
                                폐업을 하시면 해당 자료는<br/>
                                다시 복구가 불가능 합니다.<br />
                                폐업을 하시겠습니까?
                            </span>
                        </Body>
                        <Footer>
                            <button className="close" 
                            onClick={()=>{
                                ShutDownCafe();
                                close() 
                            }}>폐업하기</button>
                            <button className="close" >취소하기</button>
                        </Footer>
                    </section>
                ) : null}

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
    flex-direction:row;

    & button {
        width: 100px;
        height: 50px;
        margin-right : 10px;
        border-radius :10px;
        color: white;
        background-color: black;
    }
`;

export default ShuDown;
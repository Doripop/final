import React, { useState } from "react";
import ReviewModal from "../shard/modal/ReviewModal";

// CSS 관련 Imports
import styled from 'styled-components';
import Btn_Cat from '../css/Btn_Cat_lattee.png';


const ReviewBtn = (props) => {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  const [isLogin, setIsLogin] = useState(null);
  React.useEffect(()=>{
    setIsLogin(localStorage?.getItem("token")) 
  },[localStorage.getItem("token")])
  console.log(isLogin)

  return (
    <>
      <Btn onClick={()=>{
        !isLogin ? alert("로그인이 필요한 서비스입니다!")
        :openModal()
      }}></Btn>
      <ReviewModal open={modalOpen} close={closeModal}>
      </ReviewModal>
    </>
  )

}

const Btn = styled.button`
  position: fixed;
  z-index: 100;
  bottom: 100px;
  right: 35px;
  display:flex;
  justify-content:center;
  align-items:center;
  width: 60px;
  height: 60px;
  background-color: #fff;
  background-image: url(${Btn_Cat});
  background-repeat: no-repeat;
	background-size: cover;
  border: 1.5px solid #eee;
  border-radius: 120px;
  font-size : 28px;
  padding:0px;
  color: #4c4c4c;
  cursor:pointer;

`

export default ReviewBtn;
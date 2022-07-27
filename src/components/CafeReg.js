import CafeRegModal from "../shard/modal/CafeRegModal"
import React, { useState } from "react";
import styled from "styled-components";




const CafeReg = () => {

    const [modalOpen, setModalOpen] = useState(false);
    
    const openModal = () => {
      setModalOpen(true);
      console.log("아아아아아")
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
          <CafeBtn onClick={()=>{
            !isLogin ? alert("로그인이 필요한 서비스 입니다!") 
            : openModal()
          }}>카페등록</CafeBtn>
          <CafeRegModal open={modalOpen} close={closeModal} header="카페등록">
          </CafeRegModal>
        </>
    )
}

const CafeBtn = styled.button`
  width: 100px;
  height: 40px;
  color: white;
  margin-right:10px;
  font-family: 'Arita-dotum-Medium';
  background-color: #3FC275;
  border-radius: 5px;
  border: none;
  outline: none;

  cursor: pointer;
`;

export default  CafeReg;
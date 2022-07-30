import ReviewModal from "../shard/modal/ReviewModal";
import React, { useState } from "react";
import styled from "styled-components";



const Review = () => {

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
   

  return (
    <>
      <ReviewBtn
      onClick={()=>{
            !isLogin ? alert("로그인이 필요한 서비스 입니다!") 
            : openModal()
          }}>리뷰작성</ReviewBtn>
      <ReviewModal open={modalOpen} close={closeModal}>
      </ReviewModal>

    </>
  )
}

const ReviewBtn = styled.button`
  width: 100px;
  height: 40px;
  color: white;
  font-family: 'Arita-dotum-Medium';
  background-color: #3FC275;
  border-radius: 5px;
  border: none;
  outline: none;
  margin-right:60px;
  cursor: pointer;
`;


export default Review;
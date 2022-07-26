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


    return (
        <>
      <ReviewBtn onClick={openModal}>리뷰작성</ReviewBtn>
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
  background-color: #00E676;
  border-radius: 5px;
  border: none;
  outline: none;
  
  cursor: pointer;
`;


export default  Review;
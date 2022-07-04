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
      <button onClick={openModal}>리뷰작성</button>
      <ReviewModal open={modalOpen} close={closeModal}>
      </ReviewModal>

        </>
    )
}




export default  Review;
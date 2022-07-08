import CafeRegModal from "../shard/modal/CafeRegModal"
import React, { useState } from "react";
import styled from "styled-components";




const CafeReg = () => {

    const [modalOpen, setModalOpen] = useState(false);
    
    const openModal = () => {
      setModalOpen(true);
    }

    const closeModal = () => {
      setModalOpen(false);
    }


    return (
        <>
          <CafeBtn onClick={openModal}>카페등록</CafeBtn>
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

  background-color: #00E676;
  border-radius: 5px;
  border: none;
  outline: none;

  cursor: pointer;
`;

export default  CafeReg;
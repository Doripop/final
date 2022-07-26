import ShuDown from "../../shard/modal/ShuDownModal";
import React, { useState } from "react";
import styled from "styled-components";




const OwnerShutDown = () => {

    const [modalOpen, setModalOpen] = useState(false);
    
    const openModal = () => {
      setModalOpen(true);
    }

    const closeModal = () => {
      setModalOpen(false);
    }


    return (
        <>
          <CafeBtn onClick={openModal}>폐업 하기</CafeBtn>
          <ShuDown open={modalOpen} close={closeModal} header="페업 하기">
          </ShuDown>
        </>
    )
}

const CafeBtn = styled.span`
  height: 40px;
  color: white;
  cursor : pointer;
  font-family: 'Arita-dotum-Medium';
  outline: none;
`;

export default  OwnerShutDown;
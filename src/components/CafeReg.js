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
      <button onClick={openModal}>카페등록</button>
      <CafeRegModal open={modalOpen} close={closeModal} header="카페등록">
      </CafeRegModal>

        </>
    )
}


export default  CafeReg;
import LoginModal from "../shard/modal/Loginmodal"
import React, { useState } from "react";
import styled from "styled-components";

//import react Icons
import { FiLogIn } from 'react-icons/fi'


const Login = () => {

  const [modalOpen, setModalOpen] = useState(false);
  
  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }


    return (
        <>
          <LoginBtn onClick={openModal}><FiLogIn/></LoginBtn>
          <LoginModal open={modalOpen} close={closeModal} header="B L A N K">
          </LoginModal>
        </>
    )
}

const LoginBtn = styled.button`
  color: white;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 30px;
  font-weight: 500;
`;


export default  Login;
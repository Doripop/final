import SignupModal from "../shard/modal/Signupmodal";
import React, { useState } from "react";
import styled from "styled-components";

//import react Icons
import { SiGnuprivacyguard } from 'react-icons/si'

const Signup = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }


<<<<<<< HEAD
    return (
        <>
      <SignupBtn onClick={openModal}><SiGnuprivacyguard/></SignupBtn>
      <SignupModal open={modalOpen} close={closeModal} header="BLANK 회원가입">
=======
  return (
    <>
      <SignupBtn onClick={openModal}><SiGnuprivacyguard /></SignupBtn>
      <SignupModal open={modalOpen} close={closeModal} header="😁Exotic 회원가입">
>>>>>>> 9af61a79cec71d5cc36936c798807726832b8171
      </SignupModal>

    </>
  )
}

const SignupBtn = styled.button`
  color: white;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 30px;
  font-weight: 500; 
`;

export default Signup;
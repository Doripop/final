import SignupModal from "../shard/modal/Signupmodal";
import React, { useState } from "react";




const Signup = () => {

  const [modalOpen, setModalOpen] = useState(false);
  
  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }


    return (
        <>
     <button onClick={openModal}>회원가입</button>
      <SignupModal open={modalOpen} close={closeModal} header="회원가입">
      </SignupModal>

        </>
    )
}


export default  Signup;
import LoginModal from "../shard/modal/Loginmodal"
import React, { useState } from "react";




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
     <button onClick={openModal}>로그인</button>
      <LoginModal open={modalOpen} close={closeModal} header="로그인">
      </LoginModal>

        </>
    )
}


export default  Login;
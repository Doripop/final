import Modal from "../shard/modal/modal"
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
      <Modal open={modalOpen} close={closeModal} header="로그인">
      </Modal>

        </>
    )
}


export default  Login;
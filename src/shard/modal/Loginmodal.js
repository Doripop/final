import React, { useRef } from "react";
import axios from "axios"
import styled from "styled-components";
import "./modal.css"
import { instance } from "../axios";


const LoginModal = (props) => {
    const userID = useRef("")
    const userPW = useRef("")
   
    
    
    const userLogin = async()=>{
            try {
           const {data} =  await instance.post("user-login",{
            email : userID.current.value,
            password : userPW.current.value
           });

            //  localStorage.setItem("token", data.token)
            } catch(error){
              window.alert(error) 
            }
        }
      
    
    
    
    
    const {open, close , header} = props;

    return (
        <>
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header style={{display:"flex", justifyContent:"center" }}>
                        {header}
                    </header>
                    <body style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
                        <div>
                            <input ref={userID} type="email" placeholder="EMAIL" />
                        </div>
                        <div>
                            <input ref={userPW} type="password" placeholder="PASSWORD" />
                        </div>
                        

                    </body>
                    <footer>
                        <button className="close" onClick={userLogin}>로그인</button>
                        <button className="close" onClick={close}>닫기</button>
                    </footer>
                </section>
            ):null}

        </div>
        </>
    )


}

export default LoginModal;
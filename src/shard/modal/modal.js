import React, { useRef } from "react";
import styled from "styled-components";
import "./modal.css"


const Modal = (props) => {
    const write = useRef(null)
    
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
                            아이디 : <input ref={write} type="text" placeholder="입력해주세요" />
                        </div>
                        <div>
                            비밀번호 : <input ref={write} type="text" placeholder="입력해주세요" />
                        </div>
                        

                    </body>
                    <footer>
                        <button className="close" onClick={close}>로그인</button>
                        <button className="close" onClick={close}>닫기</button>
                    </footer>
                </section>
            ):null}

        </div>
        </>
    )


}

export default Modal;
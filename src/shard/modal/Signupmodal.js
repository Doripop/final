import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import "./modal.css"
import { instance } from "../axios";


const SignupModal = (props) => {

    const { open, close, header } = props;

    //입력받을 값
    const Nic = useRef("")
    const Email = useRef("")
    const Password = useRef("")
    const Check = useRef("")
    const Key = useRef("")
    const [role, setRole] = useState("user")
    const reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

    const userRole = (e) => {
        console.log(e.target.value);
        setRole(e.target.value);
    }



    async function userRegister() {
        if (!Nic.current.value || !Email.current.value || !Password.current.value || !Check.current.value) {
            window.alert('모두 입력해주세요')
        }
        else if (!reg_email.test(Email.current.value)) {
            return alert('이메일 형식을 지켜주세요!')
        } else if (Password.current.value !== Check.current.value) {
            return alert('비밀번호가 일치하지 않아요!')
        } else if (role == "admin" && !Key.current.value) {
            return alert("<필수> 키값을 입력하세요")
        } else {
            console.log("회원가입 요청");
            try {
                // const { data } = await axios
                // .post("http://localhost:5002/user-login", userInfo);
                await instance.post("user-login", {
                    email: Email.current.value,
                    password: Password.current.value,
                    nickname: Nic.current.value,
                    key: role == "user" ? "" : Key.current.value
                    // role : role
                })
                // close();
            } catch (error) {
                // eslint-disable-next-line default-case
                switch (error.code) {
                    case "":
                        alert("스테이트 변경해서 밑에 클래스변경");
                        break;
                    // eslint-disable-next-line no-duplicate-case
                    case "":
                        alert("스테이트 변경해서");
                        break;
                }
            }
        }
    }




    return (
        <>
            <div className={open ? 'openModal modal' : 'modal'}>
                {open ? (
                    <section>
                        <header style={{ display: "flex", justifyContent: "center" }}>
                            {header}
                        </header>
                        <body style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div>

                                <label htmlFor="사용자">사용자</label>
                                <input
                                    type="radio"
                                    id="사용자"
                                    name="구분"
                                    value="user"
                                    onChange={(e) => {
                                        userRole(e)
                                    }}
                                />
                                <label htmlFor="관리자">관리자</label>
                                <input
                                    type="radio"
                                    id="관리자"
                                    name="구분"
                                    value="admin"
                                    onChange={(e) => {
                                        userRole(e)
                                    }}
                                />
                            </div>
                            <div>
                                <input ref={Nic} type="text" placeholder="NICKNAME" />
                            </div>
                            <div>
                                <input ref={Email} type="email" placeholder="EMAIL" />
                            </div>
                            <div>
                                <input ref={Password} type="password" placeholder="PASSWORD" />
                            </div>
                            <div>
                                <input ref={Check} type="password" placeholder="PASSWORD CHECK" />
                            </div>

                            <div className={role == "user" ? "user" : "admin"}>
                                <input ref={Key} type="password" placeholder="Key" />
                            </div>


                        </body>
                        <footer>
                            <button className="close" onClick={() => { userRegister() }}>가입하기</button>
                            <button className="close" onClick={close}>닫기</button>
                        </footer>
                    </section>
                ) : null}

            </div>
        </>
    )


}

export default SignupModal;
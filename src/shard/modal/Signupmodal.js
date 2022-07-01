import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import "./modal.css"
import { instance } from "../axios";

//Image import
import coffee1 from "../../css/coffee1.jpg";
import coffee2 from "../../css/coffee2.jpg";
import coffee3 from "../../css/coffee3.jpg";
import coffee4 from "../../css/coffee4.jpg";


const SignupModal = (props) => {

    //Image array
    const backgroundArr = [coffee1,coffee2,coffee3,coffee4];
    const randomIndex = Math.floor(Math.random() * backgroundArr.length);
    const backgroundImg = backgroundArr[randomIndex];

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
                    <section style={{backgroundImage: `url(${backgroundImg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
                        <Header>
                            {header}
                        </Header>
                        <Body>
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
                                <InputBox ref={Nic} type="text" placeholder="NICKNAME" />
                            </div>
                            <div>
                                <InputBox ref={Email} type="email" placeholder="EMAIL" />
                            </div>
                            <div>
                                <InputBox ref={Password} type="password" placeholder="PASSWORD" />
                            </div>
                            <div>
                                <InputBox ref={Check} type="password" placeholder="PASSWORD CHECK" />
                            </div>

                            <div className={role == "user" ? "user" : "admin"}>
                                <InputBox ref={Key} type="password" placeholder="Key" />
                            </div>
                        </Body>
                        <Footer>
                            <button className="close" onClick={() => { userRegister() }}>가입하기</button>
                            <button className="close" onClick={close}>닫기</button>
                        </Footer>
                    </section>
                ) : null}

            </div>
        </>
    )
}

const Header = styled.header`
    display: flex; 
    justify-content: center;
    height: 150px;
    text-align: center;
    font-size: 50px;
    margin-top: 80px; 
`;

const Body = styled.body`
    display: flex; 
    flex-direction: column;
    align-items: center;
`;

const InputBox = styled.input`
    width: 200px;
    height: 30px;
    background: transparent;

    font-size: 20px;

    border-left-width:0; 
    border-right-width:0; 
    border-top-width:0;
    border-bottom-width:1;

    ::placeholder {
        color: white;  
    }
`;

const Footer = styled.footer`
    display: flex;
    width:fit-content;
    margin: 0 auto;
`;

export default SignupModal;
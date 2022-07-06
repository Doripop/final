import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import "./modal.css"
import { instance } from "../axios";
import {AiOutlineClose} from "react-icons/ai"

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
    const Businessname = useRef("")
    const Businessnumber = useRef("")
    const [role, setRole] = useState("user")
    const reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

    const userRole = (e) => {
   
        setRole(e.target.value);
    }

    const NumberCheck = (e) => {
    const Rule =[]
    const justNumber = e.split("-");
    const CheckRule = justNumber.map((item, i) => {
            Rule.push(item.length)   
       })
   
       const BusinessCheck = e.replace(/-/gi, '').split('').map(function(item){
        return parseInt(item, 10)
       })
       if(Rule[0] !== 3 || Rule[1] !== 2 || Rule[2] !== 5){
        return false
       } else if(BusinessCheck.includes(NaN)){
        return false
       } else if(BusinessCheck.length === 10){
         let Arr = new Array(1, 3, 7, 1, 3, 7, 1, 3, 5);
         let checkSum = 0;
         for(let i = 0; i < Arr.length; i++){
            checkSum += Arr[i] * BusinessCheck[i];
         }
         checkSum += parseInt((Arr[8] * BusinessCheck[8] / 10, 10));
         Math.floor(BusinessCheck[9] === (10 - (checkSum % 10)))
         return true
       }
       return false 
    }

    
    async function userRegister() {
        if (!Nic.current.value || !Email.current.value || !Password.current.value || !Check.current.value) {
            window.alert('모두 입력해주세요')
        }else if (!reg_email.test(Email.current.value)) {
            return alert('이메일 형식을 지켜주세요!')
        }else if (NumberCheck(Businessnumber.current.value) == false ) {
            return alert('사업자 등록번호 형식이 아닙니다!')
        }  else if (Password.current.value !== Check.current.value) {
            return alert('비밀번호가 일치하지 않아요!')
        } else if (role == "owner" && !Businessnumber.current.value) {
            return alert("<필수> 사업자등록번호를 입력하세요")
        }else if (role == "owner" && !Businessname.current.value) {
            return alert("<필수> 상호명을 입력하세요")
        } else {
            console.log("회원가입 요청");
            try {
                // const { data } = await axios
                // .post("http://localhost:5002/user-login", userInfo);
                await instance.post("user-login", {
                    email: Email.current.value,
                    password: Password.current.value,
                    nickname: Nic.current.value,
                    Businessnumber: role == "user" ? "" : Businessnumber.current.value,
                    Businessname: role == "user" ? "" : Businessname.current.value,
                    role: role
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
                        <div 
                            onClick={close}
                            style={{display:"flex",justifyContent:"flex-end"}}
                        >
                            <span style={{fontSize:"25px", cursor: "pointer"}}><AiOutlineClose /></span>
                        </div>
                        <Header>
                            {header}
                        </Header>
                        <Body>
                            <div>
                                <input
                                    type="radio"
                                    id="사용자"
                                    name="구분"
                                    value="user"
                                    onChange={(e) => {
                                        userRole(e)
                                    }}
                                />
                                <FormCheckText htmlFor="사용자">사용자</FormCheckText>
                                <input
                                    type="radio"
                                    id="사장님"
                                    name="구분"
                                    value="owner"
                                    onChange={(e) => {
                                        userRole(e)
                                    }}
                                />
                                <FormCheckText htmlFor="사장님">사장님</FormCheckText>
                            </div>
                            <div className={role == "user" ? "user" : "owner"}>
                                <InputBox ref={Businessname} type="text" placeholder="상호명을 입력해주세요" />
                                <InputBox ref={Businessnumber} type="text" placeholder="사업자등록번호" />
                                <button
                                onClick={()=>{NumberCheck(Businessnumber.current.value)}}
                                >확인</button>
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
                        </Body>
                        <Footer>
                            <button className="close" onClick={() => { userRegister() }}>가입하기</button>
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
    margin-top: 80px; 

    font-size: 50px;
    font-weight: bold;
    color: white;
`;

const Body = styled.body`
    display: flex; 
    flex-direction: column;
    align-items: center;

    & button {
        width: 100px;
        height: 40px;
        margin-top: 15px;
        margin-left: 200px;

        border: 1px solid black;
        color: white;
        background-color: black;
    }
`;

const FormCheckText = styled.label`
    margin: 10px;
    width: 110px;
    height: 35px;
    border: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: black;
    font-size: 20px;

    &:hover{  
        color : black;
        font-weight: bold;
    }
`;

const InputBox = styled.input`
    width: 300px;
    height: 50px;
    background: transparent;
    color: white;

    font-size: 20px;

    border-left-width:0; 
    border-right-width:0; 
    border-top-width:0;
    border-bottom-width:1;
    border-bottom-color: white;

    ::placeholder {
        color: white;  
    }
`;

const Footer = styled.footer`
    display: flex;
    width:fit-content;
    margin: 0 auto;

    & button {
        color: white;
        background-color: black;
    }
`;

export default SignupModal;
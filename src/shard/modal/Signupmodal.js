import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import "./modal.css"
import { instance } from "../axios";
<<<<<<< HEAD
import {AiOutlineClose} from "react-icons/ai"
import {AiFillLock} from "react-icons/ai"

const SignupModal = (props) => {

=======
import { AiOutlineClose } from "react-icons/ai"

//Image import
import coffee1 from "../../css/coffee1.jpg";
import coffee2 from "../../css/coffee2.jpg";
import coffee3 from "../../css/coffee3.jpg";
import coffee4 from "../../css/coffee4.jpg";
import axios from "axios";


const SignupModal = (props) => {

    //Image array
    const backgroundArr = [coffee1, coffee2, coffee3, coffee4];
    const randomIndex = Math.floor(Math.random() * backgroundArr.length);
    const backgroundImg = backgroundArr[randomIndex];
    

>>>>>>> 5bdc119554c459bc37114e9e1095162f59ae81b2
    const { open, close, header } = props;

    //입력받을 값
    const Nic = useRef("")
    const Email = useRef("")
    const Password = useRef("")
    const Check = useRef("")
    const Businessname = useRef("")
    const Businessnumber = useRef("")
    const Userfile = useRef("")
    const Businessfile = useRef("")
    const [role, setRole] = useState("user")
    const reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

    const userRole = (e) => {

        setRole(e.target.value);
    }

    const NumberCheck = (e) => {
        const Rule = []
        const justNumber = e.split("-");
        const CheckRule = justNumber.map((item, i) => {
            Rule.push(item.length)
        })

        const BusinessCheck = e.replace(/-/gi, '').split('').map(function (item) {
            return parseInt(item, 10)
        })
        if (Rule[0] !== 3 || Rule[1] !== 2 || Rule[2] !== 5) {
            return false
        } else if (BusinessCheck.includes(NaN)) {
            return false
        } else if (BusinessCheck.length === 10) {
            let Arr = new Array(1, 3, 7, 1, 3, 7, 1, 3, 5);
            let checkSum = 0;
            for (let i = 0; i < Arr.length; i++) {
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
        } else if (!reg_email.test(Email.current.value)) {
            return alert('이메일 형식을 지켜주세요!')
        } else if (role == "owner" && NumberCheck(Businessnumber.current.value) == false) {
            return alert('사업자 등록번호 형식이 아닙니다!')
        } else if (Password.current.value !== Check.current.value) {
            return alert('비밀번호가 일치하지 않아요!')
        } else if (role == "owner" && !Businessnumber.current.value) {
            return alert("<필수> 사업자등록번호를 입력하세요")
        } else if (role == "owner" && !Businessname.current.value) {
            return alert("<필수> 상호명을 입력하세요")
        } else {
            console.log("회원가입 요청");
            try {
                //   console.log(Upimage[0])
                const formdata = new FormData()
                const Data = {
                    role: role,
                    email: Email.current.value,
                    password: Password.current.value,
                    nickname: Nic.current.value,
                    businessnum: role == "user" ? "" : Businessnumber.current.value,
                    businessname: role == "user" ? "" : Businessname.current.value,
                }

                console.log(Data);
                // const json =JSON.stringify(Data);
                // const blob = new Blob([json], {type : "application/json"})

                // formdata.append("data", blob);
                formdata.append("file", image);


                // formdata.append("data", JSON.stringify(Data));
                formdata.append("data", new Blob([JSON.stringify(Data)],
                 { type: "application/json" }
                 ));
                // formdata.append("file", Upimage[0]);
              

                
                // formdata.append("file", "");
                

                for (let value of formdata.values()) {
                    console.log(value);
                }
                console.log("요청이 가나요?")



                const { data } = await axios.post(
                    "http://54.180.88.20/api/user/signup", formdata, 
                    {headers: {
                        "Content-Type": "multipart/form-data"
                    }}
                )

                console.log(data, "이게 될까요")
                // console.log(data);
                // close();
            } catch (error) {
                // eslint-disable-next-line default-case
                switch (error.response.data.message) {
                    case "이메일이 중복되었습니다.":
                        alert("이메일이 중복되었습니다.");
                        break;
                    case "닉네임이 중복되었습니다.":
                        alert("닉네임이 중복되었습니다.");
                        break;
                }
            }
        }
    }


    //imageUpload
    const [Upimage, setUpimage] = useState([]);
    const [image, setImage] = useState(undefined)
    const handleAddImages = (e) => {
        const imageLists = e.target.files;
        let imageUrlLists = [...Upimage];
        setImage(e.target.files[0])
        // console.log(imageLists);

        for (let i = 0; i < imageLists.length; i++) {
            const currentImageUrl = URL.createObjectURL(imageLists[i]);
            imageUrlLists.push(currentImageUrl);
            /////
            // console.log(imageLists[i])
            // formData.append("file", imageLists[i])
        }
        if (imageUrlLists.length > 1) {
            imageLists = imageLists.slice(0, 1);
        }
        setUpimage(imageUrlLists);

    }






    //멀티 이미지 지우기
    const handleDeleteImage = (id) => {
        setUpimage(Upimage.filter((_, index) => index !== id));
    };

    return (
        <>
            <div className={open ? 'openModal modal' : 'modal'}>
                {open ? (
<<<<<<< HEAD
                    <section>
                        <div 
=======
                    <section style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                        <div
>>>>>>> 5bdc119554c459bc37114e9e1095162f59ae81b2
                            onClick={close}
                            style={{ display: "flex", justifyContent: "flex-end" }}
                        >
                            <span style={{ fontSize: "25px", cursor: "pointer" }}><AiOutlineClose /></span>
                        </div>
                        <Header>
                            {header}
                        </Header>
                        <Body>
                            <RadioGroup>
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
                            </RadioGroup>
                            <div className={role == "user" ? "user" : "owner"}>
                                <InputBox ref={Businessname} type="text" placeholder="상호명을 입력해주세요" />
                                <InputBox ref={Businessnumber} type="text" placeholder="사업자등록번호" />
                                <button
                                    onClick={() => { NumberCheck(Businessnumber.current.value) }}
                                >확인</button>
                            </div>
                            <div>
                                <InputBox ref={Nic} type="text" placeholder="닉네임" />
                            </div>
                            <div>
                                <InputBox ref={Email} type="email" placeholder="이메일" />
                            </div>
                            <div>
                                <InputBox ref={Password} type="password" placeholder="비밀번호">
                                </InputBox><LockIcon><AiFillLock/></LockIcon>
                            </div>
                            <div>
                                <InputBox ref={Check} type="password" placeholder="비밀번호 확인">
                                </InputBox><LockIcon><AiFillLock/></LockIcon>
                            </div>
                            {/* 로고/프로필 이미지 업로드 시작 */}
                            <div
<<<<<<< HEAD
                                    style={{
                                        marginTop: "20px",
                                    }}>
                                    <div className={role === "user" ? "user" : "owner"}>
                                    <span style={{ fontWeight: "bold", color: "black" }}>
                                        로고 사진 업로드
                                    </span>
                                    </div>
                                    <div className={role === "owner" ? "user" : "owner"}>
                                    <span style={{ fontWeight: "bold", color: "black" }}>
=======
                                style={{
                                    marginTop: "20px",
                                }}>
                                <div className={role === "user" ? "user" : "owner"}>
                                    <span style={{ fontWeight: "bold", color: "white" }}>
                                        로고 사진 업로드
                                    </span>
                                </div>
                                <div className={role === "owner" ? "user" : "owner"}>
                                    <span style={{ fontWeight: "bold", color: "white" }}>
>>>>>>> 5bdc119554c459bc37114e9e1095162f59ae81b2
                                        프로필 사진 업로드
                                    </span>
                                </div>
                                <div style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                }}>

                                    <label
                                        htmlFor="input-file"
                                        onChange={handleAddImages}
                                        style={{ marginTop: "15px" }}>
                                        <input
                                            type="file"
                                            id="input-file"
                                        />
                                    </label>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            flexWrap: "wrap"
                                        }}>
                                        {Upimage.map((image, i) => (
                                            <div key={i}>
                                                <img style={{ width: "100px", height: "100px" }} src={image} alt={`${image}-${i}`} onClick={() => handleDeleteImage(i)} />
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                            {/* 로고/프로필 이미지 업로드 끝 */}
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
    height: 100px;
    text-align: center;
    margin-top: 40px; 

    font-size: 30px;
    font-weight: bold;
    color: black;
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

const RadioGroup = styled.div`
    margin-bottom: 20px;
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
    width: 290px;
    height: 40px;
    background: transparent;
    color: black;
    margin-top: 10px;
    border: 2px solid #F0F4C3;

    font-size: 20px;

    ::placeholder {
        font-size: 15px;
        color: gray;  
    }
`;

const LockIcon = styled.span`
    font-size: 20px;
    margin: 0px;
    padding: -10px;
    margin-left: -20px; 
`;

const Footer = styled.footer`
    display: flex;
    width:fit-content;
    margin: 0 auto;

    & button {
        width: 200px;
        height: 50px;
        color: white;
        background-color: black;
    }
`;

export default SignupModal;
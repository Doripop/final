import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

//예시 이미지
import cat from "../../css/cafeImg/cafeImg1.jpg"
//아이콘
import { RiPencilFill } from 'react-icons/ri'
//컴포넌트
import ModifyInfo from "./ModifyInfo";
import ModifyCafe from "./ModifyCafe";
import MyReview from "./MyReview";
import { useNavigate } from "react-router-dom";

const Mypage = () => {


    // const dispatch = useDispatch()
    const navigate = useNavigate()
    const [role, setRole] = useState("")
    const [nickname, setNickname] = useState("")
    const [isLogin, setLogin] = useState("")
    React.useEffect(()=>{
        setRole(localStorage.getItem("role"));
        setNickname(localStorage.getItem("nicname"));
        if(!localStorage.getItem("token")){
            navigate("/")
        }
    },[])
    
    
    console.log(isLogin)

    const [OwnerSubMenu, setOwnerSubMenu] = useState("A");
    const [userSubMenu, setUserSubMenu] = useState("A");


    return (

        <>
            <Page>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "20px"
                    }}>
                    {role === "owner" ? (
                    <>
                        <h1>
                            오늘도 일해주세요! <br />
                            사장님!
                        </h1>
                    </>
                                            
                    ):(
                        <>
                            <h1>
                                환영합니다!
                                {nickname}님!
                            </h1>
                        </>
                    )} 
                
                    <ProfileImageBox>
                        <ImageShape src={cat} />
                        <span
                            style={{
                                display: "flex"
                            }}
                        >로고 수정하기
                            <span
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    fontSize: "18px"
                                }}
                            >
                                <RiPencilFill className="ripen"/>
                            </span>
                        </span>
                    </ProfileImageBox>
                    {role === "owner" ? (
                        <>
                            <LeftContent>
                                <button
                                    onClick={() => { setOwnerSubMenu("A") }}
                                >
                                    <strong>
                                    사장님 정보 수정
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &gt;
                                    </strong>    
                                </button>
                                <button
                                    onClick={() => { setOwnerSubMenu("B") }}
                                >
                                    <strong>
                                    카페 정보 수정
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &gt;
                                    </strong>
                                </button>
                            </LeftContent>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    padding: " 10px"
                                }}>
                                <span>Log Out</span>
                                <span>폐업하기</span>
                            </div>
                        </>

                    ) : (
                        <>
                            <LeftContent>
                                <button
                                    onClick={() => { setUserSubMenu("A") }}
                                >
                                    <strong>
                                        내 정보 수정
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &gt;
                                    </strong>    
                                </button>
                                <button
                                    onClick={() => { setUserSubMenu("B") }}
                                >
                                    <strong>
                                    내가 쓴 리뷰 몰아보기
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    &gt;
                                    </strong>    
                                </button>
                            </LeftContent>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    padding: " 10px"
                                }}>
                                <span>Log Out</span>
                            </div>
                        </>
                     )} 


                </div>
                {role === "owner" ? (
                    <>
                        
                        
                        
                        {
                            OwnerSubMenu === "A" && <ModifyInfo /> ||
                            OwnerSubMenu === "B" && <ModifyCafe />
                        }


                    </>
                ) : (
                    <>


                        {
                            userSubMenu === "A" && <ModifyInfo /> ||
                            userSubMenu === "B" && <MyReview />
                        }


                    </>
                )}

                {/* 컴포넌트 박아넣기 */}

            </Page>
        </>
    )
}

const LeftContent = styled.div`
    width: 240px;

    & button {
        :first-child {
            border-bottom :none;
        }
        width: 235px;
        height: 50px;
        font-size: 17px;
        color: black;
    
        cursor: pointer;
    
        background-color: white;
        border: 1px solid green;
        border-radius: 3px;
    
        :hover {
            background-color: #69F0AE;
            color: white;
        }
    }
`;

const Page = styled.div`
    display : flex;
    flex-direction : row;
`;

const ProfileImageBox = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    margin-bottom: 30px;

    .ripen {
        width: 20px;
        height: 20px;
        color: #000;
        margin-left: 5px;
        cursor: pointer;
    }
`;

const ImageShape = styled.img`
    width : 86px;
    height : 86px;
    border-radius : 50px;
    margin-bottom: 10px;
`;

export default Mypage;
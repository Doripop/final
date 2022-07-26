import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import '../../css/partCss/UserPage.css';

//예시 이미지
import cat from "../../css/cafeImg/cafeImg1.jpg"
//아이콘
import { RiPencilFill } from 'react-icons/ri'
//컴포넌트
import ModifyInfo from "./ModifyInfo";
import ModifyCafe from "./ModifyCafe";
import MyReview from "./MyReview";
import { useNavigate } from "react-router-dom";
import ScrollBtn from "../ScrollBtn";
import OwnerShutDown from "./OwnerShutDown";
import { LogOut } from "../../redux/modules/AllSlice";


const Mypage = () => {


    // const dispatch = useDispatch()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [role, setRole] = useState("")
    const [nickname, setNickname] = useState("")
    const [isLogin, setLogin] = useState("")
    React.useEffect(() => {
        setRole(localStorage.getItem("role"));
        setNickname(localStorage.getItem("nicname"));
        if (!localStorage.getItem("token")) {
            navigate("/")
        }
    }, [])


    console.log(isLogin)

    const [OwnerSubMenu, setOwnerSubMenu] = useState("A");
    const [userSubMenu, setUserSubMenu] = useState("A");


    return (

        <>
            <div className="pageDiv">
                <div className="changeDiv">
                    {role === "owner" ? (
                        <>
                            <h2>
                                오늘도 일해주세요! <br />
                                사장님!
                            </h2>
                        </>

                    ) : (
                        <>
                            <h2>
                                환영합니다! <br />
                                {nickname}님!
                            </h2>
                        </>
                    )}

                    <div className="profileImgBox">
                        <img className="imageShape" src={cat} />
                        <span className="imgBoxSpan">로고 수정하기
                            <span className="imgBoxSpanChild">
                                <RiPencilFill className="ripen" />
                            </span>
                        </span>
                    </div>
                    {role === "owner" ? (
                        <>
                            <div className="leftContent">
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
                            </div>
                            <div className="elimination">
                                <span
                                style={{cursor:"pointer"}}
                                onClick={()=>{
                                    dispatch(LogOut())
                                }}>Log Out</span>
                           
                                <OwnerShutDown/>
                            </div>
                        </>

                    ) : (
                        <>
                            <div className="leftContent">
                                <button
                                    onClick={() => { setUserSubMenu("A") }}
                                >
                                    <strong>
                                        내 정보 수정 &gt;
                                    </strong>
                                </button>
                                <button
                                    onClick={() => { setUserSubMenu("B") }}
                                >
                                    <strong>
                                        내가 쓴 리뷰 몰아보기 &gt;
                                    </strong>
                                </button>
                            </div>
                            <div className="elimination">
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

            </div>
            <ScrollBtn />
        </>
    )
}

export default Mypage;
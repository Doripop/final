import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import '../../css/partCss/UserPage.css';
import { LogOut } from "../../redux/modules/AllSlice";

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
import axios from "axios";
import { instance } from "../../shard/axios";



const Mypage = () => {


    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [role, setRole] = useState("")
    const [nickname, setNickname] = useState("")
   
    React.useEffect(() => {
        setRole(localStorage.getItem("role"));
        setNickname(localStorage.getItem("nicname"));
        if (!localStorage.getItem("token")) {
            navigate("/")
        }
    },[])
    
    const LogOutBtn = () => {
        dispatch(LogOut())
    }
    // console.log(isLogin)

    const [OwnerSubMenu, setOwnerSubMenu] = useState("A");
    const [userSubMenu, setUserSubMenu] = useState("A");
    // const MyprofileImg = localStorage?.getItem("profileimg")
    const [MyprofileImg, setMyprofileImg] = useState("")
    React.useEffect(()=>{
        setMyprofileImg(localStorage?.getItem("profileimg"))  
    },[localStorage?.getItem("profileimg")])
    const [unclick, setUnclick] = useState("none")
    const [click, setClick] = useState("flex")
    const clickevent = () => {
        setClick("none")
        setUnclick("flex")
    }
    const unclickevent = () => {
        setClick("flex")
        setUnclick("none")
    }
    
   
    const ImgUpload = async (e) =>{
        const formData = new FormData();
        try{
            if(!e.target.files[0]){
                formData.append("file", localStorage.getItem("profileimg"))
            }else{
                formData.append("file", e.target.files[0])
            }
           if(role==="user"){
            const {data} = await instance.patch("api/user/profile", formData,{headers: {
                "Content-Type": "multipart/form-data"
            }})
            localStorage.setItem("profileimg", data.data)
            setMyprofileImg(data.data)
           }else if(role === "owner"){
            const {data} = await instance.patch("api/owner/logo", formData,{headers: {
                "Content-Type": "multipart/form-data"
            }})
            localStorage.setItem("profileimg", data.data)
            setMyprofileImg(data.data)
           }else{
            alert("유효하지 않은 요청입니다.")
           }
            
        }catch(error){
            console.log(error)
        }
    }

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
                        {role === "owner" ? (
                        <>
                            <img className="imageShape" src={MyprofileImg} />
                            <span className="imgBoxSpan">로고 수정하기
                                <span className="imgBoxSpanChild">
                                    <RiPencilFill className="ripen" style={{ display: click }} onClick={() => { clickevent() }}/>
                                    <label for="input-file" className="input-file-button">
                                        <RiPencilFill className="ripen" style={{ display: unclick }} onClick={() => { unclickevent() }}/>
                                    </label>
                                    <input 
                                    onChange={(e)=>{
                                        ImgUpload(e)
                                    }} 
                                    type="file" id="input-file" style={{ display: "none" }}/>
                                </span>
                            </span>
                        </>
                        ): (
                        <>
                            <img className="imageShape" src={MyprofileImg} />
                            <span className="imgBoxSpan">프로필 수정하기
                                <span className="imgBoxSpanChild">
                                    <RiPencilFill className="ripen" style={{ display: click }} onClick={() => { clickevent() }}/>
                                    <label for="input-file" className="input-file-button">
                                        <RiPencilFill className="ripen" style={{ display: unclick }} onClick={() => { unclickevent() }}/>
                                    </label>
                                    <input
                                    onChange={(e)=>{
                                        ImgUpload(e)
                                    }} 
                                    type="file" 
                                    id="input-file" 
                                    style={{ display: "none" }}
                                    />
                                </span>
                            </span>
                        </>
                        )}
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
                                <span onClick = {()=>{LogOutBtn();}}>Log Out</span>
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
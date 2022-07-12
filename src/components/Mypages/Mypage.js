import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

//예시 이미지
import cat from "../../css/coffee2.jpg"
//아이콘
import { RiPencilFill } from 'react-icons/ri'
//컴포넌트
import ModifyInfo from "./ModifyInfo";
import ModifyCafe from "./ModifyCafe";
import MyReview from "./MyReview";

const Mypage = () => {


    // const dispatch = useDispatch()
    // React.useEffect(()=>{
    // ---> 유저 정보 role 요청하는거 api
    // },[])


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
                    {/* {role === owner ? ( */}
                    <>
                        <h1>
                            오늘도 일해주세요! <br />
                            사장님!
                        </h1>
                    </>
                    {/*                         
                    ):(
                        <>
                            <h1>
                                환영합니다!
                                000님!
                            </h1>
                        </>
                    )} 
                    */}
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
                                <RiPencilFill />
                            </span>
                        </span>
                    </ProfileImageBox>
                    {/* {role === "owner" ? (
                        <> */}
                            <LeftContent>
                                <button
                                    onClick={() => { setOwnerSubMenu("A") }}
                                >사장님 정보 수정</button>
                                <button
                                    onClick={() => { setOwnerSubMenu("B") }}
                                >카페 정보 수정</button>
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
                        {/* </>

                    ) : ( */}
                        <>
                            <LeftContent>
                                <button
                                    onClick={() => { setUserSubMenu("A") }}
                                >내 정보 수정</button>
                                <button
                                    onClick={() => { setUserSubMenu("B") }}
                                >내가 쓴 리뷰 몰아보기</button>
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
                    {/* )} */}


                </div>
                {/* {role === "owner": ? (
                    <> */}
                        
                        
                        
                        {
                            OwnerSubMenu === "A" && <ModifyInfo /> ||
                            OwnerSubMenu === "B" && <ModifyCafe />
                        }


                    {/* </>
                ) : (
                    <> */}


                        {
                            userSubMenu === "A" && <ModifyInfo /> ||
                            userSubMenu === "B" && <MyReview />
                        }


                    {/* </>
                )} */}

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
        background-color :transparent;
        border : 1px solid black;
        border-radius : 3px;
        width: 240px;
        height: 40px;
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
`;

const ImageShape = styled.img`
    width : 86px;
    height : 86px;
    border-radius : 50px;
`;

export default Mypage;
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { InfoLoad, userInfoLoad } from "../redux/modules/adminSlice";

import ScrollBtn from "./ScrollBtn";

// 페이지네이션
import Success from "./AdminPages/Success";
import Reject from "./AdminPages/Reject";
import AllList from "./AdminPages/AllList";
import RealAllCafe from "./AdminPages/RealAllCafe";

import {BsCheckSquare} from "react-icons/bs";
import {BsCheckSquareFill} from "react-icons/bs";

const Admin = () => {

    const [subMenu, setSubMenu] = useState("A")

    const dispatch = useDispatch()

    return (
        <Container>
            <LeftContent>
                <h2>
                    오늘도 일해주세요!<br />
                    관리자님!
                </h2>
                <AdminBtn
                onClick={()=>{
                    setSubMenu("A")
                }}
                >
                    전체 신청 리스트 37개 &gt;
                </AdminBtn>
                <AdminBtn
                onClick={()=>{
                    setSubMenu("B")
                }}
                >
                   <BsCheckSquare size="15" color="green"/>승인된 목록 &gt;
                </AdminBtn>
                <AdminBtn
                onClick={()=>{
                    setSubMenu("C")
                }}
                >
                    <BsCheckSquareFill size="15" color="green"/>최종 거절 카페 37개 &gt;
                </AdminBtn>
                <AdminBtn
                onClick={()=>{
                    setSubMenu("D")
                }}
                >
                   모든 등록된 카페 37개 &gt;
                </AdminBtn>
            </LeftContent>
            <ReightContent>
                {
                    subMenu === "A" && <h3>미처리</h3> ||
                    subMenu === "B" && <h3>승인된 목록</h3> ||
                    subMenu === "C" && <h3>거절 목록</h3> ||
                    subMenu === "D" && <h3>모든 등록된 카페</h3>

                }
                <hr />
                <List>
                    {
                        subMenu === "A" && <AllList /> ||
                        subMenu === "B" && <Success /> ||
                        subMenu === "C" && <Reject /> ||
                        subMenu === "D" && <RealAllCafe />

                    }

                    {/* {list?.map((item, i) => (
                        <Card
                        key={i}>
                            asdasdasd
                            <h3>{item.cafename}</h3>
                            <p>
                                {item.address} <br />
                                {item.addressdetail}<br />
                                {item.zonenum}
                            </p>
                            <button>승인</button>
                            <button>거절</button>
                        </Card>
                    ))} */}
                </List>
            </ReightContent>
            <ScrollBtn/>
        </Container>
    );
}
const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
    margin-top: 30px;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
`;

const LeftContent = styled.div`
    width: 240px;
    height: 100px;

    & button {
        width: 240px;
        height: 40px;
    }
`;
const ReightContent = styled.div`
    width: 700px;
`;

const List = styled.div`
    display: flex;
    margin-top: 30px;
    align-items: center;
`;

const Card = styled.div`
    width: 200px;
    height: 170px;
    border: 2px solid black;
    margin-right: 30px;

    & button {
        margin: 0 auto 0 auto;
        cursor: pointer;
        background-color: transparent;
        border-radius: 50px;
    }
`;

const AdminBtn = styled.button`
    width: 235px;
    height: 100px;
    font-size: 13px;
    padding: 5px;
    margin-bottom: 5px;
    color: black;

    cursor: pointer;

    background-color: white;
    border: 1px solid green;

    :hover {
        background-color: #69F0AE;
    }
`;

export default Admin;
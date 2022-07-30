import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AllRegCafe, CafeApplyList, CafeRejectList, InfoLoad, SuccessApplyList, userInfoLoad } from "../redux/modules/adminSlice";

import ScrollBtn from "./ScrollBtn";
import '../css/partCss/Admin.css';

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

    //갯수 불러오기 
    React.useEffect(()=>{
        dispatch(CafeApplyList())
        dispatch(AllRegCafe())
        dispatch((CafeRejectList()))
        dispatch(SuccessApplyList())
    },[])

    const list = useSelector((state) => state.adminSlice.CafeInfo);
    const list1 = useSelector((state) => state.adminSlice.SuccessInfo);
    const list2 = useSelector((state) => state.adminSlice.RejectInfo);
    const list3 = useSelector((state) => state.adminSlice.RealInfo);
    


    return (
        <div className="conDiv">
            <div className="leftConDiv">
                <h2>
                    오늘도 일해주세요!<br/>
                    관리자님!
                </h2>
                <button
                onClick={()=>{
                    setSubMenu("A")
                }}
                >
                    전체 신청 리스트 {list?.length}개 &gt;
                </button>
                <button
                onClick={()=>{
                    setSubMenu("B")
                }}
                >
                   <BsCheckSquare size="15" color="green"/>승인된 목록 {list1?.length}개&gt;
                </button>
                <button
                onClick={()=>{
                    setSubMenu("C")
                }}
                >
                    <BsCheckSquareFill size="15" color="green"/>최종 거절 카페 {list2?.length}개 &gt;
                </button>
                <button
                onClick={()=>{
                    setSubMenu("D")
                }}
                >
                   모든 등록된 카페 {list3?.length}개 &gt;
                </button>
            </div>
            <div className="rightConDiv">
                {
                    subMenu === "A" && <h3>미처리</h3> ||
                    subMenu === "B" && <h3>승인된 목록</h3> ||
                    subMenu === "C" && <h3>거절 목록</h3> ||
                    subMenu === "D" && <h3>모든 등록된 카페</h3>

                }
                <hr />
                <div className="listDiv">
                    {
                        subMenu === "A" && <AllList /> ||
                        subMenu === "B" && <Success /> ||
                        subMenu === "C" && <Reject /> ||
                        subMenu === "D" && <RealAllCafe />

                    }
                </div>
            </div>
            {/* <ScrollBtn/> */}
        </div>
    );
}

export default Admin;
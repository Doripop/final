import React, { useState } from "react";
import styled from "styled-components";
import DetailHome from "./DetailPages/DetailHome";
import DetailMenu from "./DetailPages/DetailMenu";
import DetailReview from "./DetailPages/DetailReview";
import ScrollBtn from "./ScrollBtn";
import ReviewBtn from "./ReviewBtn";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { DetailCafeBanner } from "../redux/modules/AllSlice";
import DetailBanner from "./DetailPages/DetailBenner";

const Detail = () => {

    const parm = useParams();
    const dispatch = useDispatch();
    //parm에 카페아이디 주세요]
    React.useEffect(()=>{
        dispatch(DetailCafeBanner(parm.id))
    },[dispatch, parm.id])

    const list = useSelector((state) => state.AllSlice.DetailCafeBanner);
    console.log(list?.data.imageList)
    console.log(parm["*"])
    const [Menu, setMenu] = useState(parm["*"]==="review"?"C":"A")

    return (
        <>
            <DetailBanner image = {list?.data.imageList} />
            <Container>
                <div>
                    <CategoryBox
                    onClick={()=>{setMenu("A")}}>
                    홈
                    </CategoryBox>
                    <CategoryBox
                    onClick={()=>{setMenu("B")}}>
                    메뉴
                    </CategoryBox>
                    <CategoryBox
                    onClick={()=>{setMenu("C")}}>
                    리뷰
                    </CategoryBox>
                </div>
            </Container>
            <div>
                {
                Menu === "A" && <DetailHome cafeid = {parm} /> ||
                Menu === "B" && <DetailMenu cafeid = {parm} /> ||
                Menu === "C" && <DetailReview cafeid = {parm} />
            }
            </div>
            <ReviewBtn/>
            <ScrollBtn/>
        </>
    );
}
const Container = styled.div`
    width: 1000px;
    height: 100%;

    margin: 0px auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    position: relative;
    border-bottom: solid 1px black;
    
    & button {
        width: 200px;
        font-size: 30px;
        margin-right: 40px;
        font-family: 'Arita-dotum-Medium';
    }
`;

const CategoryBox = styled.button`
    border: none;
    font-weight: bold;
    background-color: transparent;
    cursor: pointer;
    color: gray;
    
    &: hover {
        color: black;
    }
`;

export default Detail;
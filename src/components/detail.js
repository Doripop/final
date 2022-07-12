import React, { useState } from "react";
import styled from "styled-components";
import Banner from "./Banner";
import DetailHome from "./DetailPages/DetailHome";
import DetailMenu from "./DetailPages/DetailMenu";
import DetailReview from "./DetailPages/DetailReview";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { DetailCafeBanner } from "../redux/modules/AllSlice";

const Detail = () => {


    const parm = useParams();
    const dispatch = useDispatch();
    //parm에 카페아이디 주세요]
    React.useEffect(()=>{
        dispatch(DetailCafeBanner(parm.id))
    },[dispatch, parm.id])

    const list = useSelector((state) => state.AllSlice.DetailCafeBanner);
    

    const [Menu, setMenu] = useState("A")

    return (
        <>
            <Banner />
            <Container>
                <div>
                    <button
                    onClick={()=>{setMenu("A")}}
                    >홈</button>
                    <button
                    onClick={()=>{setMenu("B")}}
                    >메뉴</button>
                    <button
                    onClick={()=>{setMenu("C")}}
                    >리뷰</button>
                </div>
            </Container>
            <div>
                {
                Menu === "A" && <DetailHome cafeid = {parm} /> ||
                Menu === "B" && <DetailMenu cafeid = {parm} /> ||
                Menu === "C" && <DetailReview cafeid = {parm} />
            }
            </div>
            
  
        </>
    );
}
const Container = styled.div`
    width: 1200px;
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
    }
`;

export default Detail;
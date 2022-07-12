import React from "react";
import styled from "styled-components";

import {useDispatch, useSelector} from "react-redux"
import { DetailCafePost } from "../../redux/modules/AllSlice";


const DetailReview = (props) => {

    const dispatch = useDispatch()
    const {cafeid} = props
    console.log(cafeid.id)
    React.useEffect(()=>{
        //리뷰 정보 받아오기
        dispatch(DetailCafePost(cafeid.id))
    },[dispatch])
    const list = useSelector((state) => state.AllSlice.DetailCafePostList);
    
    return (
        <>
            <Alignment>
                <button>별점순</button>
                <button>좋아요순</button>
            </Alignment>
            <Review>리뷰페이지</Review>




            {/* 댓글 처리 */}
        </>
    );

}

const Alignment = styled.div`
    width: 1160px;
    height: 100%;

    margin: 0px auto;
    padding: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

const Review = styled.div`
    width: 500px;
    height: 800px;

    margin: 30px auto 0px auto;

    border: 1px solid black;

    display: flex;
    justify-content: center;
`;

export default DetailReview;
import React from "react";
import styled from "styled-components";

import { FaComment } from "react-icons/fa";

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
        <ReviewContent>
            <Alignment>
                <AlignBtn>별점순</AlignBtn>
                <AlignBtn>좋아요순</AlignBtn>
            </Alignment>
            <Review>
                <ReviewHeader>😁nickname</ReviewHeader>
                <ReviewImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpr15n9yoaNwz_A5FUBcavnmA6FjsqUFifGA&usqp=CAU"/>
                <ReviewStarLove>⭐별점 4점 🤍좋아요 3개</ReviewStarLove>
                <ReviewUserInfo>nickname</ReviewUserInfo>
                <ReviewTag>#사진맛집 #커피맛집 #뷰맛집</ReviewTag>
                <ReviewContext>커피 향에 반해버렸다...더보기</ReviewContext>
                <ReviewCommentGroup>댓글 10개 모두 보기</ReviewCommentGroup>
                <ReviewDate>1일전</ReviewDate>
                <ReviewComment>
                    <input type="text" placeholder="댓글작성"></input>
                </ReviewComment>
            </Review>

            {/* <Review>
                <ReviewHeader>😁nickname</ReviewHeader>
                <ReviewImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpr15n9yoaNwz_A5FUBcavnmA6FjsqUFifGA&usqp=CAU"/>
                <ReviewStarLove>⭐별점 4점 🤍좋아요 3개</ReviewStarLove>
                <ReviewUserInfo>nickname</ReviewUserInfo>
                <ReviewTag>#사진맛집 #커피맛집 #뷰맛집</ReviewTag>
                <ReviewContext>커피 향에 반해버렸다...더보기</ReviewContext>
                <ReviewCommentGroup>댓글 10개 모두 보기</ReviewCommentGroup>
                <ReviewDate>1일전</ReviewDate>
                <ReviewComment>
                    <input type="text" placeholder="댓글작성"></input>
                </ReviewComment>
            </Review> */}
            {/* 댓글 처리 */}
        </ReviewContent>
    );

}

const ReviewContent = styled.div`
    width: 1000px;
    height: 100%;
    margin: 0px auto;
`;

const Alignment = styled.div`
    width: 1000px;
    height: 100%;
    
    margin: 0px auto;
    padding: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

const AlignBtn = styled.button`
    width: 100px;
    height: 40px;
    font-size: 20px;
    padding: 10px;
    margin-right: 30px;
    border: none;
    background-color: transparent;

    &:hover {
        cursor: pointer;
        font-weight: bold;
        border-bottom: 1px solid black;
    }
`;

const Review = styled.div`
    width: 500px;
    height: 809px;

    margin: 30px auto 0px auto;

    border: 1px solid black;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ReviewHeader = styled.div`
    width: 500px;
    height: 60px;
    font-size: 30px;
    font-weight: bold;
    // text-align: justify;
    line-height: 1.7;
`;

const ReviewImg = styled.img`
    width: 500px;
    height: 500px;
`;

const ReviewStarLove = styled.div`
    width: 500px;
    height: 20px;
    margin-left: 20px;
`;

const ReviewUserInfo = styled.div`
    width: 500px;
    height: 20px;
    margin-left: 20px;
`;

const ReviewTag = styled.div`
    width: 500px;
    height: 20px;
    margin-left: 20px;
`;

const ReviewContext = styled.div`
    width: 500px;
    height: 50px;
    margin-left: 20px;
    line-height: 3;
`;

const ReviewCommentGroup = styled.div`
    width: 500px;
    height: 30px;
    margin-left: 20px;
    line-height: 2;
    color: gray;
`;

const ReviewDate = styled.div`
    width: 500px;
    height: 30px;
    line-height: 2;
    margin-left: 20px;
    color: gray;
`;

const ReviewComment = styled.div`
    width: 500px;
    height: 90px;

    line-height: 5.5;

    input {
        width: 470px;
        height: 30px;
        margin-top: 12px;
        margin-left: 10px;
        background-repeat: no-repeat;
        border: 1px solid #ccc;
        padding: 5px 5px;

        ::placeholder {
            background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuxyawNNOaJGwlR1wUq1PSSeLw3YwLj0S1vA&usqp=CAU) ;
            background-size: contain;
            background-position:  1px center;
            background-repeat: no-repeat;
            text-align: center;
            text-indent: 0;
        }
        
    }
`;


export default DetailReview;
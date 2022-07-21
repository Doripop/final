import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MyReviewLoad } from "../../redux/modules/AllSlice";
import { ReviewCreate, ReviewLoad, ReviewModify, ReviewDelete } from "../../redux/modules/Review";
import styled from "styled-components";


const MyReview = () => {
    const dispatch = useDispatch()
    const Reviewlist = useSelector((state) => state.AllSlice.MyReview);
    const ReviewUpdate = useSelector((state) => state.Review.MyReviewModify)
    console.log(ReviewUpdate, "왜 안나오냐..........여기까진가봅니다....")
    // console.log(Reviewlist)

    React.useEffect(() => {
        dispatch(MyReviewLoad())
    }, [])
    return (
        <>
            {Reviewlist?.map((item, i) => (
                <ConDiv>
                    리뷰개수 : {item.commentCnt}<br/>
                    내 리뷰 :<br/> {item.commentList.map((t,i)=>{
                        <>
                            <span>{t.contents}</span>
                            <span>{t.nickname}</span>
                            <span>{t.profileimg}</span>
                        </>
                        
                    })}
                    {item.hashtagList.map((t,i)=>(
                        <>
                            {t.hashtag} <br/>
                        </>
                    ))}
                    <image src = {item.image[0].img}></image><br/>
                    좋아요 :{item.likecnt} <br/>
                    {item.modifiedAt} <br/>
                    {item.nickname} <br/>
                    별점: {item.star} <br/>
                    <button onClick={()=>{}}>수정</button>
                    <button onClick={()=>{}}>삭제</button>
                </ConDiv>
            ))}

        </>
    )
}

const ConDiv = styled.div`
    margin: 0 auto;
`;

export default MyReview;
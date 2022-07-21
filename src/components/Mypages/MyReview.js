import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MyReviewLoad } from "../../redux/modules/AllSlice";
import { ReviewCreate, ReviewLoad, ReviewModify, ReviewDelete } from "../../redux/modules/Review";
import styled from "styled-components";


const MyReview = () => {
    const dispatch = useDispatch()
    const Reviewlist = useSelector((state) => state.AllSlice.MyReview);
    const ReviewUpdate = useSelector((state) => state.Review.MyReviewModify)
    console.log(ReviewUpdate, "왜 안나오냐..........")
    // console.log(Reviewlist)

    React.useEffect(() => {
        dispatch(MyReviewLoad())
    }, [])
    return (
        <>
            {Reviewlist?.map((item, i) => (
                <ConDiv>
                    리뷰 갯수 : {item.commentCnt}
                    내 리뷰 : {item.commentList.map((t,i)=>{
                        <>
                            <span>게시글 : {t.contents}</span>
                            <span>{t.nickname}</span>
                            <span>{t.profileimg}</span>
                        </>
                        
                    })}
                    {item.hashtagList.map((t,i)=>(
                        <>
                            {t.hashtag} <br/>
                        </>
                    ))}
                    <image src = {item.image[0].img}></image>
                    {item.likecnt} <br/>
                    {item.modifiedAt} <br/>
                    {item.nickname} <br/>
                    별점: {item.star}<button>수정</button>
                </ConDiv>
            ))}

        </>
    )
}

const ConDiv = styled.div`

`;

export default MyReview;
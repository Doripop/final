import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MyReviewLoad } from "../../redux/modules/AllSlice";


const MyReview = () => {
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(MyReviewLoad())
    }, [])
    const Reviewlist = useSelector((state) => state.AllSlice.MyReview);
    console.log(Reviewlist)
    return (
        <>
            {Reviewlist?.map((item, i) => (
                <div>
                    리뷰 갯수 : {item.commentCnt}
                    내 리뷰 : {item.commentList.map((t,i)=>{
                        <>
                            <span>{t.contents}</span>
                            <span>{t.nickname}</span>
                            <span>{t.profileimg}</span>
                        </>
                        
                    })}
                    {item.hashtagList.map((t,i)=>(
                        <>
                            {t.hashtag}
                        </>
                    ))}
                    <image src = {item.image[0].img}></image>
                    {item.likecnt}
                    {item.modifiedAt}
                    {item.nickname}
                    {item.star}
                </div>
            ))}

        </>
    )
}



export default MyReview;
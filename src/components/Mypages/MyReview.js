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
                    {item.commentCnt}
                    {item.commentList}
                    <image src = {item.image}></image>
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
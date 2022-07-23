import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteMyComment, DeletePost, LikeCountAdd, LikeCountMinus, ModifyMyCommnet } from "../../redux/modules/AllSlice";
import '../../css/partCss/UserReview.css';
import { useParams } from "react-router-dom";
import { instance } from "../../shard/axios";
import { MyCreateComment, MyLikeCountAdd, MyLikeCountMinus, MyLikeInfoLoad, MyLikeListInfo, MypageModifyMyCommnet, MyReviewLoad, MyUnLikeListInfo, MypageDeleteMyComment} from "../../redux/modules/MypageSlice";

const MyReview = () => {
    const dispatch = useDispatch()
    const [comment, setComment] = useState("")
    const parm = useParams();
    const [userName, setUsername] = useState("")
    const [isLogin, setIsLogin] = useState("")
    const [Like, setLike] = useState([])
    const [unclick, setUnclick] = useState("none")
    const [click, setClick] = useState("flex")


    const Reviewlist = useSelector((state) => state.MypageSlice.MyReview);
    console.log(Reviewlist)
    const MyLikeList = useSelector((state) => state.MypageSlice.MyLikeInfo);
    console.log(MyLikeList,"좋아요 뤼스")

    const clickevent = () => {
        setClick("none")
        setUnclick("flex")
    }
    const unclickevent = () => {
        setClick("flex")
        setUnclick("none")
    }



    React.useEffect(() => {
        dispatch(MyReviewLoad())
        setUsername(localStorage.getItem("nicname"))
        setIsLogin(localStorage.getItem("token")) 
        dispatch(MyLikeInfoLoad())
        setLike(MyLikeList)
    }, [dispatch])



    const keyPress = (e, id) => {
        if (e.key === "Enter") {
            dispatch(
                MyCreateComment({
                contents: comment,
                postid: id,
                nickname: localStorage.getItem("nicname"),
                profileimg: localStorage.getItem("profileimg")
            }))
        }
    }
    
     // 댓글 수정
     const [ChangeReview, setChangeReview] = useState("")
     const ModifyComment = (e) => {
         setChangeReview(e.target.value)
     }
     const SendModify = (commentid, postid, contents) => {
        const Index = Reviewlist.findIndex((item)=>{
            return item.postid === postid
        })
        const commentIndex = Reviewlist[Index].commentList.findIndex((item)=>{
            return item.commentid === commentid
        })
         dispatch(MypageModifyMyCommnet({
             commentid: commentid,
             contents: contents == "" ? Reviewlist[Index].commentList[commentIndex].contents : contents,
             nickname: localStorage.getItem("nicname"),
             profileimg: localStorage.getItem("profileimg"),
             postid: postid,
         }))
     }
    //댓글 삭제
    const SendDelete = (commentid, postid) => {
        // console.log(commentid)
        dispatch(MypageDeleteMyComment({
            commentid: commentid,
            postid: postid
        }))
    }
    //좋아요 기능

    const LikeClick = async (postid) => {
        console.log(postid)

        if (!isLogin) {
            return window.alert("로그인 후 이용해주세요!")
        } else if (MyLikeList[postid.i]?.postid === postid.postid &&
            MyLikeList[postid.i]?.like === false) {
            console.log("실행")
            const { data } = await instance.post(`api/${postid.postid}/like`)
            dispatch(MyLikeListInfo({
                postid: postid.postid,
                like: data.result
            }))
         
            //test
            dispatch(MyLikeCountAdd({
                postid: postid.postid
            }))
            //test
        } else if (MyLikeList[postid.i]?.postid === postid.postid &&
            MyLikeList[postid.i]?.like === true) {
            const { data } = await instance.post(`api/${postid.postid}/like`)
            dispatch(MyUnLikeListInfo({
                postid: postid.postid,
                like: data.result
            }))
            //test
            dispatch(MyLikeCountMinus({
                postid: postid.postid
            }))
            //test
        } else {
            window.alert("유효하지 않은 요청입니다.")
        }
    }

    
    return (
        <>
            <div className="conReviewDiv">
                {Reviewlist?.map((item, i) => (
                    <>
                        <div className="reviewDiv">
                            <div className="oneDiv">
                                <div className="reviewDivHeader">{item.nickname}</div>
                                {userName === item.nickname ?
                                    (<span
                                        onClick={() => {
                                            dispatch(DeletePost(item.postid))
                                        }}
                                    >삭제</span>) : (null)}
                            </div>
                            <img className="reviewImg" src={item.image[0].img} />
                            <div className="reviewDivStarLove">⭐별점 {item.star}점

                                <span
                                    onClick={() => {
                                        LikeClick({
                                            postid: item.postid,
                                            i: i
                                        })
                                    }}
                                >
                                    {
                                    MyLikeList[i]?.postid === item.postid &&
                                    MyLikeList[i]?.like ?
                                    (<span
                                        style={{ color: "red", cursor: "pointer"}}
                                    >❤</span>)
                                    : (<span style={{cursor: "pointer"}}>🤍</span>)
                                    }
                                    </span>

                                좋아요 {item.likecnt}개</div>
                            <div className="reviewUserInfo">
                                {item.nickname}
                            </div>
                            {item.hashtagList.map((t, i) => (<div className="reviewTag">{t.hashtag}</div>))}
                            <div className="reviewContextDiv">{item.contents}</div>
                            <div className="reviewCommentGrp">
                            <details>
                            <summary>댓글 모두 보기</summary>
                            <div className="reviewComUp">
                                {item.commentList.map((comment, i) => (
                                    <>
                                        <div>
                                            {userName === comment.nickname ? (
                                                <span style={{ display: "flex" }}>
                                                    <img className="reviewProfile" src={comment.profileimg} />
                                                    {comment.nickname} : {comment.contents} 
                                                    <button className="reviewUpDeleteBtn" style={{ display: click }} onClick={() => { clickevent() }}>🖊</button>
                                                    <input
                                                        onChange={(e) => {
                                                            ModifyComment(e)
                                                        }}
                                                        type="text"
                                                        placeholder={
                                                            comment.contents
                                                        }
                                                        style={{
                                                            display: unclick
                                                        }}
                                                    />
                                                    <button className="reviewUpDeleteBtn"
                                                        style={{
                                                            display: unclick
                                                        }}
                                                        onClick={() => {
                                                            unclickevent();
                                                            SendModify(
                                                                comment.commentid,
                                                                item.postid,
                                                                ChangeReview)
                                                        }}>🖊</button>
                                                    <button className="reviewUpDeleteBtn"
                                                        onClick={() => {
                                                            SendDelete(
                                                                comment.commentid,
                                                                item.postid
                                                            )
                                                        }}
                                                    >⨉</button>
                                                </span>) : (
                                                <span style={{ display: "flex" }}><img className="reviewProfile" src={comment.profileimg} />{item.nickname} : {comment.contents}{comment.modifiedAt}
                                                </span>

                                            )
                                            }

                                        </div>
                                    </>
                                ))}
                            </div>
                            </details>
                            </div>
                            <div className="reviewDate">
                                {item.modifiedAt}
                            </div>
                            <div className="reviewComment">
                                <input
                                    type="text"
                                    onChange={(e) => {
                                        setComment(e.target.value)
                                    }}
                                    placeholder="댓글작성"
                                    onKeyPress={(e) => {
                                        keyPress(e, item.postid)
                                    }}
                                />
                            </div>
                        </div>
                    </>
                ))}

            </div>
        </>
    )
}

export default MyReview;
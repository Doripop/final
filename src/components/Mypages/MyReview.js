import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteMyComment, DeletePost, LikeCountAdd, LikeCountMinus, ModifyMyCommnet } from "../../redux/modules/AllSlice";
import styled from "styled-components";
import '../../css/partCss/UserReview.css';
import { useParams } from "react-router-dom";
import { instance } from "../../shard/axios";
import { MyCreateComment, MyLikeCountAdd, MyLikeCountMinus, MyLikeInfoLoad, MyLikeListInfo, MypageModifyMyCommnet, MyReviewLoad, MyUnLikeListInfo, MypageDeleteMyComment, MypageDeletePost } from "../../redux/modules/MypageSlice";

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
    console.log(MyLikeList, "좋아요 뤼스")

    const AllLikeList = useSelector((state) => state.Likes.LikeInfo);
    const review = useSelector((state) => state.AllSlice.DetailCafePostList);

    const clickevent = () => {
        setClick("none")
        setUnclick("flex")
    }
    const unclickevent = () => {
        setClick("flex")
        setUnclick("none")
    }

    const LikeIndex = review?.map((item,i)=>{
        return AllLikeList?.findIndex((list,k)=>{
           return item.postid === list.postid
        })
        
    })

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
        const Index = Reviewlist.findIndex((item) => {
            return item.postid === postid
        })
        const commentIndex = Reviewlist[Index].commentList.findIndex((item) => {
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
                        <Review key={item.postid}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row"
                            }}>
                            <ReviewHeader>
                                <ReviewProfile src={item.profileimg}/>
                                &nbsp;{item.nickname}
                                
                            </ReviewHeader>
                            {userName === item.nickname ?
                                (
                                    <ReviewDrop>
                                        <ul className="dep1">
                                            <li>
                                                ⋯
                                                <ul className="dep2">
                                                    <li
                                                        onClick={() => {
                                                            dispatch(DeletePost(item.postid))
                                                        }}
                                                    >
                                                    삭제하기
                                                    </li>
                                                    <li
                                                        onClick={() => {
                                                            dispatch(DeletePost({
                                                                postid: item.postid,
                                                                // 인풋 값 받아서 수정
                                                            }))
                                                        }}
                                                        >수정하기
                                                    </li>
                                                </ul>
                                            </li>        
                                        </ul>
                                    </ReviewDrop>

                                ) : (null)}
                        </div>
                        <ReviewImg src={item.image[0].img} />
                        <ReviewStarLove>★ 별점 {item.star}점&nbsp;

                            {/* <span
                                onClick={() => {
                                    LikeClick({
                                        postid: review[i]?.postid,
                                        i: i,
                                    })
                                }}
                            >{AllLikeList[LikeIndex[i]]?.postid === review[i]?.postid &&
                                AllLikeList[LikeIndex[i]]?.like ?
                                (<span
                                    style={{ color: "red" }}
                                > ❤ </span>)
                                : (<span> 🤍 </span>)
                                }</span> */}

                             좋아요 {item.likecnt}개</ReviewStarLove>
                        <ReviewUserInfo>{item.nickname}</ReviewUserInfo>
                        <Tag>
                        {item.hashtagList.map((t, i) => (<ReviewTag>{t.hashtag}</ReviewTag>))}
                        </Tag>
                        <ReviewContext>
                            {item.contents}
                        </ReviewContext>
                        <ReviewCommentGroup>
                        {comment != item.commentList ? (
                            <details>
                                <summary>댓글 {item.commentCnt}개 모두 보기</summary>
                                <ReviewDate>
                                    {item.modifiedAt}
                                </ReviewDate>
                                <ReviewComUp>
                                    {item.commentList.map((comment, i) => (
                                        <>
                                            <div>
                                                {userName === comment.nickname ? (
                                                    <span style={{ display: "flex" }}>
                                                        <ReviewProfile src={comment.profileimg} />
                                                        {comment.nickname}{comment.contents}
                                                        <Btn style={{ display: click }} onClick={() => { clickevent() }}>🖊</Btn>
                                                        <input
                                                            onChange={(e) => {
                                                                ModifyComment(e)
                                                            }}
                                                            type="text"
                                                            style={{ display: unclick }}
                                                        />
                                                        <Btn style={{ display: unclick }}
                                                            onClick={() => {
                                                                unclickevent();
                                                                // changeCom();
                                                                SendModify(
                                                                    comment.commentid,
                                                                    item.postid,
                                                                    ChangeReview)
                                                            }}>🖊</Btn>
                                                        <Btn
                                                            onClick={() => {
                                                                SendDelete(
                                                                    comment.commentid,
                                                                    item.postid
                                                                )
                                                            }}
                                                        >⨉</Btn>
                                                    </span>) : (
                                                    <span style={{ display: "flex" }}><ReviewProfile src={comment.profileimg} />{comment.nickname} : {comment.contents}{comment.modifiedAt}
                                                    </span>

                                                )
                                                }
                                            </div>
                                        </>
                                    ))}
                                </ReviewComUp>
                               
                            </details>
                        ):(<summary></summary>)}
                        </ReviewCommentGroup>
                         <ReviewComment>
                            <input
                                type="text"
                                onChange={(e) => {
                                    setComment(e.target.value)
                                }}
                                placeholder="댓글달기"
                                onKeyPress={(e) => { keyPress(e, item.postid); }}
                            />
                        </ReviewComment>
                    </Review>
                    </>
                ))}

            </div>
        </>
    )
}

const Review = styled.div`
    width: 500px;
    margin: 12% auto 0px auto;

    border: 1px solid #D9D9D9;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ReviewHeader = styled.div`
    position: relative;
    font-size: 30px;
    font-weight: bold;
    margin-left: -240px;

    &span {
        
    }
`;

const ReviewDrop = styled.div`
    // margin: 0 auto;
    // padding: 0 auto;
    position: relative;
    & ul, li {
        list-style: none;
    }

    .dep2>li {
        width: 100px;
        height: 20px;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
    }

    .dep1>li {
        display: block;
        cursor: pointer;
    }

    .dep1>li:hover> .dep2 {
        display: block;
    }

    .dep2 {
        display: none;
    }
`;

const ReviewImg = styled.img`
    width: 500px;
    height: 500px;
`;

const ReviewStarLove = styled.div`
    width: 500px;
    height: 20px;
    margin-left: 20px;
    margin-bottom: 10px;
`;

const ReviewUserInfo = styled.div`
    width: 500px;
    height: 20px;
    margin-left: 20px;
    font-size: 20px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
`;

const Tag = styled.div`
    position: relative;
    margin-left: 18px;
    width: 500px;
`;

const ReviewTag = styled.div`
    width: 500px;
    height: 20px;
    margin-left: 10px;
    padding: -10px;
    display: contents;
`;

const ReviewContext = styled.div`
    width: 480px;
    margin-top: 10px;
`;

const ReviewCommentGroup = styled.div`
    position: relative;
    width: 400px;
    margin: 0 auto;
    color: gray;
    margin-left: -20px;

    details {
        font: 16px "Open Sans", sans-serif;
        float: left;
            padding: .5em .5em 0;
      }
      
    summary {
        margin-left: 20px;
        cursor: pointer;
        list-style: none;
        font-family: 'Arita-dotum4.0(OTF)';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        margin-top: 15px;
    }
`;

const ReviewComUp = styled.div`
    width: 500px;
    margin-left: 20px;
    line-height: 2;
    color: gray;

    input {
        position: relative;
        margin-left: 5px;
        background-repeat: no-repeat;
        border: 1px solid #ccc;
        

        :focus {
            border-color:#0982f0;
            outline: none;
        }
    }
`;

const ReviewDate = styled.div`
    width: 500px;
    height: 30px;
    line-height: 2;
    margin-left: 20px;
    color: gray;
    margin-top: 15px;
    font-family: 'Arita-dotum4.0(OTF)';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 15px;
`;

const ReviewComment = styled.div`
    width: 500px;
    height: 60px;

    line-height: 5;
    border-radius: 0px 0px 5px 5px;

    & input {
        width: 490px;
        height: 60px;
        margin-top: 12px;
        margin-left: -1px;
        border: 1px solid #ccc;
        background-repeat: no-repeat;
        padding: 5px 5px;
        border-radius: 0px 0px 5px 5px;

        :focus {
            border-color:#0982f0;
        }

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

const ReviewProfile = styled.img`
    width : 20px;
    height : 20px;
    border-radius : 20px;
    margin: 3px;
`;

const Btn = styled.button`
    position: relative;
    /* display: flex; */
    -webkit-box-align: center;
    align-items: center;
    color: black;
    border: none;
    background-color: transparent;
    cursor: pointer;
    justify-content:center;

    : hover {
        color: red;
    }
`;

export default MyReview;
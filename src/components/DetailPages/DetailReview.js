import React, { useRef, useState } from "react";
import styled from "styled-components";

import { FaComment } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux"
import { ApplyLike, CreateComment, DeleteMyComment, DeletePost, DetailCafePost, LikeCountAdd, LikeCountMinus, ModifyMyCommnet } from "../../redux/modules/AllSlice";
import { useParams } from "react-router-dom";
import { instance } from "../../shard/axios";
import { LikeInfoLoad, LikeList, UnLikeList } from "../../redux/modules/Likes";


const DetailReview = () => {


    const AllLikeList = useSelector((state) => state.Likes.LikeInfo);
    const review = useSelector((state) => state.AllSlice.DetailCafePostList);
    // console.log(AllLikeList)
    console.log(review, "지금필요한게 이거")


    const dispatch = useDispatch()
    const [comment, setComment] = useState("")
    const parm = useParams();
    const [userName, setUsername] = useState("")
    const [isLogin, setIsLogin] = useState("")
    const [Like, setLike] = useState([])



    React.useEffect(() => {
        setUsername(localStorage.getItem("nicname"))
        setIsLogin(localStorage.getItem("token")) 
        dispatch(LikeInfoLoad(parm.id))
        dispatch(DetailCafePost(parm.id))
        setLike(AllLikeList)
        
    }, [dispatch,Like])


    

    // console.log(review)
    console.log(Like)

    const [unclick, setUnclick] = useState("none")
    const [click, setClick] = useState("flex")
    const clickevent = () => {
        setClick("none")
        setUnclick("flex")
    }
    const unclickevent = () => {
        setClick("flex")
        setUnclick("none")
    }

    const nickname = useRef(null)
    const contents = useRef(null)

    // const changeCom = () => {
    //     dispatch(CreateComment(contents.current.value))
    // }



    const keyPress = (e, id) => {
        if (e.key === "Enter") {
            dispatch(CreateComment({
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
        dispatch(ModifyMyCommnet({
            commentid: commentid,
            contents: contents,
            nickname: localStorage.getItem("nicname"),
            profileimg: localStorage.getItem("profileimg"),
            postid: postid,
        }))
    }

    //댓글 삭제
    const SendDelete = (commentid, postid) => {
        // console.log(commentid)
        dispatch(DeleteMyComment({
            commentid: commentid,
            postid: postid
        }))
    }
    //좋아요 기능

    const LikeClick = async (postid) => {
        console.log()

        if (!isLogin) {
            return window.alert("로그인 후 이용해주세요!")
        } else if (AllLikeList[postid.i]?.postid === postid.postid &&
            AllLikeList[postid.i]?.like === false) {
            console.log("실행")
            const { data } = await instance.post(`api/${postid.postid}/like`)
            dispatch(LikeList({
                postid: postid.postid,
                like: data.result
            }))



            //test
            dispatch(LikeCountAdd({
                postid: postid.postid
            }))

            //test



        } else if (AllLikeList[postid.i]?.postid === postid.postid &&
            AllLikeList[postid.i]?.like === true) {
            const { data } = await instance.post(`api/${postid.postid}/like`)
            dispatch(UnLikeList({
                postid: postid.postid,
                like: data.result
            }))



            //test
            dispatch(LikeCountMinus({
                postid: postid.postid
            }))
            //test

        } else {
            window.alert("유효하지 않은 요청입니다.")
        }
    }




    return (
        <ReviewContent>
            <Alignment>
                <AlignBtn>별점순</AlignBtn>
                <AlignBtn>좋아요순</AlignBtn>
            </Alignment>
            {review?.map((item, i) => (
                <>
                    <Review key={item.postid}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row"
                            }}>
                            <ReviewHeader> 😁nickname</ReviewHeader>
                            {userName === item.nickname ?
                                (<span
                                    onClick={() => {
                                        dispatch(DeletePost(item.postid))
                                    }}
                                >삭제</span>) : (null)}
                        </div>
                        <ReviewImg src={item.image[0].img} />
                        <ReviewStarLove>⭐별점 {item.star}점

                            <span
                                onClick={() => {
                                    LikeClick({
                                        postid: item.postid,
                                        i: i
                                    })
                                }}
                            >{AllLikeList[i]?.postid === item.postid &&
                                AllLikeList[i]?.like ?
                                (<span
                                    style={{ backgroundColor: "red" }}
                                >🤍</span>)
                                : (<span>🤍</span>)}</span>

                            좋아요 {item.likecnt}개</ReviewStarLove>
                        <ReviewUserInfo>{item.nickname}</ReviewUserInfo>
                        {item.hashtagList.map((t, i) => (<ReviewTag>{t.hashtag}</ReviewTag>))}
                        <ReviewContext>커피 향에 반해버렸다...더보기</ReviewContext>
                        <ReviewCommentGroup>댓글 10개 모두 보기</ReviewCommentGroup>


                        <ReviewComUp>
                            {item.commentList.map((comment, i) => (
                                <>
                                    <div>
                                        {userName === comment.nickname ? (
                                            <span style={{ display: "flex" }}><ReviewProfile src={comment.profileimg} />{item.nickname} : {comment.contents}
                                                <Btn style={{ display: click }} onClick={() => { clickevent() }}>수정</Btn>
                                                <input
                                                    onChange={(e) => {
                                                        ModifyComment(e)
                                                    }}
                                                    type="text"
                                                    placeholder={comment.contents}
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
                                                    }}>수정</Btn>
                                                <Btn
                                                    onClick={() => {
                                                        SendDelete(
                                                            comment.commentid,
                                                            item.postid
                                                        )
                                                    }}
                                                >삭제</Btn>
                                            </span>) : (
                                            <span style={{ display: "flex" }}><ReviewProfile src={comment.profileimg} />{item.nickname} : {comment.contents}

                                            </span>
                                        )
                                        }

                                    </div>
                                </>
                            ))}
                        </ReviewComUp>

                        <ReviewDate>
                            1일전-이부분 처리 서버에서 부탁하기
                        </ReviewDate>
                        <ReviewComment>
                            <input
                                type="text"
                                onChange={(e) => {
                                    setComment(e.target.value)
                                }}
                                placeholder="댓글작성"
                                onKeyPress={(e) => { keyPress(e, item.postid) }}
                            />
                        </ReviewComment>
                    </Review>
                </>
            ))}

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

const ReviewComUp = styled.div`
    width: 500px;
    height: 30px;
    margin-left: 20px;
    line-height: 2;
    color: gray;

    input {
        width: 200px;
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
    width :20px;
    height : 20px;
    border-radius : 20px;
`;

const Btn = styled.button`
    width: 50px;
    height: 25px;
    /* display: flex; */
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 5px;
    color: black;
    border: none;
    background-color: transparent;
    margin-left:20px;
    margin-top: 3px;
    cursor: pointer;
    justify-content:center;

    & hover {
        color: white;
        background-color: black;
    }
`;
export default DetailReview;
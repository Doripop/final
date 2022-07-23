import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { instance } from "../../shard/axios"



const initialState = {
    MyLikeInfo: [],
    OwnerInfo : []

}


//마이페이지 내가적은 리뷰 조회
export const MyReviewLoad = createAsyncThunk(
    'MypageSlice/MyReviewLoad',
    async () => {
        try {
            const { data } = await instance.get("/api/user/posts")
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

//마이페이지 내가적은 리뷰 좋아요 조회
export const MyLikeInfoLoad = createAsyncThunk(
    'MypageSlice/MyLikesInfoList',
    async (cafeid) => {
        if(localStorage.getItem("token")){
            try {
                const {data} = await instance.get(`api/user/like-list`)
                console.log(data)
                return data;
            } catch(error){
                window.alert(error) 
            }
        }
        
    }
) 

//마이페이지 댓글 달기
export const MyCreateComment = createAsyncThunk(
    'MypageSlice/MyCreateComment',
    async (contents) => {
        try {
            console.log(contents)
            const { data } = await instance.post(`api/posts/${contents.postid}/comments`, { contents: contents.contents })
            // console.log(data)
            const comment = {
                contents: contents.contents,
                nickname: contents.nickname,
                profileimg: contents.profileimg,
                commentid: data.data.commentid
            }
            // contents.postid
            return { comment: comment, postid: contents.postid }
        } catch (error) {
            console.log(error)
        }
    }
)
// 마이페이지 댓글 수정
export const MypageModifyMyCommnet = createAsyncThunk(
    'MypageSlice/MypageModifyMyCommnet',
    async (CommentInfo) => {
        try {
            console.log(CommentInfo)
            const { data } = await instance.patch(`api/comments/${CommentInfo.commentid}`, { contents: CommentInfo.contents })
            const ChangeComment = {
                commentid: CommentInfo.commentid,
                contents: CommentInfo.contents,
                nickname: CommentInfo.nickname,
                profileimg: CommentInfo.profileimg
            }
            // console.log(data)

            return {
                comment: ChangeComment,
                postid: CommentInfo.postid
            }
        } catch (error) {
            console.log(error)
        }
    }
)

//마이페이지 댓글 삭제
export const MypageDeleteMyComment = createAsyncThunk(
    'MypageSlice/MypageDeleteMyComment',
    async (CommentId) => {
        
        try {
            console.log(CommentId)
            const { data } = await instance.delete(`api/comments/${CommentId.commentid}`)
            return {
                commentid: CommentId.commentid,
                postid: CommentId.postid
            }
        } catch (error) {
            console.log(error)
        }
    }
)


//사장님 마이페이지 카페 홈정보 조회
export const OwnerCafeLoad = createAsyncThunk(
    'MypageSlice/OwnerCafeLoad',
    async () => {
        try {
            const { data } = await instance.get("api/owner/info")
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

//사장님 마이페이지 베너 조회
export const OwnerCafeBenner = createAsyncThunk(
    'MypageSlice/OwnerCafeBenner',
    async (cafeid) => {
        console.log(cafeid)
        try {
            const { data } = await instance.get(`api/cafes/${cafeid}`)
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

//사장님 마이페이지 메뉴 조회
export const OwnerCafeMeunLoad = createAsyncThunk(
    'MypageSlice/OwnerCafeMeunLoad',
    async () => {
        try {
            const { data } = await instance.get("api/owner/menus")
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

//사장님 홈정보 수정
export const ModifyOwnerCafe = createAsyncThunk(
    'MypageSlice/ModifyOwnerCafe',
    async (contents) => {
        try {
            console.log(contents)
            const { data } = await instance.patch("api/owner/info", contents)
            console.log(data)
            // return data
        } catch (error) {
            console.log(error)
        }
    }
)

//사장님 메뉴 등록
export const AddCafeMenu = createAsyncThunk(
    'MypageSlice/AddCafeMenu',
    async (item) => {
        try {
            console.log(item)
            const { data } = await instance.post("api/owner/menus", item)
            console.log(data)
            // return data
        } catch (error) {
            console.log(error)
        }
    }
)


const MypageSlice = createSlice({
    name: "MypageSlice",
    initialState,
    reducers: {
        MyLikeListInfo: (state, action) => {
            console.log(action.payload, "라이크")
            // state.LikeInfo.push(action.payload)
            const Index = state.MyLikeInfo.findIndex((list)=>{
                return list.postid === action.payload.postid
            })
            console.log(Index)
            state.MyLikeInfo[Index] = action.payload
        },
        MyUnLikeListInfo: (state, action) => {
            console.log(action.payload, "언라이크")
            const Index = state.MyLikeInfo.findIndex((list)=>{
                return list.postid === action.payload.postid
            })
            console.log(Index)
            state.MyLikeInfo[Index] = action.payload
        },
        MyLikeCountAdd : (state, action) =>{
          
            const Index = state.MyReview.findIndex((List) => {
                return List.postid === action.payload.postid
            })
            
            state.MyReview[Index].likecnt += 1
        },
        MyLikeCountMinus : (state, action) =>{
           
            const Index = state.MyReview.findIndex((List) => {
                return List.postid === action.payload.postid
            })
            
            state.MyReview[Index].likecnt -= 1
        },
    },
    extraReducers : {
        [MyReviewLoad.fulfilled]: (state, action) => {
            state.MyReview = action.payload.data
        },
        [MyLikeInfoLoad.fulfilled]: (state, action) => {
        if(localStorage.getItem("token")){
            state.MyLikeInfo = action.payload.data
        }},
        [MyCreateComment.fulfilled]: (state, action) => {
            const index = state.MyReview.findIndex((List) => {
                return List.postid === action.payload.postid
            })
            state.MyReview[index].commentList.push(action.payload.comment)
        },
        [MypageModifyMyCommnet.fulfilled]: (state, action) => {
            const Index = state.MyReview.findIndex((List) => {
                return List.postid === action.payload.postid
            })
            const CommentIndex = state.MyReview[Index].commentList.findIndex((List) => {
                return List.commentid === action.payload.comment.commentid
            })

            state.MyReview[Index].commentList[CommentIndex] = action.payload.comment
        },
        [MypageDeleteMyComment.fulfilled]: (state, action) => {
            const Index = state.MyReview.findIndex((List) => {
                return List.postid === action.payload.postid
            })
            const CommentIndex = state.MyReview[Index].commentList.findIndex((List) => {
                return List.commentid === action.payload.commentid
            })
            state.MyReview[Index].commentList = state.MyReview[Index].commentList.filter((list, index)=>{
                return CommentIndex !== index;
            })
        },


        //사장님 정보
        [OwnerCafeLoad.fulfilled]: (state, action) => {
            state.OwnerInfo = action.payload.data
        },
        [OwnerCafeBenner.fulfilled]: (state, action) => {
            state.OwnerInfoBenner = action.payload.data
        },
        // [ModifyOwnerCafe.fulfilled]: (state, action) => {
        //     state.OwnerInfo = action.payload.data
        // },
        //사장님 메뉴
        [OwnerCafeMeunLoad.fulfilled]: (state, action) => {
            console.log(action.payload.data, "풀필드")
            state.OwnerMenuInfo = action.payload.data
        },
    }
  }
)




export const { MyLikeListInfo, MyUnLikeListInfo, MyLikeCountAdd, MyLikeCountMinus} = MypageSlice.actions
export default MypageSlice.reducer
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
// import win from "global";
import { instance } from "../../shard/axios";
const initialState = {
    user: [],
    city: [],
    sort: [],
    AutoCafeSearch: [],
    MainReviewList: [],
    MyReview: []
}






//로그아웃
export const LogOut = createAsyncThunk(
    'AllSlice/LogOut',
    async () => {
        try {
            const { data } = await instance.post("/api/user/signout")
            console.log(data)
            // localStorage.removeItem("refreshtoken")
            // localStorage.removeItem("token")
            localStorage.clear()
            window.location.replace("/")
        } catch (error) {
            console.log(error)
            // window.alert(error)
        }
    }
)


//디테일페이지 리뷰 불러오기
export const DetailCafePost = createAsyncThunk(
    'AllSlice/DetailCafePost',
    async (cafeid) => {

        try {
            const { data } = await instance.get(`api/cafes/${cafeid.id}/posts/${cafeid.sort}`)
            // console.log(data)
            return data
        } catch (error) {
            window.alert(error)
        }
    }
)


//디테일페이지 리뷰에 댓글 작성
export const CreateComment = createAsyncThunk(
    'AllSlice/CreateComment',
    async (contents) => {
        try {

            const { data } = await instance.post(`api/posts/${contents.postid}/comments`, { contents: contents.contents })

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
//디테일페이지 리뷰에 댓글 수정
export const ModifyMyCommnet = createAsyncThunk(
    'AllSlice/ModifyMyCommnet',
    async (CommentInfo) => {
        try {

            const { data } = await instance.patch(`api/comments/${CommentInfo.commentid}`, { contents: CommentInfo.contents })
            const ChangeComment = {
                commentid: CommentInfo.commentid,
                contents: CommentInfo.contents,
                nickname: CommentInfo.nickname,
                profileimg: CommentInfo.profileimg
            }

            return {
                comment: ChangeComment,
                postid: CommentInfo.postid
            }
        } catch (error) {
            console.log(error)
        }
    }
)

//디테일페이지 리뷰에 댓글 삭제
export const DeleteMyComment = createAsyncThunk(
    'AllSlice/DeleteMyComment',
    async (CommentId) => {

        try {

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







//게시글 삭제

export const DeletePost = createAsyncThunk(
    'AllSlice/DeletePost',
    async (postid) => {
        try {

            const { data } = await instance.delete(`api/posts/${postid}`)

            return postid
        } catch (error) {
            console.log(error)
        }
    }
)



//메인에서 리뷰 뷸러오기 디폴트 최신순 / 서울특별시
export const MainReview = createAsyncThunk(
    'AllSlice/MainReview',
    async (region) => {

        const citydefault = region.city == "" ? "전지역" : region.city

        try {
            const { data } = await instance.get(`api/posts/list/${citydefault}/${region.sort}`);

            return data
        } catch (error) {
            console.log(error);
            // window.alert(error)
        }
    }
)




//카페리뷰 작성
export const ReviewCreate = createAsyncThunk(
    'AllSlice/ReviewCreate',
    async (reviewInfo) => {

        try {
            const { data } = await instance.post(`api/${reviewInfo.cafeid}/posts`, reviewInfo.formdata, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            window.alert(data.message)

            return data.result ?
                window.location.replace("/") : window.alert("게시글 작성에 실패하였습니다.")
        } catch (error) {
            console.log(error)
            // window.alert(error) 
        }
    }
)


//자동완성 카페 전체 리스트
export const ReviewReg = createAsyncThunk(
    'AllSlice/CafeAddInfo',
    async (cafeDetail, dispacth) => {
        try {
            const { data } = await instance.get("api/cafes");
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

export const CafeSearch = createAsyncThunk(
    'AllSlice/CafeSearchInfo',
    async (searchName, thunkAPI) => {
        try {
            const { data } = await axios.post("https://kyuhong.shop/api/search", searchName);
            return data
        } catch (error) {
            window.alert(error.response.data.message)
        }
    }
)

export const DetailCafeBanner = createAsyncThunk(
    'AllSlice/DetailCafeBanner',
    async (cafeid) => {
        console.log(cafeid)
        try {
            const { data } = await instance.get(`api/cafes/${cafeid}`)

            return data
        } catch (error) {
        }
    }
)

export const DetailCafeHome = createAsyncThunk(
    'AllSlice/DetailCafeHome',
    async (cafeid) => {
        try {
            const { data } = await instance.get(`api/cafes/${cafeid}/info`);
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

export const DetailCafeMenu = createAsyncThunk(
    'AllSlice/DetailCafeMenu',
    async (cafeid) => {
        try {
            const { data } = await instance.get(`api/cafes/${cafeid}/menus`)
            return data
        } catch (error) {
            console.log(error)
        }
    }
)





const change = createSlice({
    name: "AllSlice",
    initialState,
    reducers: {
        citylist: (state, action) => {

            state.city = (action.payload);
        },
        sortList: (state, action) => {

            state.sort = (action.payload);
        },
        LikeCountAdd: (state, action) => {

            const Index = state.DetailCafePostList.findIndex((List) => {
                return List.postid === action.payload.postid
            })

            state.DetailCafePostList[Index].likecnt += 1
        },
        LikeCountMinus: (state, action) => {

            const Index = state.DetailCafePostList.findIndex((List) => {
                return List.postid === action.payload.postid
            })

            state.DetailCafePostList[Index].likecnt -= 1
        },


    },
    extraReducers: {
        [CafeSearch.pending]: (state) => {
            console.log("호출중")
        },
        [CafeSearch.fulfilled]: (state, action) => {
            state.SearchCafeInfo = action.payload.data
        },
        [CafeSearch.rejected]: (state) => {
            console.log("호출 실패")
        },
        [DetailCafeHome.fulfilled]: (state, action) => {
            state.DetailCafeList = action.payload.data
        },
        [DetailCafeMenu.fulfilled]: (state, action) => {
            state.DetailCafeMenuList = action.payload.data
        },
        [DetailCafeBanner.fulfilled]: (state, action) => {
            state.DetailCafeBanner = action.payload.data
        },
        //메인 리뷰 지역별 정렬
        [MainReview.fulfilled]: (state, action) => {
            state.MainReviewList = action.payload.data
        },
        [ReviewReg.fulfilled]: (state, action) => {
            state.AutoCafeSearch = action.payload
        },
        //디테일페이지 리뷰관리
        [DetailCafePost.fulfilled]: (state, action) => {
            state.DetailCafePostList = action.payload.data

        },
        [CreateComment.fulfilled]: (state, action) => {

            const index = state.DetailCafePostList.findIndex((List) => {
                return List.postid === action.payload.postid
            })
            state.DetailCafePostList[index].commentList.push(action.payload.comment)
        },
        [ModifyMyCommnet.fulfilled]: (state, action) => {

            const Index = state.DetailCafePostList.findIndex((List) => {
                return List.postid === action.payload.postid
            })
            const CommentIndex = state.DetailCafePostList[Index].commentList.findIndex((List) => {
                return List.commentid === action.payload.comment.commentid
            })

            state.DetailCafePostList[Index].commentList[CommentIndex] = action.payload.comment
        },
        [DeleteMyComment.fulfilled]: (state, action) => {

            const Index = state.DetailCafePostList.findIndex((List) => {
                return List.postid === action.payload.postid
            })
            const CommentIndex = state.DetailCafePostList[Index].commentList.findIndex((List) => {
                return List.commentid === action.payload.commentid
            })
            state.DetailCafePostList[Index].commentList = state.DetailCafePostList[Index].commentList.filter((list, index) => {
                return CommentIndex !== index;
            })
        },

        // 디테일 페이지 포스트 삭제
        [DeletePost.fulfilled]: (state, action) => {
            const Index = state.DetailCafePostList.findIndex((List) => {
                return List.postid === action.payload
            })
            state.DetailCafePostList = state.DetailCafePostList.filter((list, index) => {
                return Index !== index;
            })
        },

    }
})





export const { sortList, citylist, LikeCountAdd, LikeCountMinus } = change.actions
export default change.reducer


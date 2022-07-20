import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";
// import win from "global";
import { instance } from "../../shard/axios";
const initialState = {
    user :[],
    city : [],
    AutoCafeSearch :[],
    MainReviewList : [],
    MyReview : []
}






//로그아웃
export const LogOut = createAsyncThunk(
    'AllSlice/LogOut',
    async () =>{
        try{
            const {data} = await instance.post("/api/user/signout")
            console.log(data)
            // localStorage.removeItem("refreshtoken")
            // localStorage.removeItem("token")
            localStorage.clear()
            window.location.replace("/")
        } catch(error){
            console.log(error)
            // window.alert(error)
        }
    }
)
//마이리뷰 불러오기
export const MyReviewLoad = createAsyncThunk(
    'AllSlice/MyReviewLoad',
    async () => {
        try {
            const {data} = await instance.get("/api/user/posts")
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

//디테일페이지 리뷰에 댓글 작성
export const CreateComment = createAsyncThunk (
    'AllSlice/CreateComment',
    async (contents) => {
        try {
            console.log(contents)
            const {data} = await instance.post(`api/posts/${contents.postid}/comments`,{contents : contents.contents})
            console.log(data)
        }catch(error){
            console.log(error)
        }
    }
)

export const MainReview = createAsyncThunk(
    'AllSlice/MainReview',
    async (region) => {
        
        const citydefault = region == "" ? "서울특별시" : region
        
        try {
            const {data} = await instance.get(`api/posts/list/${citydefault}`);
            console.log(data)
            return data
        }catch (error) {
            console.log(error);
            // window.alert(error)
        }
    }
)


export const ReviewCreate = createAsyncThunk(
    'AllSlice/ReviewCreate',
     async (reviewInfo) => {
        console.log(reviewInfo)
        try {
            const {data} =  await instance.post(`api/${reviewInfo.cafeid}/posts`, reviewInfo.formdata,{headers: {
                "Content-Type": "multipart/form-data"
            }});
            console.log(data);
            return data
        } catch(error){
            console.log(error)
            // window.alert(error) 
        }
    }
)


//자동완성 카페 전체 리스트
export const ReviewReg = createAsyncThunk(
    'AllSlice/CafeAddInfo',
     async (cafeDetail,dispacth) => {
        try {
            const {data} =  await instance.get("api/cafes");
            console.log(data);
            // dispacth(listLoad(data));
            return data
        } catch(error){
            // window.alert(error) 
        }
    }
)

export const CafeSearch = createAsyncThunk(
    'AllSlice/CafeSearchInfo',
     async (searchName, thunkAPI) => {
        console.log(searchName, "아아아");
        try {
            const {data} =  await instance.get(`/api/search/${searchName.keyword}`, );
            console.log(data);
            // dispacth(listLoad(data));
            return data
        } catch(error){
            // console.log(error.response.data.message)
            window.alert(error.response.data.message) 
        }
    }
)

export const DetailCafeBanner = createAsyncThunk(
    'AllSlice/DetailCafeBanner',
    async (cafeid) => {
        console.log(cafeid)
        try{
            const {data} = await instance.get(`api/cafes/${cafeid}`)
            console.log(data)
            return data
        } catch(error) {
            // window.alert(error)
        }
    }
)

export const DetailCafeHome = createAsyncThunk(
    'AllSlice/DetailCafeHome',
    async (cafeid) => {
        try{
            const {data} = await instance.get(`api/cafes/${cafeid}/info`)
            console.log(data)
            return data
        } catch(error) {
            // window.alert(error)
        }
    }
)

export const DetailCafeMenu = createAsyncThunk(
    'AllSlice/DetailCafeMenu',
    async (cafeid) => {
        try{
            const {data} = await instance.get(`api/cafes/${cafeid}/menus`)
            console.log(data)
            return data
        } catch(error) {
            // window.alert(error)
        }
    }
)

export const DetailCafePost = createAsyncThunk(
    'AllSlice/DetailCafePost',
    async (cafeid) => {
        try{
            const {data} = await instance.get(`api/cafes/${cafeid}/posts`)
            console.log(data)
            return data
        } catch(error) {
            window.alert(error)
        }
    }
)



const change = createSlice({
    name : "AllSlice",
    initialState,
    reducers : {
        // listadd : (state, action) => {
        //     state.kang.push(action.payload);
        // }, 
        // listup : (state, action) =>{
        //     state.user[0] = (action.payload)
        // }
        citylist : (state, action) =>{
            state.city = (action.payload);
        }
    },
    extraReducers : {
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
            state.DetailCafeMenuList = action.payload.data.menuList
        },
        [DetailCafePost.fulfilled]: (state, action) => {
            state.DetailCafePostList = action.payload.data
        },
        [DetailCafeBanner.fulfilled]: (state, action) => {
            state.DetailCafeBanner = action.payload
        },
        [MainReview.fulfilled]: (state, action) => {
            state.MainReviewList = action.payload.data
        },
        [ReviewReg.fulfilled]: (state, action) => {
            state.AutoCafeSearch = action.payload
        },
        [MyReviewLoad.fulfilled]: (state, action) => {
            state.MyReview = action.payload.data
        },
    }
})




export const {citylist} = change.actions
export default change.reducer
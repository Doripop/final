import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
// import win from "global";
import { instance } from "../../shard/axios";
const initialState = {
    user :[],
    city : []
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
            window.alert(error)
        }
    }
)


export const MainReview = createAsyncThunk(
    'AllSlice/MainReview',
    async (region) => {
        try {
            const {data} = await instance.get(`api/posts/${region}`);
            console.log(data)
            return data
        }catch (error) {
            console.log(error);
            window.alert(error)
        }
    }
)


export const ReviewCreate = createAsyncThunk(
    'AllSlice/ReviewCreate',
     async (reviewInfo) => {
        console.log(reviewInfo)
        try {
            const {data} =  await instance.get(`api/${reviewInfo.cafeid}/posts`, reviewInfo.formdata);
            // console.log(data);
            return data
        } catch(error){
            console.log(error)
            window.alert(error) 
        }
    }
)

export const ReviewReg = createAsyncThunk(
    'AllSlice/CafeAddInfo',
     async (cafeDetail,dispacth) => {
        try {
            const {data} =  await instance.get("cafes/{cafeId}");
            // console.log(data);
            // dispacth(listLoad(data));
            return data
        } catch(error){
            window.alert(error) 
        }
    }
)

export const CafeSearch = createAsyncThunk(
    'AllSlice/CafeSearchInfo',
     async (searchName, thunkAPI) => {
        // console.log(searchName, "아아아");
        try {
            const {data} =  await instance.get("/api/search", searchName);
            // console.log(data);
            // dispacth(listLoad(data));
            return data
        } catch(error){
            window.alert(error) 
        }
    }
)

export const DetailCafeBanner = createAsyncThunk(
    'AllSlice/DetailCafeBanner',
    async (cafeid) => {
        try{
            const {data} = await instance.get(`api/cafes/${cafeid}`)
            return data
        } catch(error) {
            window.alert(error)
        }
    }
)

export const DetailCafeHome = createAsyncThunk(
    'AllSlice/DetailCafeHome',
    async (cafeid) => {
        try{
            const {data} = await instance.get(`api/cafes/${cafeid}/info`)
            return data
        } catch(error) {
            window.alert(error)
        }
    }
)

export const DetailCafeMenu = createAsyncThunk(
    'AllSlice/DetailCafeMenu',
    async (cafeid) => {
        try{
            const {data} = await instance.get(`api/cafes/${cafeid}/menu`)
            return data
        } catch(error) {
            window.alert(error)
        }
    }
)

export const DetailCafePost = createAsyncThunk(
    'AllSlice/DetailCafePost',
    async (cafeid) => {
        try{
            const {data} = await instance.get(`api/cafes/${cafeid}/post`)
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
            state.SearchCafeInfo = action.payload
        },
        [CafeSearch.rejected]: (state) => {
            console.log("호출 실패")
        },
        [DetailCafeHome.fulfilled]: (state, action) => {
            state.DetailCafeList = action.payload
        },
        [DetailCafeMenu.fulfilled]: (state, action) => {
            state.DetailCafeMenuList = action.payload
        },
        [DetailCafePost.fulfilled]: (state, action) => {
            state.DetailCafePostList = action.payload
        },
        [DetailCafeBanner.fulfilled]: (state, action) => {
            state.DetailCafeBanner = action.payload
        },
        [MainReview.fulfilled]: (state, action) => {
            state.MainReviewList = action.payload
        },
    }
})




export const {citylist} = change.actions
export default change.reducer
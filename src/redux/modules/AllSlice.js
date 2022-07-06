import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import { instance } from "../../shard/axios";
const initialState = {
    user :[]
}



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
     async (searchName,dispacth) => {
        console.log(searchName, "아아아", dispacth);
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
    },
    extraReducers : {
    //비동기 작업을 실행할때 쓰는 공간
    }
})




export const {} = change.actions
export default change.reducer
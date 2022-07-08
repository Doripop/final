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
     async (searchName, thunkAPI) => {
        // console.log(searchName, "아아아", dispacth);
        try {
            const {data} =  await instance.get(`cafes/${searchName}`);
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
        [CafeSearch.pending]: (state) => {
            console.log("호출중")
        },
        [CafeSearch.fulfilled]: (state, action) => {
            state.SearchCafeInfo = action.payload
        },
        [CafeSearch.rejected]: (state) => {
            console.log("호출 실패")
        }
    }
})




export const {} = change.actions
export default change.reducer
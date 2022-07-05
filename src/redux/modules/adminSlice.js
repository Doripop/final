import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"
import { instance } from "../../shard/axios"

const initialState = {
    userInfo :[],
    userInfoLoad :[]
}

// export const InfoLoad = () => {
//     return async function (dispacth) {
//         try {
//             const {data} =  await instance.get("admin");
//             // console.log(data);
//             dispacth(listLoad(data));
//         } catch(error){
//             window.alert(error) 
//         }
//     }
// }

export const userInfoLoad = createAsyncThunk(
    'admin/CafeAddInfo',
     async (dispacth) => {
        try {
            const {data} =  await instance.get("admin");
            // console.log(data);
            // dispacth(listLoad(data));
            return data
        } catch(error){
            window.alert(error) 
        }
    }
)



const admin = createSlice({
    name : "userInfoSlice",
    initialState,
    reducers : {
        // listLoad : (state, action) => {
        //     state.userInfo = action.payload
        // }, 
        // listup : (state, action) =>{
        //     state.user[0] = (action.payload)
        // }
    },
    extraReducers : {
        [userInfoLoad.pending]: (state) => {
            console.log("호출중")
        },
        [userInfoLoad.fulfilled]: (state, action) => {
            state.CafeInfo = action.payload
        },
        [userInfoLoad.rejected]: (state) => {
            console.log("호출 실패")
        }
    }
})




export const {listLoad} = admin.actions
export default admin.reducer
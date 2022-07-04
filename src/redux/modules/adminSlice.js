import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"
import { instance } from "../../shard/axios"

const initialState = {
    userInfo :[]
}

export const InfoLoad = () => {
    return async function (dispacth) {
        try {
            const {data} =  await instance.get("admin");

            console.log(data);
            dispacth(listLoad(data));
        } catch(error){
            window.alert(error) 
            }
         }
    
}



const admin = createSlice({
    name : "userInfoSlice",
    initialState,
    reducers : {
        listLoad : (state, action) => {
            // state.userInfo.push(action.payload);
            state.userInfo = action.payload
        }, 
        // listup : (state, action) =>{
        //     state.user[0] = (action.payload)
        // }
    },
    extraReducers : {
    //비동기 작업을 실행할때 쓰는 공간
    }
})




export const {listLoad} = admin.actions
export default admin.reducer
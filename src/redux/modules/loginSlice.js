import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    user :[]
}






const change = createSlice({
    name : "LoginSlice",
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
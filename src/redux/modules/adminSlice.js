import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"
import { instance } from "../../shard/axios"



const initialState = {
    CafeInfo:[],
    SuccessInfo:[],
    RejectInfo : [],
    RealInfo : []

}


export const CafeApplyList = createAsyncThunk(
    'admin/ApplyInfo',
     async (thunkAPI) => {
        try {
            const {data} =  await instance.get("/api/registers");
            // console.log(data);
            // dispacth(listLoad(data));
            return data
        } catch(error){
            window.alert(error) 
        }
    }
)

export const SuccessApplyList = createAsyncThunk(
    'admin/SuccessInfo',
     async (thunkAPI) => {
        try {
            const {data} =  await instance.get("/api/registers/permission");
            return data
        } catch(error){
            window.alert(error) 
        }
    }
)

export const CafeRejectList = createAsyncThunk(
    'admin/RejectInfo',
     async (thunkAPI) => {
        try {
            const {data} =  await instance.get("/api/registers/rejection");
            return data
        } catch(error){
            window.alert(error) 
        }
    }
)

export const AllRegCafe = createAsyncThunk(
    'admin/AllRegInfo',
     async (thunkAPI) => {
        try {
            const {data} =  await instance.get("admin");
            return data
        } catch(error){
            window.alert(error) 
        }
    }
)

//승인을 누르면서 이니셜스테이트에 있는걸 삭제하고 페이지 생성 요청
//받아와야될값 id / reg Id 
// id 로는 삭제 진행 \\ reg id + false 로는 페이지 생성요청
export const CafeApprove = createAsyncThunk(
    'admin/ApproveCafe',
    async (id , thunkAPI) => {
        try {
            const {data} = await instance.patch(`api/registers/${id.regid}/${id.permit}`)
            // const {data} = await instance.get('admin')



            //스탠다드 리듀서가 아니게 된다 크리에이트에이청크 쓰는 순간...
            // thunkAPI.dispatch(adminAllList(id.id))
            ///////////////////////////////////////



            // return data.result === true ? thunkAPI.dispatch(CreateCafePage(id.regid)) : data.result;
            // console.log(data[0].permit);
            return  data.permit === true ? thunkAPI.dispatch(CreateCafePage(id.regid)) : data.permit;
        } catch(error){
            window.alert(error) 
        }
    }
) 

export const CreateCafePage = createAsyncThunk(
    'admin/CreatePage',
    async (id) => {
        // console.log("넘어 오면 좋겠는데")
        try{
            const {data} = await instance.post(`api/registers/${id}`)
            // const {data} =await instance.get('admin')
            return data;
        }catch(error){
            window.alert(error)
        }
    }
)


export const CafeRemove = createAsyncThunk(
    'admin/RemoveCafe',
    async (id , thunkAPI) => {
        console.log(id);
        try {
            const {data} = await instance.patch(`api/registers/${id.cafeid}`)
         
             thunkAPI.dispatch(adminFinalList(id.id))
            return data;
        } catch(error){
            window.alert(error) 
        }
    }
) 



const admin = createSlice({
    name : "userInfoSlice",
    initialState,
    reducers : {
        adminAllList : (state, action) => {
           state.CafeInfo = state.CafeInfo.filter((item, index)=>{
                return parseInt(item.id) !== parseInt(action.payload)
            })
        }, 
        adminFinalList : (state, action) =>{
            state.RealInfo = state.RealInfo.filter((item, index)=>{
                return parseInt(item.id) !== parseInt(action.payload)
            })
        }
    },
    extraReducers : {
       
        [CafeApplyList.fulfilled]: (state, action) => {
            state.CafeInfo = action.payload
        },
        [SuccessApplyList.fulfilled]: (state, action) => {
            state.SuccessInfo = action.payload
        },
        [CafeRejectList.fulfilled]: (state, action) => {
            state.RejectInfo = action.payload
        },
        [AllRegCafe.fulfilled]: (state, action) => {
            state.RealInfo = action.payload
        }
    }
})




export const {adminAllList, adminFinalList} = admin.actions
export default admin.reducer
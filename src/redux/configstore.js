import { configureStore } from "@reduxjs/toolkit";
// import {addone} from "./modules/slice"
// import crud from "./modules/slice"
import loginSlice from "./modules/loginSlice";
import adminSlice from "./modules/adminSlice";

const store =  configureStore({
  reducer: {
    loginSlice,
    adminSlice
  },
});


export default store;
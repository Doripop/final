import { configureStore } from "@reduxjs/toolkit";
// import {addone} from "./modules/slice"
// import crud from "./modules/slice"
import loginSlice from "./modules/loginSlice";


const store =  configureStore({
  reducer: {
    loginSlice
  },
});


export default store;
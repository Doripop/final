import { configureStore } from "@reduxjs/toolkit";
// import {addone} from "./modules/slice"
// import crud from "./modules/slice"
import AllSlice from "./modules/AllSlice";
import adminSlice from "./modules/adminSlice";

const store =  configureStore({
  reducer: {
    AllSlice,
    adminSlice
  },
});


export default store;
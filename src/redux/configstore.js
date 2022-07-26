import { configureStore } from "@reduxjs/toolkit";
// import {addone} from "./modules/slice"
// import crud from "./modules/slice"
import AllSlice from "./modules/AllSlice";
import adminSlice from "./modules/adminSlice";
import Likes from "./modules/Likes";
import MypageSlice from "./modules/MypageSlice";


import Review from "./modules/Review";

const store = configureStore({
  reducer: {
    AllSlice,
    adminSlice,
    Likes,
    MypageSlice,
    Review
  },
});


export default store;
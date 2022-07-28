import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom"
import Main from "./components/main";
import Admin from "./components/admin";
import Detail from "./components/detail";
import Header from "./components/Public/Header";
import { instance } from "./shard/axios";
import Search from "./components/Search";
import Mypage from "./components/Mypages/Mypage";
import Footer from "./components/Public/Footer"
import KakaoLogin from "./shard/KakaoLogin";
import NaverLogin from "./shard/NaverLogin";
import GoogleLogin from "react-google-login";

function App() {

  //   const reLogin = async() => {
  //     const {data} = await instance.post ("user-re")
  //     localStorage.setItem("token", data.token)
  //     localStorage.setItem("token", data.re_token)
  //  }
  //   React.useEffect(()=>{
  //       if(!localStorage.getItem("token")){
  //         reLogin()
  //       }
  //   },[])



  return (
<>
      <div><Header/></div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/detail/:id/*" element={<Detail />} />
        <Route path="/search/*" element={<Search />} />
        <Route path="/Ouath" element={<KakaoLogin />} />
        <Route path="/Ouath" element={<NaverLogin />} />
        <Route path="/Ouath" element={<GoogleLogin />} />

      </Routes>

    {/* <Footer/>  풋터 메인페이지에만 있음, 메인페이지 수정 예정 */}

</>

  );
}


export default App;

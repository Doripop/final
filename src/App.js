import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom"
import Main from "./components/main";
import Admin from "./components/admin";
import Detail from "./components/detail";
import Header from "./components/header";
import { instance } from "./shard/axios";
import Search from "./components/Search";
import Mypage from "./components/Mypages/Mypage";
import Footer from "./components/Footer";

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
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/search/:text/*" element={<Search />} />
      </Routes>
      {/* <Route path="/search/:text/*"  element={<Search />}/> */}

      <Footer/>
    </div>
  );
}

export default App;

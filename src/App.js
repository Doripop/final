import React from "react";
import { Route, Routes } from "react-router-dom"
import Main from "./components/main";
import AdminAdd from "./components/adminAdd";
import Header from "./components/header";
import { instance } from "./shard/axios";
import CafeReg from "./components/CafeReg";

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
        <Route path="/admin" element={<AdminAdd />} />
        <Route path="/cafereg" element={<CafeReg />} />
      </Routes>
      {/* <Route path="/search/:text/*"  element={<Search />}/> */}

    </div>

  );
}

export default App;

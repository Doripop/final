import React from "react";
import {Route, Routes} from "react-router-dom"
import Main from "./components/main";
import AdminAdd from "./components/adminAdd";
import { instance } from "./shard/axios";

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
      <Main />
      





      <Routes>
        
      <Route path="/admin"  element={<AdminAdd />}/> 
        {/* <Route path="/search/:text/*"  element={<Search />}/> */}
      </Routes>
    </div>
    
  );
}

export default App;

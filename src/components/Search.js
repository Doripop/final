
import {useNavigate, useParams} from "react-router-dom"
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { CafeSearch } from "../redux/modules/AllSlice";


const Search = () => {

    const parm = useParams();
    const pageSearch = useRef("");
    const dispacth = useDispatch();
    const navigate = useNavigate();




    React.useEffect(()=>{
        dispacth(CafeSearch(parm.text))  
        //parm.text 
        console.log("2")
    },[parm.text])

    // const searchList = useSelector((state) => state.AllSlice.dadasdadsad);

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            navigate(`/search/${pageSearch.current.value}`);
            console.log("1")
        }
    }
    

    // console.log(parm.text) 파람으로 검색어 넘어오는 부분
    

    return (
        <>
            <div style={{display:"flex", justifyContent:"center"}}>
                <SearchBar 
                type="text"
                ref={pageSearch}
                onKeyPress={onKeyPress}
                placeholder = "검색어를 입력해주세요"
                /> 

                {/* {searchList?.map(()=>(
                    <>
                        <div>
                            
                        </div>
                    </>
                ))} */}



            </div>
        </>
    )
}

const SearchBar = styled.input`
    margin-top : 150px;
    width: 691px;
    height: 50px;
    box-shadow: 0 4px 4px -4px black;
`;

export default Search;
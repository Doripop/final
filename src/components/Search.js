
import {useParams} from "react-router-dom"
import React, { useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { CafeSearch } from "../redux/modules/AllSlice";


const Search = () => {

    const parm = useParams();
    const pageSearch = useRef("")
    const dispacth = useDispatch()

    React.useEffect(()=>{
        dispacth(CafeSearch(parm.text))  
        //parm.text 
    },[])

    

    // console.log(parm.text) 파람으로 검색어 넘어오는 부분
    

    return (
        <>
            <div style={{display:"flex", justifyContent:"center"}}>
                <SearchBar 
                type="text"
                ref={pageSearch}/>
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
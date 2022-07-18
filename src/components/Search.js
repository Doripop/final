
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
    console.log(parm)



    React.useEffect(()=>{
        dispacth(CafeSearch({
            keyword : parm.text
        }))  
        //parm.text 
        console.log("2")
    },[parm.text])

    const searchList = useSelector((state) => state.AllSlice.SearchCafeInfo);
    console.log(searchList)
    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            navigate(`/search/${pageSearch.current.value}`);
            console.log("1")
        }
    }
    

    // console.log(parm.text) 파람으로 검색어 넘어오는 부분
    

    return (
        <>
            <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
                <SearchBar 
                type="text"
                ref={pageSearch}
                onKeyPress={onKeyPress}
                placeholder = "검색어를 입력해주세요"
                /> 

                {searchList?.map((cafe,i)=>(
                    <>
                        <CardBox
                        onClick={()=>{navigate(`/detail/${cafe.cafeid}`)}}
                        key={cafe.zonenum}>
                            {cafe.address}
                            {cafe.avgstar}
                            {cafe.cafename}
                            {cafe.zonenum}
                        </CardBox>
                    </>
                ))}



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

const CardBox = styled.div`
    width : 150px;
    height : 150px;
    box-shadow: 0 4px 4px -4px black;
    border: 1px solid red;
`;

export default Search;
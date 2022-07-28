
import { useNavigate, useParams } from "react-router-dom"
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { CafeSearch } from "../redux/modules/AllSlice";
import { AiOutlineSearch } from "react-icons/ai";


const Search = () => {

    
    const pageSearch = useRef("");
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const searchList = useSelector((state) => state.AllSlice.SearchCafeInfo);

    React.useEffect(() => {
     
        
    }, [searchList])
    

 
    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
       
            dispatch(CafeSearch({
                keyword : e.target.value
            }))
        
        }
    }

    return (
        <>
            <div style={{ display: "grid", justifyContent: "center", flexDirection: "row" }}>
                <SearchBar
                    type="text"
                    ref={pageSearch}
                    onKeyPress={onKeyPress}
                    placeholder="검색어를 입력해주세요"
                />

                {searchList?.map((cafe, i) => (
                    <>
                        <CardBox
                            onClick={() => { 
                                navigate(`/detail/${cafe.cafeid}`) 
                            }}
                            key={cafe.zonenum}>
                            {cafe.cafename} 별점{cafe.avgstar} 점<br />
                            {cafe.address}
                            {cafe.zonenum}
                        </CardBox>
                    </>
                ))}
            </div>
                <Tag>
                    <TagTitle>추천 해시태그</TagTitle>
                    <TagList1>
                        <div>#사진맛집</div>
                        <div>#서울카페</div>
                        <div>#오션뷰</div>
                        <div>#오션뷰카페</div>
                        <div>#카페투어</div>
                    </TagList1>
                    <TagList1>
                        <div>#제주카페</div>
                        <div>#거제카페</div>
                        <div>#공주카페</div>
                        <div>#숲세권카페</div>
                        <div>#브런치카페</div>
                    </TagList1>
                    <TagList1>
                        <div>#제주카페</div>
                        <div>#거제카페</div>
                        <div>#지브리</div>
                        <div>#여름맛</div>
                        <div>#커피</div>
                    </TagList1>
                </Tag>
        </>
    )
}

const SearchBar = styled.input`
    margin-top : 150px;
    box-shadow: 0 4px 4px -4px black;
    width: 700px;
    height: 50px;
    margin-top: 80px;
    font-family: 'Arita-dotum-Medium';
    font-size: 10pt;
    padding-left: 45px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
`;

const CardBox = styled.div`
    position: relative;
    height : 50px;
    box-shadow: 0 0px 0px -4px gray;
    border: 1px solid gray;
    margin-top: 20px;
    padding-left: 60px;
    font-family: 'Arita-dotum-Medium';
    // text-align: center;

    justify-content: center;

    border-left-width:0; 
    border-right-width:0; 
    border-top-width:0;
    border-bottom-width:1;
`;

const Tag = styled.div`
    width: 600px;
    height: 172px;
    margin: 0 auto ;
    margin-top: 100px;
    font-family: 'Arita-dotum-Medium';
`;

const TagTitle = styled.div`
    width: 137px;
    height: 24px;
    border: 1px solid #3FC275;
    border-radius: 20px;
    background-color: #3FC275;
    color: white;
    text-align: center;
    font-family: 'Arita-dotum-Medium';
    cursor:default
`;

const TagList1 = styled.div`
    display: flex;
    margin-top: 20px; 
    & div {
        width: 108px;
        height: 21px;
        margin-right: 10px;
        border: 1px solid #3FC275;
        border-radius: 20px;
        color: #3FC275;
        text-align: center;
        cursor:default
    }
`;

export default Search;
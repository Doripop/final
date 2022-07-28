
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"

import { CafeSearch } from "../redux/modules/AllSlice";

import NotSearch from "../components/Search/NotSearch"

import styled from "styled-components";
import "../css/reset.css"
import {SearchIcon} from "../css/searchSVG"

const Search = () => {

    const parm = useParams();
    const pageSearch = useRef("");
    const dispacth = useDispatch();
    const navigate = useNavigate();
    console.log(parm)



    React.useEffect(() => {
        dispacth(CafeSearch({
            keyword: parm.text
        }))
    }, [parm.text])

    const searchList = useSelector((state) => state.AllSlice.SearchCafeInfo);
    console.log(searchList)
    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            navigate(`/search/${pageSearch.current.value}`);
        }
    }

    const hashTag =
      [ "#사진맛집", "#서울카페", "#오션뷰", "#오션뷰카페", "#카페투어",
        "#제주카페", "#거제카페", "#공주카페", "#숲세권카페", "#브런치카페",
        "#제주카페", "#거제카페",  "#지브리", "#여름맛", "#커피"]
        console.log(hashTag)

    // console.log(parm.text) 파람으로 검색어 넘어오는 부분


    return (
      <Wrap>
        <div className="searchArea">
          <div className="searchBox">
            <div className="icon"><SearchIcon/></div>
            <input
                type="text"
                ref={pageSearch}
                onKeyPress={onKeyPress}
                placeholder="검색어를 입력해주세요"
              />
            </div>
          </div>

       
        {searchList?  <NotSearch/> : ""}

        {searchList?.map((cafe, i) => (
        <>
          <CardBox
            onClick={() => { navigate(`/detail/${cafe.cafeid}`) }}
            key={cafe.zonenum}>
            {cafe.cafename} 별점{cafe.avgstar} 점
            {cafe.address}
            {cafe.zonenum}
          </CardBox>
        </>
        ))}

        <div className="recommendTag">
          <div className="hashTagTitle">
            <span>추천 해시태그</span><br />
          </div>

          <div class="hashTagList">
            {hashTag.map((tagItem, i)=>(
              <div key={i}>{tagItem}</div>
            ))}
          </div>
    
        </div>
  </Wrap>
    )
}

// 전체 wrap 1920 으로 컨텐츠구역  1200px 컨텐츠구역 min 1050 기준 헤더/컨텐츠 안뭉개짐 
const Wrap = styled.div`
max-width: 1920px;
display: flex;
flex-direction: column;
align-items: center;
width : 100%;
height: 100%;

.searchArea{
  display: flex;
  justify-content: center;
  max-width: 1200px;
  min-width: 1050px;
  width: 100%;
  margin: 3rem 0 0 0 ;

  .searchBox{
    width: 691px;
    height: 50px;
    border: 2px solid #19221F;
    display: flex;
    border-radius: 5px;

    .icon{
      margin: 0.8rem;
    }
    input{
      width: 650px;
      font-size: 1.5rem;
      border: none;
      outline: none;

        &::-webkit-input-placeholder{
          color: #19221F;
          opacity:  1;
}}}}

  .resultArea{

  }

  .recommendTag{
    width: 700px;
    display: flex;
    padding: 2rem 2rem 0 2rem;
    display: flex;
    flex-direction: column;

    .hashTagTitle{
      width: 140px;
      height: 30px;
      background: #3FC275;
      border-radius: 30px;

      span{
        display: flex;
        justify-content: center;
        padding: 0.5rem 0 0 0;
        color: white;
        font-size: 1.2rem;
      }
    }

    .hashTagList{

      padding: 2rem 0 0 0;
      white-space: nowrap;

      div{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.3rem 0 0 0;
        border: 1px solid #3FC275;
        border-radius: 30px;
        color: #3FC275;
        font-size: 1rem;
        width: 115px;
        height: 30px;

      }
    }

  }



`;





const SearchBar = styled.input`
    margin-top : 150px;
    box-shadow: 0 4px 4px -4px black;
    width: 700px;
    height: 50px;
    margin-top: 80px;
    font-family: 'Arita-dotum-Medium';
    // margin-left: 10px;
    // background-repeat: no-repeat;
    // border: 1px solid #ccc;
    // padding: 5px 5px;

    //     :focus {
    //         border-color:#0982f0;
    //     }

    //     ::placeholder {
    //         background-size: contain;
    //         background-position:  1px center;
    //         background-repeat: no-repeat;
    //         text-align: center;
    //         text-indent: 0;
    //         font-family: 'Arita-dotum-Medium';
    //     }
`;

const CardBox = styled.div`
  width: 650px;
  
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
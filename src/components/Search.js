
import { useNavigate, useParams } from "react-router-dom"
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { CafeSearch } from "../redux/modules/AllSlice";
import { AiOutlineSearch } from "react-icons/ai";


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


    // console.log(parm.text) 파람으로 검색어 넘어오는 부분


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
                            onClick={() => { navigate(`/detail/${cafe.cafeid}`) }}
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
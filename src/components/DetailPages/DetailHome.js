import React from "react";
import styled from "styled-components";

import { BiMap } from 'react-icons/bi';
import { AiFillSound } from 'react-icons/ai';

import { useDispatch, useSelector } from "react-redux"

import { DetailCafeHome } from "../../redux/modules/AllSlice";
import { useParams } from "react-router-dom";


const DetailHome = () => {

    const dispatch = useDispatch()
    const parm = useParams()
    console.log(parm);

    const home = useSelector((state) => state.AllSlice.DetailCafeList);
    console.log(home)

    React.useEffect(() => {
        //메뉴 정보 받아오기
        dispatch(DetailCafeHome(parm.id))
        //이부분은 그냥 카페아이디 파람으로 넘길곳
    }, [dispatch])
    return (
        <>
            <Home id={home?.cafeid}>
                <h1>가게 설명</h1>
                {home?.intro}
            </Home>
            <Home2>
                <h1><AiFillSound className="sound" />사장님이 안내드립니다.</h1>
                <p>{home?.notice}</p>
            </Home2>
            <Home3>
                <h1><BiMap className="map" />
                    {home?.address}
                    {home?.addressdetail}&nbsp;
                    {home?.zonenum} <br />
                </h1>
                <p>
                    {home?.latitude} <br />
                    {home?.longitude}
                </p>
            </Home3>
        </>
    );
}

const Home = styled.div`
    width: 960px;
    height: 100%;

    margin: 0px auto;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    border-bottom: solid 1px black;
`;

const Home2 = styled.div`
    width: 960px;
    height: 100%;

    margin: 0px auto;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    border-bottom: solid 1px black;

    word-break:break-all;

    .sound {
        color: #00E676;
    }
`;

const Home3 = styled.div`
    width: 960px;
    height: 100%;

    margin: 0px auto;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    border-bottom: solid 1px black;

    .map {
        color: #00E676;
    }
`;

export default DetailHome;
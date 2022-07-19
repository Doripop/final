import React from "react";
import styled from "styled-components";

import { BiMap } from 'react-icons/bi';
import { AiFillSound } from 'react-icons/ai';

import {useDispatch, useSelector} from "react-redux"

import { DetailCafeHome } from "../../redux/modules/AllSlice";
import { useParams } from "react-router-dom";


const DetailHome = () => {

    const dispatch = useDispatch()
    const parm = useParams()
    console.log(parm);

    const home = useSelector((state) => state.AllSlice.DetailCafeList);
    console.log(home)
    
    React.useEffect(()=>{
        //메뉴 정보 받아오기
        dispatch(DetailCafeHome(parm.id))
        //이부분은 그냥 카페아이디 파람으로 넘길곳
    },[dispatch])
    return (
        <>
            <Home id={home?.cafeid}>
                    <h1>가게설명</h1>
            </Home>
            <Home2>
                <h1><AiFillSound className="sound"/>사장님이 안내드립니다.</h1>
                <p>매장에 대한 사장님 안내말씀 입니다.</p>
            </Home2>
            <Home3>
                <h1><BiMap className="map"/>서울특별시 관악구 관천로 69-1</h1>
                <p>
                    {home?.address}
                    {home?.addressdetail}&nbsp;
                    {home?.zonenum} <br/>
                    {home?.latitude} <br/>
                    {home?.longitude}

                </p>
            </Home3>
        </>

        // <>
        //     <Home>
        //         <h1>가게설명</h1>
        //     </Home>
        //     <Home2>
        //         <h1><AiFillSound className="sound"/>사장님이 안내드립니다.</h1>
        //         <p>매장에 대한 사장님 안내말씀 입니다.</p>
        //     </Home2>
        //     <Home3>
        //         <h1><BiMap className="map"/>서울특별시 관악구 관천로 69-1</h1>
        //         <img src="https://www.google.com/maps/vt/data=NiBmYD6c2Lu1yb2HAjcoHVtWRzh4k0Tfbj1Ruz2dIOQkI23ERKMu38P5x51Tht5HaqN42snplEb4F3fwRIGi1-59mFwd5y0n9RcY3H9WrRIux6sqx1bYztJcJXWExY5YP0gJupQ0PcPjDQay77eXsd4x8oGNG9nWwLhH1ABuEeA_4KxW" />
        //     </Home3>
        // </>
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
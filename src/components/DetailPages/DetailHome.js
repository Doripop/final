import React from "react";
import styled from "styled-components";

import { MdDeliveryDining } from 'react-icons/md';
import { AiFillSound } from 'react-icons/ai';

import {useDispatch, useSelector} from "react-redux"

import { DetailCafeHome } from "../../redux/modules/AllSlice";


const DetailHome = (props) => {

    const dispatch = useDispatch()
    const {cafeid} = props
    console.log(cafeid.id)

    React.useEffect(()=>{
        //메뉴 정보 받아오기
        dispatch(DetailCafeHome(cafeid.id))
        //이부분은 그냥 카페아이디 파람으로 넘길곳
    },[dispatch])
    const list = useSelector((state) => state.AllSlice.DetailCafeList);
    
    
    return (
        <>
            <Home>
                <h1><MdDeliveryDining/>title1</h1>
            </Home>
            <Home2>
                <h1><AiFillSound/>title2</h1>
                <p>content</p>
            </Home2>
            <Home3>
                <h1><MdDeliveryDining/>title3</h1>
                <p>Map</p>
            </Home3>
        </>
    );
}

const Home = styled.div`
    width: 1160px;
    height: 100%;

    margin: 0px auto;
    padding: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    border-bottom: solid 1px black;
`;

const Home2 = styled.div`
    width: 1160px;
    height: 100%;

    margin: 0px auto;
    padding: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    border-bottom: solid 1px black;

    word-break:break-all;
`;

const Home3 = styled.div`
    width: 1160px;
    height: 100%;

    margin: 0px auto;
    padding: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    border-bottom: solid 1px black;
`;

export default DetailHome;
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { BiMap } from 'react-icons/bi';
import { AiFillSound } from 'react-icons/ai';
import { MdDeliveryDining } from 'react-icons/md';
import { GiShop } from 'react-icons/gi';

import { useDispatch, useSelector } from "react-redux"

import { DetailCafeHome } from "../../redux/modules/AllSlice";
import { useParams } from "react-router-dom";


const DetailHome = () => {



    const dispatch = useDispatch()
    const parm = useParams()
    console.log(parm);

    //카페정보
    const OwnerInfoList = useSelector((state) => state.MypageSlice.OwnerInfo);
    console.log(OwnerInfoList)

    const home = useSelector((state) => state.AllSlice.DetailCafeList);
    console.log(home)

    React.useEffect(() => {
        //메뉴 정보 받아오기
        dispatch(DetailCafeHome(parm.id))
        //이부분은 그냥 카페아이디 파람으로 넘길곳
    }, [dispatch])


    //지도 테스트
    const options = {
        center: new window.kakao.maps.LatLng(home?.latitude, home?.longitude),
        level: 3,
    };


    const container = useRef(null);
    

    React.useEffect(() => {
     const map = new window.kakao.maps.Map(container.current, options);
     const markerPosition = new window.kakao.maps.LatLng(home?.latitude, home?.longitude); 
     const marker = new window.kakao.maps.Marker({ 
       position: markerPosition
     }); 
     marker.setMap(map); 
    }, [home?.latitude, home?.longitude, options]);

    

    return (
        <>
            <HomeCafe>
                {OwnerInfoList?.dilivery ?
                (
                    <h1>
                        <MdDeliveryDining className="IconMD" /> 배달 가능 매장입니다!
                    </h1>
                ) : (
                    <h1>
                        <GiShop className="IconShop" /> 매장만 이용 가능합니다!
                    </h1>
                )}
            </HomeCafe>
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
                   

                    {/* 지도 */}
                    <div
                    style={{
                        display:"flex",
                        justifyContent:"center"
                    }}>
                         <div
                        className="map"
                        style={{ 
                            width: "800px",
                            height: "300px",
                        }}
                        ref={container}
                    ></div>
                    </div>
                   
                    {/* 지도 */}

                </p>
            </Home3>
        </>
    );
}

const HomeCafe = styled.div`
    width: 960px;
    height: 100%;

    margin: 0px auto;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-family: 'Arita-dotum-Medium';
    border-bottom: solid 1px #D9D9D9;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;

    h1 {
        margin-left: 33px;
        color: #19221F;
        font-family: 'Arita-dotum-Medium';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
    }

    & .IconMD{
        color: #3FC275;
    }

    & .IconShop{
        color: #3FC275;
        font-size: 30px;
    }

`;

const Home = styled.div`
    width: 960px;
    height: 100%;

    margin: 0px auto;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-family: 'Arita-dotum-Medium';
    border-bottom: solid 1px #D9D9D9;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;

    h1 {
        margin-left: 22px;
        color: #19221F;
        font-family: 'Arita-dotum-Medium';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
    }
`;

const Home2 = styled.div`
    width: 960px;
    height: 100%;

    margin: 0px auto;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    border-bottom: solid 1px #D9D9D9;

    word-break:break-all;
    font-family: 'Arita-dotum-Medium';

    & h1 {
        color: #19221F;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
    }

    & p {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        color: #19221F;
    }

    .sound {
        color: #3FC275;
    }
`;

const Home3 = styled.div`
    width: 960px;
    height: 100%;

    margin: 0px auto;
    padding: 20px;
    font-family: 'Arita-dotum-Medium';
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: #19221F;
    border-bottom: solid 1px #D9D9D9;

    .map {
        color: #3FC275;
    }

    & h1 {
        color: #19221F;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
    }
`;

export default DetailHome;
import React from "react";
import styled from "styled-components";

import { SiBuymeacoffee } from 'react-icons/si';
import { GiCakeSlice } from 'react-icons/gi';

import {useDispatch, useSelector} from "react-redux"
import { DetailCafeMenu } from "../../redux/modules/AllSlice";



const DetailMenu = (props) => {
    const dispatch = useDispatch()
    const {cafeid} = props
    console.log(cafeid.id)
    React.useEffect(()=>{
        //메뉴 정보 받아오기
      dispatch(DetailCafeMenu(cafeid.id))
    },[dispatch])
    const list = useSelector((state) => state.AllSlice.DetailCafeMenuList);
    
    
    return (
        <>
            <Menu>
                <h1><SiBuymeacoffee/>title1</h1>
                <div>아이스아메리카노</div>
                <div>아이스 라떼</div>
            </Menu>
            <Menu>
                <h1><GiCakeSlice/>title2</h1>
                <div>아이스아메리카노</div>
                <div>아이스 라떼</div>
            </Menu>
        </>
    );
}

const Menu = styled.div`
    width: 1160px;
    height: 100%;

    margin: 0 auto;
    padding: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    border-bottom: solid 1px black;
    
    & div {
        width: 350px;
        height: 100px;
        border: 1px solid black;
    }
`;

export default DetailMenu;
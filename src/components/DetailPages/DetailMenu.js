import React from "react";
import styled from "styled-components";

import { SiBuymeacoffee } from 'react-icons/si';
import { GiCakeSlice } from 'react-icons/gi';

import { useDispatch, useSelector } from "react-redux"
import { DetailCafeMenu } from "../../redux/modules/AllSlice";
import { useNavigate, useParams } from "react-router-dom";



const DetailMenu = (props) => {
    const params = useParams();
    const dispatch = useDispatch();
    const cafeId = Number(params.id);
    const navigate = useNavigate();
    // const cafeId = props
    const menuList = useSelector((state) => state.AllSlice.DetailCafeMenuList);
    console.log(menuList)
    // console.log(cafeId.id)
    React.useEffect(() => {
        //메뉴 정보 받아오기
        dispatch(DetailCafeMenu(cafeId))
    }, [dispatch, cafeId])

    return (
        <>
            <CoffeeMenu>
                <h1><SiBuymeacoffee className="coffee" /> 커피메뉴</h1>
                {menuList?.drink.map((item, i) => (
                    <>
                    <Coffee
                        id={item.menuid}>
                        <CoMenu src = {item.menuimg}/>
                        <p>
                            {item.category}<br/>
                            {item.menuname}<br/>
                            <br/>
                            {item.menuprice}원
                        </p>
                    </Coffee>
                    </>
                ))}
            </CoffeeMenu>
            <DessertMenu>
                <h1><GiCakeSlice className="cake" /> 디저트메뉴</h1>
                {menuList?.dessert.map((item, i) => (
                    <>
                    <Dessert
                        id={item.menuid}>
                        <CoMenu src = {item.menuimg}/>
                        <p>
                            {item.category}<br/>
                            {item.menuname}<br/>
                            <br/>
                            {item.menuprice}원
                        </p>
                    </Dessert>
                    </>
                ))}
            </DessertMenu>
        </>
    );
}

const CoffeeMenu = styled.div`
    width: 950px;
    
    margin: 0 auto;
    padding: 20px;
    font-family: 'Arita-dotum-Medium';
    border-bottom: 1px solid #D9D9D9;
    
    h1 {
        cursor: default;
        font-size: 20px;
        color: 19221F;
    }

    .coffee {
        font-size: 24px;
        color: #3FC275;
    }
`;

const Coffee = styled.div`
    width: 350px;
    height: 100px;
    border: 1px solid #D9D9D9;
    
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
    margin-right: 30px;
    margin-left: 100px;

    & p {
        margin-top: -20px;
    }

    : hover {
        cursor: default;
        box-shadow : 0px 3px 0px 0px #E0E0E0;
    }
`;

const CoMenu = styled.img`
    width: 80px;
    height: 80px;
    border: 1px solid #EEE;
    margin-left: 20px;
    margin-right: 20px;
`;

const DessertMenu = styled.div`
    width: 950px;

    margin: 0 auto;
    padding: 20px;
    font-family: 'Arita-dotum-Medium';

    h1 {
        font-size: 20px;
        cursor: default;
        color: 19221F;
    }

    .cake {
        font-size: 24px;
        color: #3FC275;
    }
`;

const Dessert = styled.div`
    width: 350px;
    height: 100px;
    border: 1px solid black;

    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
    margin-right: 30px;
    margin-left: 100px;

    & p {
        margin-top: -20px;
    }

    : hover {
        cursor: default;
        box-shadow : 0px 3px 0px 0px #E0E0E0;
    }
`;
export default DetailMenu;
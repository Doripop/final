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
                <h1><SiBuymeacoffee className="coffee" />커피메뉴</h1>
                {menuList?.drink.map((item, i) => (
                    <>
<<<<<<< HEAD
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
=======
                        <Coffee
                            id={item.menuid}>
                            <CoMenu src={item.menuimg} />
                            <p>
                                {item.category}<br />
                                {item.menuname}<br />
                                {item.menuprice}
                            </p>
                        </Coffee>
>>>>>>> 9af61a79cec71d5cc36936c798807726832b8171
                    </>
                ))}
            </CoffeeMenu>
            <DessertMenu>
                <h1><GiCakeSlice className="cake" />디저트메뉴</h1>
                {menuList?.dessert.map((item, i) => (
                    <>
<<<<<<< HEAD
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
=======
                        <Dessert
                            id={item.menuid}>
                            <CoMenu src={item.menuimg} />
                            <p>
                                {item.category}<br />
                                {item.menuname}<br />
                                {item.menuprice}
                            </p>
                        </Dessert>
>>>>>>> 9af61a79cec71d5cc36936c798807726832b8171
                    </>
                ))}
            </DessertMenu>
        </>
    );
}

const CoffeeMenu = styled.div`
    width: 63%;

    margin: 0 auto;
    padding: 20px;
    font-family: 'Arita-dotum-Medium';
    border-bottom: 1px solid black;
    
    h1 {
        cursor: default;
    }

    .coffee {
        color: #00E676;
    }
`;

const Coffee = styled.div`
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

const CoMenu = styled.img`
    width: 80px;
    height: 80px;
    border: 1px solid #EEE;
    margin-left: 20px;
    margin-right: 20px;
`;

const DessertMenu = styled.div`
    width: 63%;

    margin: 0 auto;
    padding: 20px;
    font-family: 'Arita-dotum-Medium';

    h1 {
        cursor: default;
    }

    .cake {
        color: #00E676;
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
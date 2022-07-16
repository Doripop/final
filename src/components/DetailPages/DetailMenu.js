import React from "react";
import styled from "styled-components";

import { SiBuymeacoffee } from 'react-icons/si';
import { GiCakeSlice } from 'react-icons/gi';

import {useDispatch, useSelector} from "react-redux"
import { DetailCafeMenu } from "../../redux/modules/AllSlice";
import { useNavigate, useParams } from "react-router-dom";



const DetailMenu = (props) => {
    const params = useParams();
    const dispatch = useDispatch();
    const cafeId = Number(params.id);
    const navigate = useNavigate();
    // const cafeId = props
    const menuList = useSelector((state) => state.AllSlice.DetailCafeMenu);
    console.log(menuList)
    console.log(cafeId.id)
    React.useEffect(()=>{
        //메뉴 정보 받아오기
      dispatch(DetailCafeMenu(cafeId))
    },[dispatch, cafeId])
    
    return (
        <>
            <CoffeeMenu>
                <h1><SiBuymeacoffee className="coffee"/>&nbsp;커피메뉴{menuList?.category}&nbsp;&nbsp;&nbsp;</h1>
                    <Coffee
                        id={menuList?.menuid}>
                        <CoMenu src = {menuList?.menuimg}/>
                        {menuList?.menuna}<br/>
                        {menuList?.menuprice}
                    </Coffee>
                    <Coffee>
                        <CoMenu src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS55NcjBojCxNAtexnVQPFbgyi7fJCibBOWjNoAoUMcfaQJKgV0iIUJTr4ziivTJzBQWYg&usqp=CAU"/>
                        아메리카노<br/>
                        3,000원
                    </Coffee>
                </CoffeeMenu>
            <DessertMenu>
                <h1><GiCakeSlice className="cake"/>&nbsp;디저트메뉴</h1>
                <Dessert>
                    <CoMenu src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrtpWf-ty4r9WtYbsDYFgiXzEL2yYgN9yhZg&usqp=CAU"/>
                    수제케이크<br/>
                    6,000원
                </Dessert>
                <Dessert>
                    <CoMenu src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrtpWf-ty4r9WtYbsDYFgiXzEL2yYgN9yhZg&usqp=CAU"/>
                    수제케이크<br/>
                    6,000원
                </Dessert>
            </DessertMenu>
        {/* {list?.map((item, i) => (
            <div>
            <DessertMenu>
            <h1><GiCakeSlice className="cake"/>&nbsp;디저트메뉴{item.category}</h1>
                <Dessert
                    key={i}
                    id={item.menuid}>
                    <CoMenu>{item.menuimg}</CoMenu>
                    {item.menuna}<br/>
                    {item.menuprice}
                </Dessert>
            </DessertMenu>
            </div>
            ))} */}
        </>
        
        // <>
        //     <CoffeeMenu>
        //         <h1><SiBuymeacoffee className="coffee"/>&nbsp;커피메뉴&nbsp;&nbsp;&nbsp;</h1>
        //         <Coffee>
        //             <CoMenu src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrtpWf-ty4r9WtYbsDYFgiXzEL2yYgN9yhZg&usqp=CAU"/>
        //             아메리카노<br/>
        //             80,000원
        //         </Coffee>
        //         <Coffee>
        //             <CoMenu src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrtpWf-ty4r9WtYbsDYFgiXzEL2yYgN9yhZg&usqp=CAU"/>
        //             아메리카노<br/>
        //             80,000원
        //         </Coffee>
        //     </CoffeeMenu>

        // </>
    );
}

const CoffeeMenu = styled.div`
    width: 1000px;

    margin: 0 auto;
    padding: 20px;

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
    text-align: center;

    &: hover {
        cursor: default;
        box-shadow : 0px 3px 0px 0px #E0E0E0;
    }
`;

const CoMenu = styled.img`
    width: 80px;
    height: 80px;
    border: 1px solid #EEE;
    margin-right: 20px;
`;

const DessertMenu = styled.div`
    width: 1000px;

    margin: 0 auto;
    padding: 20px;

    border-bottom: 1px solid black;

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
    text-align: center;

    &: hover {
        cursor: default;
        box-shadow : 0px 3px 0px 0px #E0E0E0;
    }
`;
export default DetailMenu;
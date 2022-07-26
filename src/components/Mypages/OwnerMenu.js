import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCafeMenu, DeleteCafeMenu, OwnerCafeMeunLoad } from "../../redux/modules/MypageSlice";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { SiBuymeacoffee } from 'react-icons/si';
import { GiCakeSlice } from 'react-icons/gi';
import '../../css/partCss/OwnerCafeMenu.css'
import ScrollBtn from '../ScrollBtn';

import Cafe1 from '../../css/cafeImg/cafe1.jpg'

const OwnerMenu = () => {

    const dispatch = useDispatch()
    const OwnerMenuInfo = useSelector((state) => state.MypageSlice.OwnerMenuInfo);
    console.log(OwnerMenuInfo)

    //드링크
    const drinkprice = useRef(null);
    const drinkname = useRef(null);

    //디저트
    const dessertprice = useRef(null);
    const dessertname = useRef(null);

    const [menuImgae, setMenuImage] = useState("")
    const MenuImage = (e) => {
        setMenuImage(e.target.files[0])
    }

    const SendCafeMenu = (item) => {
        const formData = new FormData()
        console.log(item)
        formData.append("data", new Blob([JSON.stringify(item)],
            { type: "application/json" }
        ));
        formData.append("file", menuImgae);
        dispatch(AddCafeMenu(formData))
       
    }
    // 화폐 단위 쉼표처리 
    // .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    React.useEffect(() => {
        dispatch(OwnerCafeMeunLoad())
    }, [dispatch])

    const settings = {
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slideToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };

    return (
        <>
        <div>
            {/* <StyledSlider {...settings}>
                <div><img width={'1200px'} height={'400px'} src={Cafe1} alt='slider' /></div>
            </StyledSlider> */}
            <div className="coffeeMenuDiv">
                <h1><SiBuymeacoffee className="coffeeIcon" />커피메뉴</h1>
                {OwnerMenuInfo?.drink.map((item, i) => (
                        <div className="coffeeDiv"
                            id={item.menuid}>
                            <img className="coMenuDiv" src={item.menuimg} />
                            <p>
                                {item.category}<br />
                                {item.menuname}<br />
                                <br/>
                                {item.menuprice}원<br />
                            <button>수정</button>
                            <button
                            onClick={()=>{
                                dispatch(DeleteCafeMenu(item.menuid))
                            }}
                            >삭제</button>
                            </p>
                        </div>
                ))}
                <div className="plusCoMenuDiv">
                    <input
                        onChange={(e) => {
                            MenuImage(e)
                        }}
                        type="file"
                    />
                    <input
                        ref={drinkname}
                        type="text"
                        placeholder="상품명을 입력해주세요" />
                    <input
                        ref={drinkprice}
                        type="text"
                        placeholder="가격을 입력해주세요" />
                    <button
                        onClick={() => {
                            (SendCafeMenu({
                                category: "drink",
                                menuname: drinkname.current.value,
                                menuprice: drinkprice.current.value
                            }))
                        }}
                    >추가하기</button>
                </div>
            </div>


            <div className="coffeeMenuDiv">
                <h1><GiCakeSlice className="dessertIcon" />디저트메뉴</h1>
                {OwnerMenuInfo?.dessert.map((item, i) => (
                    <>
                        <div className="coffeeDiv"
                            id={item.menuid}>
                            <img className="coMenuDiv" src={item.menuimg}/>
                            <p>
                                {item.category}<br />
                                {item.menuname}<br />
                                <br />
                                {item.menuprice}원<br />
                            <button>수정</button>    
                            <button
                            onClick={()=>{
                                dispatch(DeleteCafeMenu(item.menuid))
                            }}
                            >삭제</button>
                            </p>
                        </div>
                    </>
                ))}
                <div className="plusCoMenuDiv">
                    <input
                        type="file"
                        onChange={(e) => {
                            MenuImage(e)
                        }}
                    />
                    <input
                        ref={dessertname}
                        type="text"
                        placeholder="상품명을 입력해주세요" />
                    <input
                        ref={dessertprice}
                        type="text"
                        placeholder="가격을 입력해주세요" />
                    <button
                        onClick={() => {
                            (SendCafeMenu({
                                category: "dessert",
                                menuname: dessertname.current.value,
                                menuprice: dessertprice.current.value
                            }))
                        }}
                    >추가하기</button>
                </div>
            </div>
            <ScrollBtn/>
            </div>
        </>
    )
}

// const StyledSlider = styled(Slider)`
//    //슬라이드 컨테이너 영역
//    position: relative;
//    height: 370px; 
//    width: 100%;
//    margin-bottom: 40px;
//    box-sizing: border-box;

//   .slick-list {  //슬라이드 스크린
//     max-width: 1900px;
//     min-width: 1050px;
//     width: 0%;
//     margin: 0 auto;
//     background-size: cover;
//     background-position: 50% cover;
//     background-repeat: no-repeat;
//   }

//   .slick-slide div { //슬라이더  컨텐츠
//     cursor: pointer;
//     outline: none;
//   }
// `;

export default OwnerMenu;
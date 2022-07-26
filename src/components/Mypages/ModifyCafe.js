import React, { useState } from "react";
import OwnerHome from "./OwnerHome";
import OwnerMenu from "./OwnerMenu";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Cafe1 from '../../css/cafeImg/cafe1.jpg'
import '../../css/partCss/OwnerCafe.css';

const ModifyCafe = () => {

    const [subMenu , setSubMenu] = useState("A")
    // const settings = {
    //     infinite: true,
    //     speed: 500,
    //     slideToShow: 1,
    //     slideToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 5000
    // };

    return (
        <>
            {/* <StyledSlider {...settings}>
                <div><img width={'1200px'} height={'400px'} src={Cafe1} alt='slider' /></div>
            </StyledSlider> */}
            <div className="containerDiv">
                    <button className="categoryBox"
                    onClick={()=>{setSubMenu("A")}}>
                    홈</button>
                    <button className="categoryBox"
                    onClick={()=>{setSubMenu("B")}}>
                    메뉴</button>
            </div>
            <div>
                {
                    subMenu === "A" && <OwnerHome /> ||
                    subMenu === "B" && <OwnerMenu />
                }
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
//     width: 100%;
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

export default ModifyCafe;
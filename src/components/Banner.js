//메인페이지 배너
import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from './Button';

import Cafe1 from '../css/cafeImg/cafe1.jpg'
import Cafe2 from '../css/cafeImg/cafe2.jpg'
import Cafe3 from '../css/cafeImg/cafe3.jpg'
import Cafe4 from '../css/cafeImg/cafe4.jpg'

const Banner = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slideToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <Button place="right" margin="0 0 0 590px"/>,
        prevArrow: <Button margin="0 0 0 -590px"/>,
    };

    return (
        <StyledSlider {...settings}>
            <div><img width={'1900px'} height={'370px'} src={Cafe1} alt='slider' /></div>
            <div><img width={'1900px'} height={'370px'} src={Cafe2} alt='slider' /></div>
            <div><img width={'1900px'} height={'370px'} src={Cafe3} alt='slider' /></div>
            <div><img width={'1900px'} height={'370px'} src={Cafe4} alt='slider' /></div>
        </StyledSlider>
      );
    }

const StyledSlider = styled(Slider)`
   //슬라이드 컨테이너 영역
   position: relative;
   height: 370px; 
   width: 100%;
   margin-bottom: 40px;
   box-sizing: border-box;

  .slick-list {  //슬라이드 스크린
    max-width: 1900px;
    min-width: 1050px;
    width: 100%;
    margin: 0 auto;
    background-size: cover;
    background-position: 50% cover;
    background-repeat: no-repeat;
  }

  .slick-slide div { //슬라이더  컨텐츠
    cursor: pointer;
    outline: none;
  }
`;

export default Banner;
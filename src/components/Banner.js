//메인페이지 배너
import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from './Button';

//Banner Img import
import BannerImg from '../css/BannerImg/service.jpg';
import BannerImg2 from '../css/BannerImg/survey.jpg';

const Banner = () => {
    const settings = {
        infinite: true,
        speed: 1000,
        slideToShow: 1,
        slideToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <StyledSlider {...settings}>
            <div><img width={'1400px'} height={'500px'} src={BannerImg} alt='slider' /></div>
            <div><img width={'1400px'} height={'500px'} src={BannerImg2} alt='slider' /></div>
        </StyledSlider>
      );
    }

const StyledSlider = styled(Slider)`
   //슬라이드 컨테이너 영역
   position: relative;
   height: 500px; 
   width: 1400px;
   margin-bottom: 40px;
   box-sizing: border-box;

  .slick-list {  //슬라이드 스크린
    max-width: 1400px;
    min-width: 500px;
    margin-left: 120px;
    background-size: 50% cover;
    background-repeat: no-repeat;
  }

  .slick-slide div { //슬라이더  컨텐츠
    cursor: pointer;
    outline: none;
  }
`;

export default Banner;
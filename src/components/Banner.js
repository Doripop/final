//메인페이지 배너
import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from './Button';

const Banner = (props) => {
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
        <>
            <StyledSlider {...settings}>
                <div>
                    <img 
                        src="../css/coffee1.jpg"
                        alt="메인 배너 1"
                    >
                    </img>
                </div>
                <div>
                    <img 
                        src="../css/coffee2.jpg"
                        alt="메인 배너 2"
                    >
                    </img>
                </div>
                <div>
                    <img 
                        src="../css/coffee3.jpg"
                        alt="메인 배너 3"
                    >
                    </img>
                </div>
                <div>
                    <img 
                        src="../css/coffee4.jpg"
                        alt="메인 배너 4"
                    >
                    </img>
                </div>
            </StyledSlider>  
        </>
    );
};

const StyledSlider = styled(Slider)`
    //슬라이드 컨테이너 영역
    display: flex;
    justify-content: center;
    position: relative;
    height: 370px; 
    width: 100%;
    margin-bottom: 20px;
    overflow: hidden;
    box-sizing: border-box;

    .slick-list {  
        //슬라이드 스크린
        max-width: 1900px;
        min-width: 1050px;
        width: 1200px;
        margin: 0 auto;
        background-size: cover;
        background-position: 50% center;
        background-repeat: no-repeat;
    }
    .slick-slide div { 
        //슬라이더  컨텐츠
        cursor: pointer;
        outline: none;
    }
`;

export default Banner;
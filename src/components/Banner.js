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
                        src="https://img-cf.kurly.com/banner/main/pc/img/96d199a4-ce14-43c5-9471-8c816ccd8b64"
                        alt="메인 배너 1"
                    >
                    </img>
                </div>
                <div>
                    <img 
                        src="https://img-cf.kurly.com/banner/main/pc/img/bb14e79a-a0ff-4e5e-83a2-a1c06c48d4ae"
                        alt="메인 배너 3"
                    >
                    </img>
                </div>
                <div>
                    <img 
                        src="https://img-cf.kurly.com/banner/main/pc/img/8f6fd94e-cf21-4547-a726-b2ad7ad99e17"
                        alt="메인 배너 4"
                    >
                    </img>
                </div>
                <div>
                    <img 
                        src="https://img-cf.kurly.com/banner/main/pc/img/cc9e301f-bf05-42ca-889b-8d6d0777be4b"
                        alt="메인 배너 5"
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
        width: 1440px;
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
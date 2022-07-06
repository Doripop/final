//메인페이지 배너
import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from './Button';

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

    const imgUrl1 = require('../css/coffee1.jpg');
    const imgUrl2 = require('../css/coffee2.jpg');
    const imgUrl3 = require('../css/coffee3.jpg');
    const imgUrl4 = require('../css/coffee4.jpg');

    const items = [
    { url: imgUrl1 },
    { url: imgUrl2 },
    { url: imgUrl3 },
    { url: imgUrl4 },
    ];

    return (
        <Container>
            <StyledSlider {...settings}>
            {items.map(item => {
            return (
                <div key={item.id}>
                <ImageContainer>
                    <Image src={item.url} />
                </ImageContainer>
                </div>
                );
            })}
            </StyledSlider>  
        </Container>
    );
};

const Container = styled.div`
  overflow:hidden;
`;

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
        max-width: 1900px;
        min-width: 1050px;
        //슬라이드 스크린
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
        img {
            object-fit: scale-down;
            width: 100%;
            height: 370px;
            background-size: cover;
          }
    }
`;

const ImageContainer = styled.div`
  margin: 0 auto;
`;

const Image = styled.img`
    max-width:100%;
    max-height:100%;
`;

export default Banner;
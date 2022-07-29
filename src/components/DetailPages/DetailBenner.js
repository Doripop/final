//메인페이지 배너
import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '../Button';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DetailCafeBanner } from '../../redux/modules/AllSlice';



const DetailBanner = (images) => {
  const parm = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(DetailCafeBanner(parm.id))
  }, [dispatch, parm.id])

  const list = useSelector((state) => state.AllSlice.DetailCafeBanner);
  console.log(list?.data.imageList)


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
      {list?.data.imageList.map((item, i) => (
        <>
          <div>
            {/* {item.imageList?.map((t, i) => ())} //imageList안에 img뽑아오려고 작성한 map */}
            <img width={'520px'} height={'440px'} src={item.img} alt='slider' />
            <img width={'520px'} height={'440px'} src={item.img} alt='slider' />
            <img width={'520px'} height={'440px'} src={item.img} alt='slider' />
          </div>
        </>
      ))}
    </StyledSlider>
  );
}

const StyledSlider = styled(Slider)`
   //슬라이드 컨테이너 영역
   width: 100%;
   margin-bottom: 40px;
   box-sizing: border-box;

  .slick-list {  //슬라이드 스크린
    max-width: 100%;
    min-width: 100%;
    position: relative;
    width: 100%;
    // margin: 0 auto;
    background-repeat: no-repeat;
    background-size: contain;
    // background-position: 60% cover;
  }

  .slick-slide div { //슬라이더  컨텐츠
    cursor: pointer;
    outline: none;
    display: flex;
    width: 100%;
  }
`;

export default DetailBanner;
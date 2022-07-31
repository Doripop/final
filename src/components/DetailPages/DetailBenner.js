//메인페이지 배너
import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/partCss/Banner.css";
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
  console.log(list)

  const settings = {
    slide: 'div',
    infinite: true,
    speed: 500,
    slideToShow: 15,
    variableWidth: true,
    slideToScroll: 15,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <Button place="right" margin="0 0 0 590px"/>,
    prevArrow: <Button margin="0 0 0 -590px"/>,
  };

  return (
    <>
      <div className='bannerDiv'>
        <div className='sizeDiv'>
              <div className='cafeInfo'>
                <div className='logoDiv'>
                  <img className='cafeLogo' src={list?.data.logoimg}></img>
                </div>
                  <div className='cafeInfoDiv'>
                    <div className='cafeNameDiv'>
                      {list?.data.cafename}
                    </div>
                    <div className='star-reviewCntDiv'>
                      <span>☆☆☆☆☆{list?.data.avgstar}</span>
                      &nbsp;{list?.data.postCnt}&nbsp;reviews
                    </div>
                    <div className='open-close-time'>
                      <span>영업시간</span>&nbsp;AM {list?.data.opentime.substring(0,2)}:{list?.data.opentime.substring(2,4)}&nbsp;-&nbsp;PM {list?.data.closetime.substring(0,2)}:{list?.data.closetime.substring(2,4)}
                    </div>
                  </div>
                </div>

                {
        (() => {
          if (list?.data.imageList.length === 0)
            return (
              <>
              <div className='nullBanner'>
                </div>
              </>
            );
          else
            return (<>
                <StyledSlider className='slider' {...settings}>
                  {list?.data.imageList.map((item, i) => (
                    <>
                      <div className='imgItem'>
                        <img width={599} height={450} src={item.img} alt='slider' />
                      </div>
                      {/* {item.imageList?.map((t, i) => ())} //imageList안에 img뽑아오려고 작성한 map */}
                    </>
                  ))}
                </StyledSlider>
              </>  
            );
        }
        )()
      }
      </div>
    </div>
    
    </>

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
    // margin: 0 auto;
    background-repeat: no-repeat;
    background-size: contain;
    // background-position: 60% cover;
  }

  .slick-slide div { //슬라이더  컨텐츠
    width: fit-content;
    cursor: pointer;
    outline: none;
  }
`;

export default DetailBanner;
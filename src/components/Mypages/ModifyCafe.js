import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OwnerHome from "./OwnerHome";
import OwnerMenu from "./OwnerMenu";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import "../../css/partCss/CeoBanner.css";
import '../../css/partCss/OwnerCafe.css';
import { OwnerCafeBenner, OwnerCafeLoad } from "../../redux/modules/MypageSlice";
import CafeReg from "../CafeReg";

const ModifyCafe = () => {

    const [subMenu, setSubMenu] = useState("A")
    const dispatch = useDispatch()
    //카페베너
    const OwnerInfoBenner = useSelector((state) => state.MypageSlice.OwnerInfoBenner);
    console.log(OwnerInfoBenner, "이게 필요하다 지금")
    //테스트
    const OwnerInfoList = useSelector((state) => state.MypageSlice.OwnerInfo);
    console.log(OwnerInfoList)

    React.useEffect(() => {
        dispatch(OwnerCafeLoad())
        dispatch(OwnerCafeBenner(OwnerInfoList?.cafeid))
    }, [OwnerInfoList?.cafeid, dispatch])


    const settings = {
        slide: 'div',
        infinite: true,
        speed: 500,
        slideToShow: 15,
        variableWidth: true,
        slideToScroll: 15,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
        <Container>
            {!OwnerInfoBenner?.cafename ? (
                <>
                    <ExPage>
                        <ExBox>
                            <img 
                            style={{
                                width:"249px",
                                height:"143px",
                                marginLeft:"-55px"
                            }}
                            src="https://s3cafe.s3.ap-northeast-2.amazonaws.com/blank.png" />
                            <div
                            style={{
                                display:"flex",
                                flexDirection:"column",
                                alignItems:"center",
                                justifyContent:"center",
                                marginLeft:"-44px"
                            }}>
                            <h2>
                                아직 카페가 등록되어있지 않습니다.<br/>
                                당신의 카페를 등록해주세요!
                            </h2>
                          
                                <CafeReg/>
                         
                            </div>
                        </ExBox>
                    </ExPage>
                </>
            ) : (
                <>
                    <div className='ceoBannerDiv'>
                        <div className='ceoSizeDiv'>
                            <div className='ceoCafeInfo'>
                                <div className='ceoCafeInfoDiv'>
                                    <div className='ceoCafeNameDiv'>
                                    {OwnerInfoBenner?.cafename}
                                    </div>
                                    <div className='ceo-star-reviewCntDiv'>
                                    <span>☆☆☆☆☆{OwnerInfoBenner?.avgstar}</span>
                                    &nbsp;{OwnerInfoBenner?.postCnt}&nbsp;reviews
                                    </div>
                                    <div className='ceo-open-close-time'>
                                    <span>영업시간</span>{/* &nbsp;AM {OwnerInfoBenner?.opentime.substring(0,2)}:{OwnerInfoBenner?.opentime.substring(2,4)}&nbsp;-&nbsp;PM {OwnerInfoBenner?.closetime.substring(0,2)}:{OwnerInfoBenner?.closetime.substring(2,4)} */}
                                    </div>
                                </div>
                                </div>

                                {
                        (() => {
                        if (OwnerInfoBenner?.imageList.length === 0)
                            return (
                            <>
                            <div className='ceoNullBanner'>
                                </div>
                            </>
                            );
                        else
                            return (<>
                                <StyledSlider className='ceoSlider' {...settings}>
                                {OwnerInfoBenner?.imageList.map((item, i) => (
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
                    {/* <div className='bannerDiv'>
                        <div className='sizeDiv'>
                            <div className="div1">{OwnerInfoBenner?.cafename}</div><br />
                            <div className="div2">
                                ☆☆☆☆☆{OwnerInfoBenner?.avgstar}&nbsp;
                                <span>{OwnerInfoBenner?.postCnt}review</span> <br />
                            </div>
                                <>
                                <div className="div3">
                                    영업시간{OwnerInfoBenner?.opentime}
                                    {OwnerInfoBenner?.closetime}
                                </div>
                                </>
                                <StyledSlider {...settings}>
                                    {OwnerInfoBenner?.imageList.map((item, i) => (
                                        <>
                                            <div>
                                                <img width={599} height={450} src={item.img} alt='slider' />
                                            </div>
                                        </>
                                    ))}
                                </StyledSlider>
                        </div>
                    </div> */}
                    <div className="containerDiv">
                        <button className="categoryBox"
                            onClick={() => { setSubMenu("A") }}>
                            홈</button>
                        <button className="categoryBox"
                            onClick={() => { setSubMenu("B") }}>
                            메뉴</button>
                    </div>
                    {
                        subMenu === "A" && <OwnerHome /> ||
                        subMenu === "B" && <OwnerMenu />
                    }




                </>
            )}

        </Container>
    )
}
const StyledSlider = styled(Slider)`
   //슬라이드 컨테이너 영역
   height: 300px; 
   width: 72%;
   margin-bottom: 40px;
   box-sizing: border-box;

  .slick-list {  //슬라이드 스크린
    max-width: 1900px;
    min-width: 1050px;
    width: 0%;
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

const Container = styled.div`
    width: 69%;
    margin-left: 300px;
    margin-top: -472px;
    font-family: 'Arita-dotum-Medium';
`;

const BannerDiv = styled.div`
    position: relative;
    display : flex;
    justify-content: center;


  .div1 {
    font-family: 'Arita-dotum-Bold';
    font-size: 50px;
  }

  .div2 {
    font-size: 30px;

    & span {
        font-size: 20px;
    }
  }

  .div3 {

}

  .div4 {

}
`;


const ExPage = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
`;

const ExBox = styled.div`
    width:620px;
    height:250px;
    border: 1px solid #D9D9D9;
    display: flex;
    flex-direction : row;
    margin-top : 100px;
    align-items: center;
    justify-content: center;
`;




export default ModifyCafe;
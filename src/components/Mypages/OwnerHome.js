import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModifyOwnerCafe, OwnerCafeBenner, OwnerCafeLoad } from "../../redux/modules/MypageSlice";
import '../../css/partCss/OwnerCafeHome.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Cafe1 from '../../css/cafeImg/cafe1.jpg'
import { MdDeliveryDining } from 'react-icons/md';
import { GiShop } from 'react-icons/gi';
import { AiFillSound } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';


const OwnerHome = () => {

    const dispatch = useDispatch()


    //카페정보
    const OwnerInfoList = useSelector((state) => state.MypageSlice.OwnerInfo);
    console.log(OwnerInfoList)
    //카페베너
    const OwnerInfoBenner = useSelector((state) => state.MypageSlice.OwnerInfoBenner);
    console.log(OwnerInfoBenner)

    const intro = React.useRef(null)
    const notice = React.useRef(null)
    const [Delivery, setDelivery] = useState(false)
    // console.log(Delivery)

    React.useEffect(() => {
        dispatch(OwnerCafeLoad())
        dispatch(OwnerCafeBenner(OwnerInfoList?.cafeid))
        setDelivery(OwnerInfoList.delivery)
    }, [OwnerInfoList?.cafeid, OwnerInfoList.delivery, dispatch])

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
                <StyledSlider {...settings}>
                    <div><img width={'1200px'} height={'400px'} src={Cafe1} alt='slider' /></div>
                </StyledSlider>
                <div>
                    {OwnerInfoBenner?.avgstar} 별점<br/>
                    {OwnerInfoBenner?.cafename}카페이름 <br/>
                    {OwnerInfoBenner?.opentime}여는시간 <br/>
                    {OwnerInfoBenner?.closetime}닫는시간 <br/>
                    {OwnerInfoBenner?.postCnt} 리뷰갯수 <br/>
                    {OwnerInfoBenner?.imageList.map((item, i)=>(
                        <>
                           배너이미지 <img src = {item.logoimg} /> 
                        </>
                         
                    ))}
                    
                </div>
            </div>
            <div className="delivery">
                {/* 배달 */}
                <div className="deliveryDiv">
                    <label className="deliveryLabelOne">
                        <input
                            type="radio"
                            id="가능"
                            name="배달"
                            checked={
                                Delivery === true
                            }
                            onClick={() => {
                                setDelivery(true)
                            }}
                            value="Delivery"
                        // onChange={(e) => {}}
                        /><MdDeliveryDining className="icon"/>배달 가능 매장입니다!
                    </label>
                    <label className="deliveryLabelOne">
                        <input
                            type="radio"
                            id="불가능"
                            name="배달"
                            checked={
                                Delivery === false
                            }
                            onClick={() => {
                                setDelivery(false)
                            }}
                            value="NonDelivery"
                        // onChange={(e) => {}}
                        /><GiShop className="icon"/>매장만 이용 가능합니다!
                    </label>
                </div>
                

                {/* 가게설명 */}

                <div className="shopDiv">
                    <h3>가게 설명</h3>
                    <textarea
                        ref={intro}
                        defaultValue={OwnerInfoList?.intro}
                    />
                </div>


                {/* 사장님 공지 */}
                <div className="ceoDiv">
                    <h3><AiFillSound className="icon"/>사장님이 안내 드립니다!</h3>
                    <textarea
                        ref={notice}
                        defaultValue={OwnerInfoList?.notice}
                    />
                </div>

                {/* 위치정보 */}
                <div className="mapDiv">
                    <h3>
                        <BiMap className="icon"/>
                        주소 :{OwnerInfoList?.address}/{OwnerInfoList?.addressdetail} <br />
                        우편번호 : {OwnerInfoList?.zonenum}
                    </h3>
                    지도 + 위도{OwnerInfoList?.latitude}+경도{OwnerInfoList?.longitude}
                </div>


                <div className="buttonDiv">
                    <button
                    onClick={()=>{
                        dispatch(
                            ModifyOwnerCafe({
                                intro : intro.current.value,
                                notice : notice.current.value,
                                address : OwnerInfoList?.address,
                                addressdetail : OwnerInfoList.addressdetail,
                                zonenum : OwnerInfoList?.zonenum,
                                latitude : OwnerInfoList?.latitude,
                                longitude : OwnerInfoList?.longitude,
                                opentime : OwnerInfoBenner?.opentime,
                                closetime : OwnerInfoBenner?.closetime,
                                delivery : Delivery 
                            })
                        )
                    }}
                    >
                        수정하기
                    </button>
                    <button>
                        저장하기
                    </button>
                </div>


            </div>
        </>
    )
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

export default OwnerHome;
import React, { useRef, useState } from "react";
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


    const [page, setPage] = useState("A")

    //지도 테스트
    const options = {
        center: new window.kakao.maps.LatLng(OwnerInfoList?.latitude, OwnerInfoList?.longitude),
        level: 3,
    };


    const container = useRef(null);


    React.useEffect(() => {
        const map = new window.kakao.maps.Map(container.current, options);
        const markerPosition = new window.kakao.maps.LatLng(OwnerInfoList?.latitude, OwnerInfoList?.longitude);
        const marker = new window.kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);
    }, [OwnerInfoList?.latitude, OwnerInfoList?.longitude]);

    return (
        <>
            {page === "A" && (
                <Container>
                    <Home id={OwnerInfoList?.cafeid}>
                        {OwnerInfoList?.dilivery ?
                            (
                                <h3>
                                    <MdDeliveryDining className="icon" />배달 가능 매장입니다!
                                </h3>
                            ) : (
                                <h3>
                                    <GiShop className="icon" /> 매장만 이용 가능합니다!
                                </h3>
                            )}

                        <h1>가게설명</h1>
                        <p>{OwnerInfoList?.intro}</p>
                    </Home>
                    <Home2>
                        <h1><AiFillSound className="sound" />사장님이 안내드립니다.</h1>
                        <p>{OwnerInfoList?.notice}</p>
                    </Home2>
                    <Home3>
                        <h1><BiMap className="map" />
                            {OwnerInfoList?.address}
                            {OwnerInfoList?.addressdetail}&nbsp;
                            {OwnerInfoList?.zonenum} <br />
                        </h1>
                        <p>
                            {/* 지도 */}
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center"
                                }}>
                                <div
                                    className="map"
                                    style={{
                                        width: "686px",
                                        height: "300px",
                                    }}
                                    ref={container}
                                ></div>
                            </div>

                            {/* 지도 */}
                        </p>
                        <div className="buttonDiv">
                            <button
                                onClick={() => {
                                    setPage("B")
                                }}
                            >
                                수정하기
                            </button>
                        </div>
                    </Home3>
                </Container>)
                || page === "B" && (
                    <>
                        <div>
                            {/* <StyledSlider {...settings}>
                                <div><img width={'1200px'} height={'400px'} src={Cafe1} alt='slider' /></div>
                            </StyledSlider> */}
                            {/* <div className="shopInfo">
                                {OwnerInfoBenner?.cafename}카페이름 <br />
                                {OwnerInfoBenner?.avgstar} 별점
                                {OwnerInfoBenner?.postCnt} 리뷰갯수 <br />
                                Open {OwnerInfoBenner?.opentime}여는시간 <br />
                                Close {OwnerInfoBenner?.closetime}닫는시간 <br />
                                {OwnerInfoBenner?.imageList.map((item, i) => (
                                    <>
                                        배너이미지 <img src={item.logoimg} />
                                    </>

                                ))}

                            </div> */}
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

                                    /><MdDeliveryDining className="icon" />배달 가능 매장입니다!
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

                                    /><GiShop className="icon" />매장만 이용 가능합니다!
                                </label>
                            </div>


                            {/* 가게설명 */}

                            <div className="ceoDiv">
                                <h3>가게 설명</h3>
                                <textarea
                                    ref={intro}
                                    defaultValue={OwnerInfoList?.intro}
                                />
                            </div>


                            {/* 사장님 공지 */}
                            <div className="ceoDiv">
                                <h3><AiFillSound className="icon" />사장님이 안내 드립니다!</h3>
                                <textarea
                                    ref={notice}
                                    defaultValue={OwnerInfoList?.notice}
                                />
                            </div>

                            {/* 위치정보 */}
                            <div className="mapDiv">
                                <h3>
                                    <BiMap className="icon" />
                                    주소 :{OwnerInfoList?.address}/{OwnerInfoList?.addressdetail} <br />
                                    우편번호 : {OwnerInfoList?.zonenum}
                                </h3>
                                지도 + 위도{OwnerInfoList?.latitude}+경도{OwnerInfoList?.longitude}
                            </div>


                            <div className="buttonDiv">
                                <button
                                    onClick={() => {
                                        dispatch(
                                            ModifyOwnerCafe({
                                                intro: intro.current.value,
                                                notice: notice.current.value,
                                                address: OwnerInfoList?.address,
                                                addressdetail: OwnerInfoList.addressdetail,
                                                zonenum: OwnerInfoList?.zonenum,
                                                latitude: OwnerInfoList?.latitude,
                                                longitude: OwnerInfoList?.longitude,
                                                opentime: OwnerInfoBenner?.opentime,
                                                closetime: OwnerInfoBenner?.closetime,
                                                delivery: Delivery
                                            })
                                        );
                                        setPage("A")
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
                )}





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
    position: relative;
    font-family: 'Arita-dotum-Medium';
`;


const Home = styled.div`
    position: relative;

    margin: 0px auto;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    border-bottom: solid 1px black;

    & h1 {
        margin-left: 40px;
    }

    & p {
        margin-left: 40px;
    }

    & h3 {
        padding: 10px;
        border-bottom: solid 1px black;
    }
`;

const Home2 = styled.div`
    position: relative;
    margin: 0px auto;
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    border-bottom: solid 1px black;

    word-break:break-all;

    .sound {
        color: #3FC275;
    }

    & p {
        margin-left: 40px;
    }
`;

const Home3 = styled.div`
    position: relative; 

    margin: 0px auto;
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;


    .map {
        color: #3FC275;
    }
`;
export default OwnerHome;
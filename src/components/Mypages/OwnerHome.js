import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModifyOwnerCafe, OwnerCafeBenner, OwnerCafeLoad } from "../../redux/modules/MypageSlice";
import styled from "styled-components";



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


    return (
        <>
            <div>
                배너부분 만들어주세요 
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
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                }}>
                {/* 배달 */}
                <div
                    style={{ display: "flex", flexDirection: "row" }}>
                    <label
                        style={{ display: "flex", flexDirection: "row" }}>
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
                        />배달 가능 매장입니다!
                    </label>
                    <label
                        style={{ display: "flex", flexDirection: "row" }}>
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
                        />매장만 이용 가능합니다!
                    </label>
                </div>

                {/* 가게설명 */}

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column"
                    }}>
                    <h3>가게 설명</h3>
                    <textarea
                        ref={intro}
                        defaultValue={OwnerInfoList?.intro}
                    />
                </div>


                {/* 사장님 공지 */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column"
                    }}>
                    <h3>사장님이 안내 드립니다!</h3>
                    <textarea
                        ref={notice}
                        defaultValue={OwnerInfoList?.notice}
                    />
                </div>

                {/* 위치정보 */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column"
                    }}>
                    <h3>
                        주소 :{OwnerInfoList?.address}/{OwnerInfoList?.addressdetail} <br />
                        우편번호 : {OwnerInfoList?.zonenum}
                    </h3>
                    지도 + 위도{OwnerInfoList?.latitude}+경도{OwnerInfoList?.longitude}
                </div>


                <div
                    style={{ display: "flex", flexDirection: "row" }}>

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
                        수정
                    </button>
                    <button>
                        저장
                    </button>
                </div>


            </div>
        </>
    )
}



export default OwnerHome;
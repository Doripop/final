import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import DaumPostCode from "react-daum-postcode"
import { useDispatch } from "react-redux"
import { instance } from "../shard/axios"


const CafeReg = () => {


  const [opened, setOpened] = useState(false);
  // 주소 모달창 여닫기
  // const modalClose = useCallback(() => {
  //   setOpened(!opened);
  // }, [opened]);
  const modalClose = () => {
    setOpened(!opened);
  };


  //상세주소 입력값
  const Detail_Address = useRef(null);
  const Cafe_Name = useRef(null);



  // 주소 찾기 값 input에 전달
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [address, setAddress] = useState("");
  const [zone, setZone] = useState("");
  const [query, setQuery] = useState("");
  const { daum } = window;
  const onComplete = (data) => {
    setAddress(data.address);
    setOpened(false);
    Promise.resolve(data)
      .then((o) => {
        console.log(o);
        const { address } = data;
        const { zonecode } = data;
        const { query } = data;
        setZone(zonecode);
        setQuery(query);
        // console.log(address, zonecode, query);
        return new Promise((resolve, reject) => {
          const geocoder = new daum.maps.services.Geocoder();
          geocoder.addressSearch(address, (result, status) => {
            if (status === daum.maps.services.Status.OK) {
              const { x, y } = result[0];
              resolve({ lat: y, lon: x });
            } else {
              reject();
            }
          });
        });
      })
      .then((result) => {
        console.log(result); // 위, 경도 결과 값
        const lat = result.lat;
        const lon = result.lon;
        setLatitude(lat);
        setLongitude(lon);
      });
  };
  console.log(latitude, longitude, address, zone, query)
  window.setTimeout(() => {
    console.log(Detail_Address.current.value)
  }, 6000)

  const CafeAdd = async () => {
    if(!Cafe_Name.current.value){
      return alert("카페명을 입력해주세요")
    }else if(!address || !zone){
      return alert("우편주소를 입력해주세요")
    }else if(!Detail_Address.current.value){
      return alert("상세주소를 입력해주세요")
    }else{
      try {
      const { data } = await instance.post("user-login", {
        name: Cafe_Name.current.value,
        address: address,
        addressDetail: Detail_Address.current.value,
        zoneNum: zone,
        Latitude : latitude,
        Longitude : longitude,
        oldAddress : query
      });
    } catch (error) {
      window.alert(error)
    }
    }
    
  }



  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "550px" }}>

        <h1>당신의 카페를 등록해주세요!</h1>

        <h2>상호명(회원가입 시 받은값)</h2>
        <input ref={Cafe_Name} type="text" placeholder="카페이름" />
        <p>우편번호 찾기</p>
        <div style={{ display: "flex" }}>
          <input
            placeholder="주소를 입력해주세요."
            name="address"
            onChange={(e) => e.current.value}
            value={zone}
            required
          ></input>
          <button
            onClick={() => {
              modalClose();
            }}
          >
            우편번호 찾기
          </button>
        </div>
        {opened ? (
          <div>
            <DaumPostCode style={postCodeStyle} onComplete={onComplete} />
          </div>
        ) : null}
        <input type="text" placeholder="도로명 주소" value={address} />
        <input ref={Detail_Address} type="text" placeholder="상세 주소를 입력해주세요" />
      </div>
      <div>
        <span>*카페는 관리자 승인 후 업로드 됩니다.</span>
        <span>*카페 승인은 최소 1시간 소요 될 수 있습니다.</span>
      </div>

      <button 
      onClick={()=>{CafeAdd()}}
      >카페신청하기</button>
    </>
  )
};

const postCodeStyle = {
  padding: "30px",
  background: "white",
  width: "40%",
  // maxWidth: "300px",
  height: "500px",
  border: "2px solid #d2d2d2",
  position: "absolute",
  // backgroundColor: "orange",
};

export default CafeReg;
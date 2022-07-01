import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import DaumPostCode from "react-daum-postcode"


const CafeReg = () => {

    const [opened, setOpened] = useState(false);
    // 주소 모달창 여닫기
    const modalClose = useCallback(() => {
      setOpened(!opened);
    }, [opened]);
    // 주소 찾기 값 input에 전달
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [address, setAddress] = useState("");
    const { daum } = window;
    const onComplete = (data) => {
      setAddress(data.address);
      setOpened(false);
      Promise.resolve(data)
        .then((o) => {
          const { address } = data;
  
          return new Promise((resolve, reject) => {
            const geocoder = new daum.maps.services.Geocoder();
            console.log(geocoder)
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
        console.log(latitude, longitude)
    };
      return (
          <>
          <p>주소</p>
          <div style={{ display: "flex" }}>
            <input
              placeholder="주소를 입력해주세요."
              name="address"
              onChange={(e) => e.current.value}
              value={address}
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
import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import DaumPostCode from "react-daum-postcode"
import { useDispatch } from "react-redux"
import { instance } from "../axios"
import {AiOutlineClose} from "react-icons/ai"

const CafeReg = (props) => {
  //modal
  const { open, close, header } = props;

  const [opened, setOpened] = useState(false);
  // 주소 모달창 여닫기
  // const modalClose = useCallback(() => {
  //   setOpened(!opened);
  // }, [opened]);
  const modalClose = () => {
    setOpened(!opened);
  };
  const role = localStorage.getItem("role")
  const cafename = localStorage.getItem("cafename")
  // console.log(cafename)

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
  // console.log(latitude, longitude, address, zone, query)
  // window.setTimeout(() => {
  //   console.log(Detail_Address.current.value)
  // }, 6000)

  const CafeAdd = async () => {
    if (!Cafe_Name.current.value) {
      return alert("카페명을 입력해주세요")
    } else if (!address || !zone) {
      return alert("우편주소를 입력해주세요")
    } else if (!Detail_Address.current.value) {
      return alert("상세주소를 입력해주세요")
    } else {
      try {
        if(role == "user") {
          const { data } = await instance.post("api/user/regist-cafe", {
            name: Cafe_Name.current.value,
            address: address,
            addressDetail: Detail_Address.current.value,
            zoneNum: zone,
            Latitude: latitude,
            Longitude: longitude,
            oldAddress: query
          });
        } else {
          const { data } = await instance.post("api/owner/regist-cafe", {
            address: address,
            addressDetail: Detail_Address.current.value,
            zoneNum: zone,
            Latitude: latitude,
            Longitude: longitude,
            oldAddress: query
          });
        }
        // console.log(data);
        
      } catch (error) {
        // console.log(error);
        window.alert(error)
      }
    }
    alert("등록이 완료되었습니다!")
    close();
  }



  return (
    <>

      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <>
            <section>
              <div 
              onClick={close}
              style={{display:"flex",justifyContent:"flex-end"}}
              >
                  <span style={{fontSize:"25px", cursor: "pointer"}}><AiOutlineClose /></span>
              </div>
             
              <Header>
                {header}
              </Header>
              <Body>
                {role == "user" ? (
            <div>
              <h1>원하시는 카페를 신청해주세요!</h1>
              상호명
            <input ref={Cafe_Name} type="text" placeholder="카페이름" />
            </div>
            ):(
              <div>
                 등록하신 카페명 : {cafename}
              </div>
              )}
                {/* <h1>원하시는 카페를 등록해주세요!</h1>
                <h3>상호명</h3>
                <InputBox ref={Cafe_Name} type="text" placeholder="카페이름 + 지점" /> */}
                <h3>우편번호 찾기</h3>
                <div style={{ display: "flex" }}>
                  <InputBox
                    placeholder="우편번호"
                    name="address"
                    onChange={(e) => e.current.value}
                    value={zone}
                    required
                  ></InputBox>
                  <AdrBtn
                    onClick={() => {
                      modalClose();
                    }}
                  >
                    우편번호 찾기
                  </AdrBtn>
                </div>
                {opened ? (
                  <div>
                    <DaumPostCode style={postCodeStyle} onComplete={onComplete} />
                  </div>
                ) : null}
                <InputBox type="text" placeholder="도로명 주소" value={address} />
                <InputBox ref={Detail_Address} type="text" placeholder="상세주소를 입력해주세요" />

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>*카페는 관리자 승인 후 업로드 됩니다.</span>
                  <span>*카페 승인은 최소 1시간 소요 될 수 있습니다.</span>
                </div>
              </Body>
              <BtnBox>
                 <BtnAdd
                onClick={() => { 
                  CafeAdd();
                }}
              >카페신청하기
              </BtnAdd>
              </BtnBox>
                
            
             
            </section>
          </>
        ) : null}
      </div>
    </>
  )
};

const postCodeStyle = {
  // padding: "30px",
  background: "white",
  width: "305px",
  // maxWidth: "300px",
  height: "205px",
  border: "2px solid #d2d2d2",
  position: "inherit",
  // backgroundColor: "orange",
};

const Header = styled.header`
    display: flex; 
    justify-content: center;
    height: 40px;
    text-align: center;
    font-size: 30px;
    margin-top: 50px; 
`;

const Body = styled.body`
    display: flex; 
    flex-direction: column;
    padding: 30px;
`;

const InputBox = styled.input`
  width: 290px;
  height: 40px;
  margin-bottom: 10px;

  border: 2px solid #F0F4C3;
  outline:none;
`;

const AdrBtn = styled.button`
  width: 120px;
  height: 45px;
  margin-left: 5px;

  background-color: black;
  color: wheat;
  font-size: 10px;
`;

const BtnBox = styled.div`
  display : flex;
  align-items : center;
  justify-content : center;
  margin-top : 20px;
`;

const BtnAdd = styled.button`
  width: 150px;
  height: 51px;
  background-color: black;
  color: wheat;
  font-size: 20px;
`;

export default CafeReg;
import React from 'react';
import styled from 'styled-components'
import Logo_Cat from "../../css/Logo_Cat_lattee.png"
//icon import
import {AiFillGithub} from 'react-icons/ai';    //github
import {AiOutlineMail} from 'react-icons/ai';   //mail
import {IoLogoInstagram} from 'react-icons/io'; //instar
import {SiNotion} from 'react-icons/si'; //notion
import tistory from '../../css/tstory.svg';
import velog from '../../css/velog.svg';

const Footer = (props) => {
  return (
    <Foot>
      <>
        <FooterLeft>
          <div>
            <h2><img src={Logo_Cat}/> BLANK</h2>
            <p>
              항상 가는 지긋지긋한 프렌차이즈말고,<br/>
              나만 아는, 나만의 개인카페를 만나고<br/>
              싶은 분들을 위한 BLANK입니다.
            </p>
          </div>
          <div style={{display: "flex", marginTop: -70}}>
            <a>
              <AiOutlineMail style={{ padding: 7, color: "#F2F2F2"}}/>
            </a>
            <p style={{ paddingTop: 5, fontSize: 18, marginTop: 110, marginLeft: 15, cursor: "default"}}>cafesns.blank@gmail.com</p>
          </div>
          <div style={{display: "flex"}}>
            <a href='#'>
              <IoLogoInstagram style={{ padding: 5, color: "#F2F2F2", fontSize: 40}}/>
            </a>
            <a href='#' style={{marginLeft: 25}}>
              <AiFillGithub className='back' style={{ padding: 5, color: "#F2F2F2", fontSize: 40}}/>
            </a>
            <a href='https://github.com/Doripop/final.git' style={{marginLeft: 25}}>
              <AiFillGithub className='front' style={{ padding: 5, color: "#F2F2F2", fontSize: 40}}>Front-Git</AiFillGithub>
            </a>
          </div>
        </FooterLeft>
        <FooterRight>
          <FooterRightDivOne>
            <div>
              <h2>BE 심규홍</h2>
              <p>담당업무</p>
              <p>kyuhong99@gmail.com</p>
              <div style={{display: "flex"}}>
                <a href='https://github.com/KorOnechild' style={{marginLeft: 3, marginRight: 18}}>
                <AiFillGithub style={{ padding: 2.2, color: "#F2F2F2", fontSize: 28}}/>
                </a>
                <a href='https://velog.io/@onechild' >
                  <img src={velog} style={{ width: 32, height: 32, cursor: "pointer"}}/>
                </a>
              </div>
            </div>
            <div>
              <h2>BE 박종인</h2>
              <p>담당업무</p>
              <p>jip95@naver.com</p>
              <div style={{display: "flex"}}>
                <a href='https://github.com/waryongc' style={{marginLeft: 3, marginRight: 18}}>
                <AiFillGithub style={{ padding: 2.2, color: "#F2F2F2", fontSize: 28}}/>
                </a>
                <a href='https://waryongc.tistory.com/'>
                  <img src={tistory} style={{ width: 32, height: 32, cursor: "pointer"}}/>
                </a>
              </div>
            </div>
            <div>
              <h2>BE 김승찬</h2>
              <p>담당업무</p>
              <p>eccsck@gmail.com</p>
              <div style={{display: "flex"}}>
                <a href='https://github.com/SeungchanKKK' style={{marginLeft: 3, marginRight: 18}}>
                <AiFillGithub style={{ padding: 2.2, color: "#F2F2F2", fontSize: 28}}/>
                </a>
                <a href='https://eccsck.tistory.com/'>
                  <img src={tistory} style={{ width: 32, height: 32, cursor: "pointer"}}/>
                </a>
              </div>
            </div>
          </FooterRightDivOne>
          <FooterRightDivTwo>
            <div>
              <h2>FE 강대원</h2>
              <p>담당업무</p>
              <p>kps7248@naver.com</p>
              <div style={{display: "flex"}}>
                <a href='https://github.com/Doripop ' style={{marginLeft: 3, marginRight: 18}}>
                <AiFillGithub style={{ padding: 2.2, color: "#F2F2F2", fontSize: 28}}/>
                </a>
                <a href='https://doripop.tistory.com/' >
                  <img src={tistory} style={{ width: 32, height: 32, cursor: "pointer"}}/>
                </a>
              </div>
            </div>
            <div>
              <h2>FE 이성일</h2>
              <p>담당업무</p>
              <p>a01040579861@gmail.com</p>
              <div style={{display: "flex"}}>
                <a href='https://github.com/a01040579861' style={{marginLeft: 3, marginRight: 18}}>
                <AiFillGithub style={{ padding: 2.2, color: "#F2F2F2", fontSize: 28}}/>
                </a>
                <a href='https://outgoing-whippet-bb7.notion.site/09740ff308514e40aeee54b634ad1b74' style={{marginLeft: 3, marginRight: 18}}>
                <SiNotion style={{ padding: 3, color: "#F2F2F2", fontSize: 25}}/>
                </a>
              </div>
            </div>
            <div>
              <h2>DE 최서윤</h2>
              <p>담당업무</p>
              <p>em10807@naver.com</p>
              <a href='#' style={{marginLeft: 3}}>
              <IoLogoInstagram style={{ padding: 2.2, color: "#F2F2F2", fontSize: 28}}/>
              </a>
            </div>
          </FooterRightDivTwo>
            <FooterBottom>
              <p>2022 BLANK Co.All rights Reserved.</p>
            </FooterBottom>
        </FooterRight>
      </>
    </Foot>
  );
};

const Foot = styled.div`
  width: 90%;
  height: 700px;
  border: none;
  margin: 0 auto;
  padding-left: 10%;
  background-color: #F2F2F2;
  display: flex;
  flex-direction: row;
  margin-top: 30%;
`;

const FooterLeft = styled.div`
  width: 500px;
  border: none;
  margin: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #19221F;

  & div {
    display: block;
    margin-top: -60px;
  }

  & img {
    width: 90px;
    height: 90px;
  }

  & h2 {
    font-size: 50px;
    font-family: 'Arita-dotum-Medium';
  }

  & p {
    font-family: 'Arita-dotum-Medium';
  }

  & a {
    width: 50px;
    height: 50px;
    font-size: 35px;
    display: block;
    border-radius: 30px;
    border: 1px solid #3FC275;
    background-color: #3FC275;
    margin-top: 100px;
    margin-left: 10px;
    cursor: pointer;
    color: #19221F;
  }
`;

const FooterRight = styled.div`
  width: 499px;
  border: none;
  margin: 25px;
  margin-top: 50px;
  padding: 40px;
  padding-right: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: #19221F;

`;

const FooterRightDivOne = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  align-items: center;
  color: #19221F;
  margin-right: 70px;

  & div {
    margin-right: 30px;
  }

  & h2 {
    font-size: 18px;
    color: #19221F;
    font-family: 'Arita-dotum-Medium';
  }

  & p {
    margin-top: -15px;
    font-size: 16px;
    font-family: 'Arita-dotum-Medium';
  }

  & a {
    width: 32px;
    height: 32px;
    display: block;
    border-radius: 30px;
    border: 1px solid #3FC275;
    background-color: #3FC275;
    margin-left: 0px;
    cursor: pointer;
    color: #19221F;
  }
`;

const FooterRightDivTwo = styled.div`
display: flex;
flex-direction: row;
position: relative;
align-items: center;
color: #19221F;

& div {
  margin-right: 30px;
}

& h2 {
  font-size: 18px;
  color: #19221F;
  font-family: 'Arita-dotum-Medium';
}

& p {
  margin-top: -15px;
  font-size: 16px;
  font-family: 'Arita-dotum-Medium';
}

& a {
  width: 32px;
  height: 32px;
  display: block;
  border-radius: 30px;
  border: 1px solid #3FC275;
  background-color: #3FC275;
  margin-left: 0px;
  cursor: pointer;
  color: #19221F;
}
`;

const FooterBottom = styled.div`
  width: 1261px;
  height: 25px;
  border-top: 1px solid #D9D9D9;
  text-align: end;
  margin-left: -121%;

  & p {
    font-size: 14px;
    color: #3FC275;
    margin-top: 11px;
  }
`;
export default Footer;
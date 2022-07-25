import React from 'react';
import styled from 'styled-components'
import Logo_Cat from "../css/Logo_Cat_lattee.png"
import {AiFillGithub} from 'react-icons/ai';

const Footer = (props) => {
  return (
      <Foot>
        <FooterLeft>
          <div>
            <h2><img src={Logo_Cat}/>BLANK</h2>
          </div>
          <div>
            <button>컨텍페이지 버튼</button>
            <button>컨텍페이지 버튼</button>
            <button>컨텍페이지 버튼</button>
            <button>컨텍페이지 버튼</button>
            <button>컨텍페이지 버튼</button>
          </div>
          <div>
            <p>
              프랜차이즈는 그만..!<br/> 맛과 분위기 서비스까지 다 갖춰진 개인카페 홍보 웹페이지<br/>
              당신이 방문한 카페를 남기고, 이 서비스를 이용하는 모든 사용자들과 카페를 공유해보세요!
            </p>
          </div>
          <div>
            <h2>
              2022 BLANK Co.All rights Reserved.
            </h2>
          </div>
        </FooterLeft>
        <FooterRight>
          <FooterRightDivOne>
            <div>
              <img src={Logo_Cat}/>
            </div>
            <div>
              <div>심규홍</div>
              <div>BackEnd</div>
              <a href='https://github.com/KorOnechild'><AiFillGithub/></a>
            </div>
            <div>
              <img src={Logo_Cat}/>
            </div>
            <div>
              <div>김승찬</div>
              <div>BackEnd</div>
              <a href='https://github.com/SeungchanKKK'><AiFillGithub/></a>
            </div>
            <div>
              <img src={Logo_Cat}/>
            </div>
            <div>
              <div>박종인</div>
              <div>BackEnd</div>
              <a href='https://github.com/waryongc'><AiFillGithub/></a>
            </div>
          </FooterRightDivOne>
          <FooterRightDivTwo>
            <div>
              <img src={Logo_Cat}/>
            </div>
            <div>
              <div>강대원</div>
              <div>FrontEnd</div>
              <a href='https://github.com/Doripop'><AiFillGithub/></a>
            </div>
            <div>
              <img src={Logo_Cat}/>
            </div>
            <div>
              <div>이성일</div>
              <div>FrontEnd</div>
              <a href='https://github.com/a01040579861'><AiFillGithub/></a>
            </div>
            <div>
              <img src={Logo_Cat}/>
            </div>
            <div>
              <div>최서윤</div>
              <div>Design</div>
              <a href='https://www.naver.com'><AiFillGithub/></a>
            </div>
          </FooterRightDivTwo>
        </FooterRight>
      </Foot>
  );
};

const Foot = styled.div`
  width: 100%;
  border: none;
  background-color: #19221f;
  letter-spacing: -0.2px;
  display: flex;
  flex-direction: row;
  margin-top: 30%;
  position: relative;
`;

const FooterLeft = styled.div`
  width: 100%;
  border: none;
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid white;
  color: white;

  & img {
    width: 30px;
    height: 30px;
  }

  & button {
    border: 1px solid white;
    background-color: transparent;
    margin: 10px;
    cursor: pointer;
    color: white;
  }
`;

const FooterRight = styled.div`
  width: 100%;
  border: none;
  margin: 30px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: white;

`;

const FooterRightDivOne = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  align-items: center;
  color: white;

  & div {
    margin-right: 30px;
  }

  & img {
    width: 50px;
    height: 50px;
  }

  & a {
    font-size: 20px;
    color: white;
  }
`;

const FooterRightDivTwo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  & div {
    margin-right: 30px;
  }
  
  & img {
    width: 50px;
    height: 50px;
  }

  & a {
    font-size: 20px;
    color: white;
  }
`;
export default Footer;
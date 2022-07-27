import React from 'react';
import styled from 'styled-components';

const FooterRight = (props) => {

    return (
      <React.Fragment>
        <FootR>
          <CompanyInfo>
            법인명 (상호) : BLANK
            <br />
            통신판매업 : 제 2018-서울강남-01646호 | 개인정보보호책임자 : 심규홍
            <br />
            주소 : 대한민국 어딘가 | 대표이사 : 강대원
            <br />
            팩스:070-7500-6098 | 이메일 : help@kurlycorp.com
            <Corp>© KURLY CORP. ALL RIGHTS RESERVED</Corp>
          </CompanyInfo>
        </FootR>
      </React.Fragment>
    );
}

const FootR = styled.div`
padding : 29px 0 2px;
font-weight : 700;
font-size : 20px;
color : #333;
line-height : 24px;
width:  50%;
`;

const Company = styled.div`
    over-flow : hidden;
    padding-bottom : 29px;
    display : flex;
    margin : 23.4px 0px 0px 0px;
`;

const SiteInfo = styled.a`
    padding-right : 16px;
    font-size : 14px;
    color : #333;
    line-height : 18px;
    &: hover {
      cursor : pointer;
    }
`;

const CompanyInfo = styled.div`
padding : 10px 0;
text-align : left;
font-size : 13px;
color : #999999;
`;

const InfoColor = styled.span`
    color : #5f0080;
    &: hover {
        cursor : pointer;
    }
`;

const Corp = styled.div`
    font-size : 12px;
    padding-top : 35px;
`;


export default FooterRight;
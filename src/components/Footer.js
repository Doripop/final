import React from 'react';
import styled from 'styled-components'
import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';

// 생각보다 푸터의 정보가 많아서, FooterLeft와 FooterRight로 나누어 구성했습니다.

const Footer = (props) => {
  return (
    <React.Fragment>
      <Hr></Hr>
      <Foot>
        <FooterLeft />
        <FooterRight />
      </Foot>
    </React.Fragment>
  );
};
const Hr = styled.hr`
  border-top : 1em solid white;
  width :1600px;
`
const Foot = styled.div`
  width: 1050px;
  margin: auto;
  padding-bottom: 60px;
  font-weight: 400;
  letter-spacing: -0.2px;
  display: flex;
  `
export default Footer;
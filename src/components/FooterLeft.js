import React from 'react';
import styled from 'styled-components'

const FooterLeft = (props) => {

    return (
      <React.Fragment>
          <Titcc>
            <Happy>고객행복센터</Happy>
            <FooterL>
              <h2>
                <Tit>1644-1107</Tit>
              </h2>
              <RightContents>
                <DD>365고객센터</DD>
                <Dd>오전 7시 - 오후 7시</Dd>
              </RightContents>
            </FooterL>
            <FooterL1>
              <h3>
                <Kakao>카카오톡 문의</Kakao>
              </h3>
              <RightContents>
                <DD>365고객센터</DD>
                <Dd>오전 7시 - 오후 7시</Dd>
              </RightContents>
            </FooterL1>
            <FooterL1>
              <h3>
                <Kakao>1:1 문의</Kakao>
              </h3>
              <RightContents>
                <DD>24시간 접수 가능</DD>
                <Dd>고객센터 운영시간에 순차적으로 답변해드리겠습니다.</Dd>
              </RightContents>
            </FooterL1>
          </Titcc>
      </React.Fragment>
    );
}

const Titcc = styled.div`
    over-flow : hidden
    width:  50%
`;

const Happy = styled.h3`
    text-align : left;
    padding : 29px 0 2px;
    font-weight : 700;
    font-size : 20px;
    color : #333;
    line-height : 24px;
`;

const FooterL = styled.div`
    display : flex;
    overflow : hidden;
    padding-top : 5px;
    height : 77px;
`;

const FooterL1 = styled.div`
    display : flex;
    overflow : hidden;
     height : 77px;
`;

const RightContents = styled.dl`
    font-size : 14px;
    color : #333;
    line-hegiht : 22px;
    letter-spacing: -.2px;
    margin : 20px 0px 4px
`;

const Tit = styled.span`
    padding-top : 4px;
    font-weight : 600;
    font-size : 36px;
    color : #333;
    line-height : 36px;
    letter-spacing : -.5px;
    white-space : nowrap;
`;

const DD = styled.dd`
    text-align : left
`;

const Dd = styled.dd`
    color : #999999
`;

const Kakao = styled.a`
    height : 37px;
    padding-top : 10px;
    border : 1px solid #e3e3e3;
    border-radius : 3px;
    font-weight : 700;
    font-size : 14px;
    color : #333;
    line-height : 22px;
    text-align : center;
    float : left;
    width : 150px;
    &: hover {
      cursor : pointer;
    }  
`;

export default FooterLeft;
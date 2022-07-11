import React from 'react';
import styled from 'styled-components';
import CafeReg from './CafeReg';
//Icon import
import { FiSearch } from 'react-icons/fi'
import Review from './Review';

const NavBtn = () => {

    return (
        <>
            <TopMenu>
                <CafeReg />
                <Review />
            </TopMenu>

            <BottomMenu>
                <p>근처에 있는카페!</p>
                <Select>
                    <option>선택</option>
                    <option>서울</option>
                    <option>인천</option>
                    <option>경기도</option>
                </Select>


                <Alignment>
                    <AliBtn>
                        좋아요
                    </AliBtn>
                    <AliBtn>
                        별점순
                    </AliBtn>
                    <AliBtn>
                        최신순
                    </AliBtn>
                </Alignment>
            </BottomMenu>
        </>
    );
}

const TopMenu = styled.span`
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    padding: 50px;
`;

const Select = styled.select`
    width: 100px;
    height: 30px;
    border: 1px solid #00E676;
    color: #00E676;
`;

const BottomMenu = styled.div`
    width: 1200px;
    height: 100px;
    margin: 0px auto;
    margin-bottom: 30px;

    display: flex;
    align-items: center;
`;

const Alignment = styled.div`
    margin-left: 790px;
`;

const AliBtn = styled.button`
    width: 60px;
    height: 20px;
    outline: none;
    margin-left:3px;

    background:transparent;

    border-left-width:0; 
    border-right-width:0; 
    border-top-width:0;
    border-bottom-width:1;

    cursor: pointer;

    &: hover {
        font-weight: bold;
    }
`;

const SearchInput = styled.input`
    width: 800px;

    border: 1px solid #bbb;
    border-radius: 8px;
    padding: 10px 12px;
    font-size: 14px;
`;

const SearchIcon = styled.span`
    width: 17px;
    margin: 0 auto;

    position : absolute;
    top: 10px;
    right: 5px;
    cursor: pointer;
`;

export default NavBtn;
import React from 'react';
import styled from 'styled-components';
import CafeReg from './CafeReg';
//Icon import
import { FiSearch } from 'react-icons/fi'

const NavBtn = () => {

    return (
        <>
        <Container>
            <span>
                OO동 근처에 있는카페!
                <button>
                    위치변경
                </button>
                <CafeReg />
                <button>
                    리뷰작성
                </button>
                <button>
                    별점순
                </button>
                <button>
                    최신순
                </button>
            </span>
        </Container>
        </>
    );
}
const Container = styled.div`
    width: 720px;
    height: 100px;
    margin: 0px auto;
    margin-bottom: 30px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;

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
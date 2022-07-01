import React from 'react';
import styled from 'styled-components';

//Icon import
import { FiSearch } from 'react-icons/fi'

const Search = () => {
    return (
        <>
        <Container>
            <SearchInput type="text" placeholder="서울특별시 용산구, 42 디저트카페">
            </SearchInput><SearchIcon><FiSearch/></SearchIcon>
        </Container>
        </>
    );
}
const Container = styled.div`
    width: 720px;
    height: 40px;
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

export default Search;
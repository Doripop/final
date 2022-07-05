import React from "react";
import styled from "styled-components";

import { MdDeliveryDining } from 'react-icons/md';
import { AiFillSound } from 'react-icons/ai';

const DetailHome = () => {
    return (
        <>
            <Home>
                <h1><MdDeliveryDining/>title1</h1>
            </Home>
            <Home2>
                <h1><AiFillSound/>title2</h1>
                <p>content</p>
            </Home2>
            <Home3>
                <h1><MdDeliveryDining/>title3</h1>
                <p>Map</p>
            </Home3>
        </>
    );
}

const Home = styled.div`
    width: 1160px;
    height: 100%;

    margin: 0px auto;
    padding: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    border-bottom: solid 1px black;
`;

const Home2 = styled.div`
    width: 1160px;
    height: 100%;

    margin: 0px auto;
    padding: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    border-bottom: solid 1px black;

    word-break:break-all;
`;

const Home3 = styled.div`
    width: 1160px;
    height: 100%;

    margin: 0px auto;
    padding: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    border-bottom: solid 1px black;
`;

export default DetailHome;
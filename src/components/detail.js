import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import DetailHome from "./DetailHome";
import DetailMenu from "./DetailMenu";
import DetailReview from "./DetailReview";

const Detail = () => {
    return (
        <>
            <Banner/>
            <Container>
                <div>
                    <button>홈</button>
                    <button>메뉴</button>
                    <button>리뷰</button>
                </div>
            </Container>
            <DetailHome/>
            <DetailMenu/>
            <DetailReview/>
        </>
    );
}
const Container = styled.div`
    width: 1200px;
    height: 100%;

    margin: 0px auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    position: relative;
    border-bottom: solid 1px black;
    
    & button {
        width: 200px;
        font-size: 30px;
        margin-right: 40px;
    }
`;

export default Detail;
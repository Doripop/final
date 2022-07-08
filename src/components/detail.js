import React, { useState } from "react";
import styled from "styled-components";
import Banner from "./Banner";
import DetailHome from "./DetailPages/DetailHome";
import DetailMenu from "./DetailPages/DetailMenu";
import DetailReview from "./DetailPages/DetailReview";

const Detail = () => {


    const [Menu, setMenu] = useState("A")

    return (
        <>
            <Banner />
            <Container>
                <div>
                    <button
                    onClick={()=>{setMenu("A")}}
                    >홈</button>
                    <button
                    onClick={()=>{setMenu("B")}}
                    >메뉴</button>
                    <button
                    onClick={()=>{setMenu("C")}}
                    >리뷰</button>
                </div>
            </Container>
            <div>
                {
                Menu === "A" && <DetailHome /> ||
                Menu === "B" && <DetailMenu /> ||
                Menu === "C" && <DetailReview />
            }
            </div>
            
  
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
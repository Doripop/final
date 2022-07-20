import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { MainReview } from '../redux/modules/AllSlice';
import { useNavigate } from "react-router-dom";

const CardList = (props) => {
    const city = useSelector((state) => state.AllSlice.MainReviewList);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    React.useEffect(()=>{
        dispatch(MainReview(city))
    },[dispatch])
    
    console.log(city);
    return (
        <>
        <Container>
            {city?.map((item)=>(
            <>
                <Content
                onClick={() => {navigate(`/detail/${city?.cafeid}`)}}
                key={item.postid}
                >
                    <ContentImg src={item.img}/>
                    <ContentTitle>{item.cafename}</ContentTitle>
                </Content>
            </>
            ))}
        </Container>
        </>
    );
}

const Container = styled.div`
    width: 1140px;
    height: 380px;
    margin: 0 auto;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    position: relative;
`;

const Content = styled.div`
    width: 380px;
    height: 380px;
    border: none;
    margin-right:0px;

    padding: 10px;
    background-size: cover;
    background-position: 50% center;
    background-repeat: no-repeat;

    cursor: pointer;
    &: hover {
        box-shadow: 0px 0px 10px 3px #00E676;
    }
`;

const ContentImg = styled.img`
    width: 380px;
    height: 380px;
    font-size: 30px;
    font-weight: bold;
    // text-align: justify;
    // line-height: 1.7;
`;

const ContentTitle = styled.p`
    font-size: 15px;
    color: black;
    font-weight: bold;
    margin-top: -44px;
    margin-left: 260px; 
    cursor: pointer;
`;

export default CardList;
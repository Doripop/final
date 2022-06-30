import React from 'react';
import styled from 'styled-components';

const CardList = () => {
    return (
        <Container>
            <ContentImg>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2YqmDa-4CIjjAIcpWo3EXK8FKX6uwNu-oVA&usqp=CAU"
                    alt="#사진"
                >
                </img>
            </ContentImg>
            <Content>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2YqmDa-4CIjjAIcpWo3EXK8FKX6uwNu-oVA&usqp=CAU"
                    alt="#사진"
                >
                </img>
                <p>별점</p>
                <div>카페 이름</div>
                <div>해시태그</div>
                <div>실제리뷰란입니다. 실제리뷰란입니다. </div>
            </Content>
            <Content>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2YqmDa-4CIjjAIcpWo3EXK8FKX6uwNu-oVA&usqp=CAU"
                    alt="#사진"
                >
                </img>
                <p>별점</p>
                <div>카페 이름</div>
                <div>해시태그</div>
                <div>실제리뷰란입니다. 실제리뷰란입니다. </div>
            </Content>
        </Container>
    );
}

const Container = styled.div`
    width: 1440px;
    height: 390px;

    margin: 0px auto 10px auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    position: relative;
`;

const ContentImg = styled.div`
    width: 390px;
    height: 390px;
    border: 2px solid black;

    padding: 10px;
    background-size: cover;
    background-position: 50% center;
    background-repeat: no-repeat;

`;

const Content = styled.div`
    width: 390px;
    height: 390px;
    border: 2px solid black;

    padding: 10px;


`;

export default CardList;
import React,{ useState } from "react";
import styled from "styled-components";

const Admin = () => {

    React.useEffect(() => {

        let xhr = new XMLHttpRequest();
        
        xhr.open("GET", "http://localhost:5001/admin");

        xhr.send();

        //XMLHTTPRequest.readyState라는 프로퍼티가 변경이 될때마다 어떤 콜백함수를 호출해주는 것
        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4) {
                console.log(xhr.responseText);
            }
        }

        xhr.onload = function () {
            console.log(xhr.responseText);
        }
    }, []);
    return (
        <Container>
            <LeftContent>
                <h2>
                    오늘도 일해주세요!<br/>
                    관리자님!
                </h2>
                <button>
                    전체 등록 리스트 37개 &gt;
                </button>
                <button>
                    최종 승인 카페 37개 &gt;
                </button>
                <button>
                    최종 거절 카페 37개 &gt;
                </button>
            </LeftContent>
            <ReightContent>
                <button>미처리</button>
                <hr/>
                <List>
                <Card>
                    <h1>카페명</h1>
                    <p>카페주소</p>
                    <button>⩗</button>
                    <button>⨉</button>
                </Card>
                </List>
            </ReightContent>
        </Container>
    );
}
const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
    margin-top: 30px;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
`;

const LeftContent = styled.div`
    width: 240px;

    & button {
        width: 240px;
        height: 40px;
    }
`;
const ReightContent = styled.div`
    width: 700px;
`;

const List = styled.div`
    display: flex;
    margin-top: 30px;
    align-items: center;
`;

const Card = styled.div`
    width: 200px;
    height: 170px;
    border: 2px solid black;
    margin-right: 30px;

    & button {
        margin: 0 auto 0 auto;
        cursor: pointer;
        background-color: transparent;
        border-radius: 50px;
    }
`;

export default Admin;
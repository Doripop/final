import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { InfoLoad, userInfoLoad } from "../redux/modules/adminSlice";




const Admin = () => {


    const dispatch = useDispatch()

    React.useEffect(() => {
        // dispatch(InfoLoad())
        dispatch(userInfoLoad())
    }, [dispatch]);


    const list = useSelector((state) => state.adminSlice.CafeInfo);



    return (
        <Container>
            <LeftContent>
                <h2>
                    오늘도 일해주세요!<br />
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
                <hr />
                <List>
                    {list?.map((item, i) => (
                        <Card>
                            <h1>{item.name}</h1>
                            <p>
                                {item.address} <br />
                                {item.zoneNum}
                            </p>
                            <button>⩗</button>
                            <button>⨉</button>
                        </Card>
                    ))}

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
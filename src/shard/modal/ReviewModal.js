import React, { useRef, useState } from "react";
import styled from "styled-components";
import "./modal.css"
import { instance } from "../axios";
import { AiOutlineClose } from "react-icons/ai"
import { ImSearch } from "react-icons/im"
import { BsStarFill, BsStar } from "react-icons/bs"


const ReviewModal = (props) => {

    const { open, close } = props;
    const [star, setStar] = useState(0);


    return (
        <>
            <div className={open ? 'openModal modal' : 'modal'}>
                {open ? (
                    <section>
                        <div
                            onClick={close}
                            style={{
                                display: "flex",
                                justifyContent: "flex-end"
                            }}
                        >
                            <span style={{ fontSize: "25px" }}><AiOutlineClose /></span>
                        </div>
                        <div style={{ padding: "30px" }}>
                            <Title>
                                원하시는 카페의 <br />
                                리뷰를 작성해주세요
                            </Title>
                        </div>
                        <div style={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <Search type="search" placeholder="카페 검색" />
                        </div>
                        <Body>
                            <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                                <span style={{fontWeight : "bold"}}>
                                    별점
                                </span>
                                <div>
                                    {Array.from({ length: 5 }, (items, i) => (
                                        <>
                                            <span
                                                style={{
                                                    fontSize : "30px",
                                                    color : "#3FC275",
                                                    cursor : "pointer"
                                                }}
                                                onClick={() => {
                                                    setStar(i + 1)
                                                }}
                                            > {star < i + 1 ? <BsStar /> : <BsStarFill />}</span>
                                        </>
                                    ))}
                                </div>
                                <div
                                    style={{
                                        marginTop : "20px",
                                    }}>
                                    <span style={{fontWeight : "bold"}}>
                                        해시태그
                                    </span>
                                    <div style={{
                                        display : "flex",
                                        justifyContent : "center"
                                    }}>
                                        <Hashtag type="text" placeholder="해쉬태그" />
                                    </div>
                                </div>
                                    <div
                                    style={{
                                        marginTop : "20px",
                                    }}>
                                    <span style={{fontWeight : "bold"}}>
                                        리뷰
                                    </span>
                                    <div style={{
                                        display : "flex",
                                        justifyContent : "center"
                                    }}>
                                        <ReviewArea placeholder="리뷰를 작성해주세요" />
                                    </div>
                                </div>
                                <div
                                    style={{
                                        marginTop: "20px",
                                    }}>
                                    <span style={{fontWeight : "bold"}}>
                                        리뷰 사진 업로드
                                    </span>
                                    <div style={{
                                        display : "flex",
                                        justifyContent : "center"
                                    }}>
                                        <Hashtag type="file" placeholder="리뷰 사진 업로드" />
                                    </div>
                                </div>
                            </div> 
                        </Body>
                        <div style={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <UploadBtn className="close" onClick={close}>게시하기</UploadBtn>
                        </div>
                    </section>
                ) : null}
            </div>
        </>
    )
}

const Title = styled.span`
    display: flex; 
    justify-content: flex-start;
    font-size: 30px;
    font-weight : bold;
`;

const Body = styled.body`
    display: flex; 
    flex-direction: row;
    align-items: center;
    justify-content : flex-start;
    padding : 30px;
`;

const Search = styled.input`
    width: 80%;
    border: 1px solid #bbb;
    border-radius: 4px;
    padding: 10px 12px;
    font-size: 14px;
    box-shadow: 0 4px 4px -4px black;
`;

const Hashtag = styled.input`
    width: 80%;
    border: 1px solid #bbb;
    border-radius: 4px;
    padding: 10px 12px;
    font-size: 14px;
    box-shadow: 0 4px 4px -4px black;
    margin-top : 20px;
`;

const ReviewArea = styled.textarea`
    width : 80%;
    height : 100px;
    border : 1px solid #bbb;
    border-radius : 4px;
    padding : 10px 12px;
    font-size : 14px;
    box-shadow : 0 4px 4px -4px black;
    margin-top : 20px;
`;

const UploadBtn = styled.button`
    width : 200px;
    height : 40px;
    border : none;
    background-color : black;
    color : white;
    font-size : 20px; 
`;

export default ReviewModal;
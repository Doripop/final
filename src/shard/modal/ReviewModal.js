import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "./modal.css"
import { instance } from "../axios";
import { AiOutlineClose } from "react-icons/ai"
import { ImSearch } from "react-icons/im"
import { BsStarFill, BsStar } from "react-icons/bs"
import { useDispatch } from "react-redux";
import { ReviewCreate } from "../../redux/modules/AllSlice";


const ReviewModal = (props) => {

    const dispatch = useDispatch();
    const { open, close } = props;
    const [star, setStar] = useState(0);
    const review = useRef("")
    const formData = new FormData()

    // React.useEffect(()=>{
    //     dispatch() get요청 보내면서 위도 경도 메인에서 받아와서 보내기
    // },[])

    
    //자동완성 기능 
    const wholeTextArray = [
        { cafe: "대원 카페", address: "상암2동", cafeid : 123 },
        { cafe: "원티드 카페", address: "상암6동", cafeid : 321 },
        { cafe: "도리 카페", address: "상암7동" , cafeid : 222},
        { cafe: "알리 카페", address: "상암10동", cafeid : 231 },
        { cafe: "말보로 카페", address: "본리동", cafeid : 3120},
    ]
    // const wholeTextArray = [
    //     'apple',
    //     'banana',
    //     'coding',
    //     'javascript',
    //     '원티드:원티드 카페 상암2동',
    //     '프리온보딩',
    //     '프론트엔드',
    // ]
    const [inputValue, setInputValue] = useState('')
    const [sendCafe, setSendCafe] = useState("")
    const [isHaveInputValue, setIsHaveInputValue] = useState(false)
    const [dropDownList, setDropDownList] = useState(wholeTextArray)
    const [dropDownItemIndex, setDropDownItemIndex] = useState(-1)
    // console.log(inputValue)
    const showDropDownList = () => {
        if (inputValue === '') {
            setIsHaveInputValue(false)
            setDropDownList([])
        } else {
            const choosenTextList = wholeTextArray.filter(textItem =>
                textItem.cafe.includes(inputValue)
            )
            setDropDownList(choosenTextList)
        }
    }

    const changeInputValue = (e) => {
        setInputValue(e.target.value)
        setIsHaveInputValue(true)
    }

    const clickDropDownItem = (clickedItem) => {
        console.log(clickedItem)
        setInputValue(`${clickedItem.cafe}:${clickedItem.address}`)
        setSendCafe({
            cafeid : clickedItem.cafeid,
            cafe: clickedItem.cafe,
            address: clickedItem.address
        })
        setIsHaveInputValue(false)
    }
    //이부분이 보내는 부분 axios로 post 하기
    const handleDropDownKey = (e) => {
        //input에 값이 있을때만 작동
        if (isHaveInputValue) {
            if (
                e.key === 'ArrowDown' &&
                dropDownList.length - 1 > dropDownItemIndex
            ) {
                setDropDownItemIndex(dropDownItemIndex + 1)
            }

            if (e.key === 'ArrowUp' && dropDownItemIndex >= 0)
                setDropDownItemIndex(dropDownItemIndex - 1)
            if (e.key === 'Enter' && dropDownItemIndex >= 0) {
                clickDropDownItem(dropDownList[dropDownItemIndex])
                setDropDownItemIndex(-1)
            }
        }
    }

    React.useEffect(() => {
        showDropDownList()
    }, [inputValue])
    // console.log(dropDownList);

    //Hashtag
    const [tagItem, setTagItem] = useState('')
    const [tagList, setTagList] = useState([])
    // console.log(tagList);
   
    const onKeyPress = (e) => {
        if (e.target.value.length !== 0 && e.key === 'Enter') {
            submitTagItem()
        }
    }

    const submitTagItem = () => {
        let updatedTagList = [...tagList]
        updatedTagList.push(`#${tagItem}`)
        setTagList(updatedTagList)
        setTagItem('')
    }

    const deleteTagItem = e => {
        const deleteTagItem = e.target.parentElement.firstChild.innerText
        const filteredTagList = tagList.filter(tagItem => tagItem !== deleteTagItem)
        setTagList(filteredTagList)
    }


    
    //imageUpload


    const [Upimage, setUpimage] = useState([]);
    // const formData = new FormData();

    const handleAddImages = (e) => {
        const imageLists = e.target.files;
        let imageUrlLists = [...Upimage];
       

        for (let i = 0; i < imageLists.length; i++) {
            const currentImageUrl = URL.createObjectURL(imageLists[i]);
            imageUrlLists.push(currentImageUrl);
            /////
            // console.log(imageLists[i])
            // formData.append("file", imageLists[i])
        }
        if (imageUrlLists.length > 3) {
            imageLists = imageLists.slice(0, 3);
        }
        setUpimage(imageUrlLists);

        // for (let key of formData.keys()) {
        //     console.log(key);
        //   }
          
        //   FormData의 value 확인
        //   for (let value of formData.values()) {
        //     console.log(value);
        //   }
      
    }
    
    
    /////////test/////////
    // const test = async()=>{
    //     try {
    //    const {data} =  await instance.post("admin", formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   });
    //     } catch(error){
    //       window.alert(error) 
    //     }
    // }
    //멀티 이미지 지우기
    const handleDeleteImage = (id) => {
        setUpimage(Upimage.filter((_, index) => index !== id));
    };
    // console.log(Upimage);
   


    const ReviewUpload = () => {
        const sendData = {
            star : star,
            hashtag : tagList,
            contents : review.current.value,
        }
        const json = JSON.stringify(sendData);
        const blob = new Blob([json], {type : "application/json"})
        formData.append("reviews", blob)

        // FormData의 value 확인
          for (let value of formData.values()) {
            console.log(value);
          }
        dispatch(ReviewCreate({
            formdata :formData, 
            cafeid :sendCafe.cafeid
        }))
    }
   

    console.log(sendCafe.cafeid, star, tagList); 

    return (
        <>
            <div className={open ? 'openModal modal' : 'modal'}>
                {open ? (
                    <section>
                        <div
                            onClick={close}
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                cursor:"pointer"
                            }}>
                            <span style={{ fontSize: "25px", cursor: "pointer" }}><AiOutlineClose /></span>
                        </div>
                        <div style={{ padding: "30px" }}>
                            <Title>
                                원하시는 카페의 <br />
                                리뷰를 작성해주세요
                            </Title>
                        </div>
                        <InputBox isHaveInputValue={isHaveInputValue}>
                            <Search
                                type="search"
                                placeholder="카페 검색"
                                value={inputValue}
                                onChange={changeInputValue}
                                onKeyUp={handleDropDownKey}
                            />
                            <DeleteButton onClick={() => setInputValue('')}></DeleteButton>
                        </InputBox>
                        {isHaveInputValue && (
                            <DropDownBox>
                                {dropDownList.length === 0 && (
                                    <DropDownItem>해당하는 단어가 없습니다</DropDownItem>
                                )}
                                {dropDownList.map((dropDownItem, dropDownIndex) => {
                                    return (
                                        <>
                                            <DropDownItem
                                                key={dropDownIndex}
                                                onClick={() => clickDropDownItem(
                                                    {   
                                                        cafeid: dropDownItem.cafeid,
                                                        cafe: dropDownItem.cafe,
                                                        address: dropDownItem.address
                                                    },
                                                )}
                                                onMouseOver={() => setDropDownItemIndex(dropDownIndex)}
                                                className={
                                                    dropDownItemIndex === dropDownIndex ? 'selected' : ''
                                                }
                                            >
                                                <span style={{ fontSize: "14px" }}>
                                                    {dropDownItem.cafe}
                                                </span><br />
                                                <span style={{ fontSize: "12px" }}>
                                                    {dropDownItem.address}
                                                </span>
                                            </DropDownItem>
                                        </>
                                    )
                                })}
                            </DropDownBox>
                        )}
                        <Body>
                            <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                                <span style={{ fontWeight: "bold" }}>
                                    별점
                                </span>
                                <div>
                                    {Array.from({ length: 5 }, (items, i) => (
                                        <>
                                            <span
                                                style={{
                                                    fontSize: "30px",
                                                    color: "#3FC275",
                                                    cursor: "pointer"
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
                                        marginTop: "20px",
                                    }}>
                                    <span style={{ fontWeight: "bold" }}>
                                        해시태그
                                    </span>
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexWrap: "wrap",
                                        flexDirection: "column"
                                    }}>
                                        <Hashtag
                                            type="text"
                                            placeholder="#감성 카페 #라떼 맛집"
                                            tabIndex={2}
                                            onChange={(e) => setTagItem(e.target.value)}
                                            onKeyPress={onKeyPress}
                                            value={tagItem}
                                        />
                                        <TagBox>
                                            {tagList.map((tagItem, index) => {
                                                return (
                                                    <TagItem key={index}>
                                                        <Text>{tagItem}</Text>
                                                        <Button onClick={deleteTagItem}>X</Button>
                                                    </TagItem>
                                                )
                                            })}
                                        </TagBox>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        marginTop: "20px",
                                    }}>
                                    <span style={{ fontWeight: "bold" }}>
                                        리뷰
                                    </span>
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "center"
                                    }}>
                                        <ReviewArea ref={review} placeholder="리뷰를 작성해주세요" />
                                    </div>
                                </div>

                                <div
                                    style={{
                                        marginTop: "20px",
                                    }}>
                                    <span style={{ fontWeight: "bold" }}>
                                        리뷰 사진 업로드
                                    </span>
                                    

                                    <button
                                    onClick={()=>{
                                        test()
                                    }}>tset</button>





                                    <div style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                    }}>

                                        <label
                                            htmlFor="input-file"
                                            onChange={handleAddImages}
                                            style={{ marginTop: "15px" }}>
                                            <input 
                                            type="file"
                                            id="input-file"
                                            // multiple
                                             />
                                        </label>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                flexWrap:"wrap"
                                            }}>
                                            {Upimage.map((image, i) => (
                                                <div key={i}>
                                                    <img style={{ width: "100px", height: "100px" }} src={image} alt={`${image}-${i}`} onClick={() => handleDeleteImage(i)} />
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Body>
                        <div style={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <UploadBtn className="close" onClick={()=>{ReviewUpload()}}>게시하기</UploadBtn>
                        </div>
                    </section>
                ) : null}
            </div>
        </>
    )
}
/// 자동완성 css
const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  width : 100%;
`;

const DeleteButton = styled.div`
  cursor: pointer;
`
const DropDownBox = styled.ul`
  width: 77%;
  display: block;
  margin: 0 auto;

  padding: 8px 0;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top: none;
  box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  list-style-type: none;
  z-index: 3;
`

const DropDownItem = styled.li`
  padding: 0 16px;

  &.selected {
    background-color: #3FC275;
  }
`
//////////////

const TagItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  padding: 5px;
  /* background-color: #3FC275; */
  border-radius: 20px;
  color: #3FC275;
  font-size: 13px;
  border : 1px solid #3fc275;
`;

const Text = styled.span``;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  margin-left: 5px;
  background-color: white;
  border-radius: 50%;
  color: #3FC275;
`;

const TagBox = styled.div`
    display : flex;
    flex-direction : row;
    flex-wrap : wrap;
`;

const Hashtag = styled.input`
    display : inline-flex;
    width: 80%;
    border: 1px solid #bbb;
    border-radius: 4px;
    padding: 10px 12px;
    font-size: 14px;
    box-shadow: 0 4px 4px -4px black;
    margin-top : 20px;
    cursor: text;
`;

//////////////
const Title = styled.span`
    display: flex; 
    justify-content: flex-start;
    font-size: 30px;
    font-weight : bold;
`;

const Body = styled.div`
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
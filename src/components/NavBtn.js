import React, { useRef, useState } from 'react';
import '../css/partCss/NavBtn.css';
import CafeReg from './CafeReg';
//Icon import
import Review from './Review';
import { useDispatch } from 'react-redux';
import { citylist, sortList } from '../redux/modules/AllSlice';
import { useNavigate } from 'react-router-dom';

const NavBtn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const CityCheck = (e) => {
        dispatch(citylist(e.target.value))
    }

    const way = (e) => {
        // console.log(e.target.value)
        dispatch(sortList(e.target.value))
    }

    return (
        <div className='container'>
            <div className='navDiv'>

                <div className='RegiBtn'>
                    <CafeReg />
                    <Review />
                </div>

                <div className='navBomMenu'>
                    <div className='nav-p-navSelect'>
                        <p>근처에 있는카페!</p>
                        <select className='navSelect'
                            onChange={(e) => {
                                CityCheck(e)
                            }}
                        >
                            <option value="전지역">전체 지역</option>
                            <option value="서울특별시">서울특별시</option>
                            <option value="부산광역시">부산광역시</option>
                            <option value="대구광역시">대구광역시</option>
                            <option value="인천광역시">인천광역시</option>
                            <option value="광주광역시">광주광역시</option>
                            <option value="대전광역시">대전광역시</option>
                            <option value="울산광역시">울산광역시</option>
                            <option value="경기도">경기도</option>
                            <option value="강원도">강원도</option>
                            <option value="충청북도">충청북도</option>
                            <option value="충청남도">충청남도</option>
                            <option value="전라북도">전라북도</option>
                            <option value="전라남도">전라남도</option>
                            <option value="경상북도">경상북도</option>
                            <option value="경상남도">경상남도</option>
                            <option value="제주특별자치도">제주특별자치도</option>
                            <option value="세종특별자치시">세종특별자치시</option>
                        </select>
                    </div>
                    <div className='navAli'>
                        <button
                            value="like"
                            onClick={(e) => {
                                way(e)
                            }}
                        >
                            좋아요
                        </button>
                        <button
                            value="star"
                            onClick={(e) => {
                                way(e)
                            }}
                        >
                            별점순
                        </button>
                        <button
                            value=""
                            onClick={(e) => {
                                way(e)
                            }}
                        >
                            최신순
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBtn;
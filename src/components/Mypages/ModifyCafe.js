import React, { useState } from "react";
import OwnerHome from "./OwnerHome";
import OwnerMenu from "./OwnerMenu";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Cafe1 from '../../css/cafeImg/cafe1.jpg'
import '../../css/partCss/OwnerCafe.css';

const ModifyCafe = () => {

    const [subMenu, setSubMenu] = useState("A")
   
    return (
        <>
           
            <div className="containerDiv">
                <div>
                    <button className="categoryBox"
                        onClick={() => { setSubMenu("A") }}>
                        홈</button>
                    <button className="categoryBox"
                        onClick={() => { setSubMenu("B") }}>
                        메뉴</button>
                </div>
            </div>
            <div>
                {
                    subMenu === "A" && <OwnerHome /> ||
                    subMenu === "B" && <OwnerMenu />
                }
            </div>
        </>
    )
}


export default ModifyCafe;
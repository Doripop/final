import React from "react";

// CSS 관련 Imports
import styled from 'styled-components'
import { RiArrowUpSFill } from 'react-icons/ri'


const ScrollBtn = (props) => {

  return (
    <div>
    <Btn onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }}> <RiArrowUpSFill size="40"/> </Btn>
    </div>
  )

}

const Btn = styled.button`
  position: fixed;
  z-index: 100;
  bottom: 30px;
  right: 35px;
  display:flex;
  justify-content:center;
  align-items:center;
  width: 55px;
  height: 55px;
  background-color: #fff;
  border: 1.5px solid #eee;
  border-radius: 120px;
  font-size : 28px;
  padding:0px;
  color: #4c4c4c;
  cursor:pointer;

  &:hover{
    background: #eee;
    transition: background 0.5s;
  }
`

export default ScrollBtn;
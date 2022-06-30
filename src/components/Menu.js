import React from "react";
import styled from "styled-components";

const Menu = () => {
    return (
        <SubMenu>
            <button>😁Logoipsum</button>
            <button>Menu 1</button>
            <button>Menu 2</button>
            <button>Menu 3</button>
        </SubMenu>
    );
};

const SubMenu = styled.div`
    float: left;
    display: flex;
    color: white;
    
    & button {
        justify-content: flex-start;
        color: white;
        cursor: pointer;
        border: none;
        background-color: transparent;
        font-size: 16px;
        font-weight: 500; 
    }

`;

export default Menu;
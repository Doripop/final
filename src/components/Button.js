//배너에 들어가는 버튼 컴포넌트
import React from "react";
import styled from 'styled-components';

const Button = (props) => {
    const {
        place,
        margin,
        onClick,
        classname,
        type,
        bg,
        width,
        height,
        size,
        color,
        bold,
        background,
        text,
        lineHeight,
    } = props;
    
    const styles = {
        place,
        margin,
        bg,
        width,
        height,
        size,
        color,
        bold,
        background,
        lineHeight,
    }
    
    if(type==='recommend'){
        return (
            <>
                <RecommendBtn
                    {...styles}
                    onClick={onClick}
                />
            </>
        )
    }
    
    if(type==='big'){
        return (
            <Btn
                {...styles}
                onClick={onClick}
            >
                {text}
            </Btn>
        )
    }

    return (
        <>
            <BannerBtn  
                {...styles}
                onClick={onClick}
                className={classname}
            />
        </>
    );
};

Button.defaultProps = {
    place: null,
    bg: false,
    background: "#fff",
    margin: false,
    type: false,
    width: "100%",
    height: "100%",
    size: "14px",
    color: "white",
    bold: false,
    lineHeight: "initial",
}

const BannerBtn = styled.button`
    position: absolute;
    z-index: 100;
    width: 50px;
    height: 50px;
    border: none;
    outline: none;
    transform: translate(-50%, -50%);
    cursor: pointer;
    opacity: 1;
    transition: all 0.5s ease 0s;
    left: 50%;
    top: 50%;
    margin: ${props => props.margin};
    ${props => props.place === 'right'
        ? "background: url('https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/arrow_banner_right_52_52.svg') 50% 50% no-repeat;"
        : "background: url('https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/arrow_banner_left_52_52.svg') 50% 50% no-repeat;"
    }
`;

const RecommendBtn = styled.button`
    position: absolute;
    top: 160px;
    z-index: 100;
    border: 0px;
    outline: 0px;
    width: 60px;
    height: 60px;
    transform: translate(50%, -50%);
    cursor: pointer;
    transition: background 0.5s ease 0s;
    ${props => props.place === 'right'
        ? 'right: 5px;'
        : 'left: -50px;'
    }
    ${props => props.bg === 'right'
        ? "background: url('https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/arrow_list_right_60_60.svg') 50% 50% no-repeat; content: url('https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/arrow_list_right_over_60_60.svg');"
        : "content: url('https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/arrow_list_left_over_60_60.svg'); background: url('https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/arrow_list_left_60_60.svg') 50% 50% no-repeat; "
    }
    &:hover {
        ${props => props.bg === 'right'
        ? "background: url('https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/arrow_list_right_over_60_60.svg');"
        : "background: url('https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/arrow_list_left_over_60_60.svg');"
    }
    }
`;

const Btn = styled.button`
    margin: ${props => props.margin};
    width: ${props => props.width};
    height: ${props => props.height};
    font-size: ${props => props.size};
    color: ${props => props.color};
    font-weight: ${props => props.bold};
    background: ${props => props.background};
    line-height: ${props => props.lineHeight};
    border-radius: 3px;
    cursor: pointer;
    border: 1px solid #ddd;
`;

export default Button;
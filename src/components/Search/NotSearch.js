import React from "react";
import styled from "styled-components";

import {NoSearchIcon} from "../../css/searchSVG"

const NotSearch = () => {
	return (
		<Wrap>
			<div className="icon"> <NoSearchIcon /></div>
			<div className="text">
				<p>검색 결과가 없습니다.</p>
				<span>카페를 
					<span style={{
						textDecoration:"underline",
						color : "#3FC275",
						margin: "0 0 0 0.5rem"
						}}>등록</span>
					해주세요!</span>
			</div>
		</Wrap>
	)

}
export default NotSearch;

const Wrap = styled.div`
width: 250px;
height: 270px;
display: flex;
flex-direction: column;
align-items: center;

.icon{
	padding: 3rem 0 1.5rem 0;

}
.text{
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 1.2rem;
	span{
		padding: 0.2rem 0 0 0;

	}
}


`;

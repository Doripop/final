import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { SuccessApplyList } from "../../redux/modules/adminSlice";


const Success = () => {

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(SuccessApplyList())
    }, [dispatch]);

    const list = useSelector((state) => state.adminSlice.SuccessInfo);
    console.log(list)


    return (
        <>
            {list?.map((item, i) => (
                <Card
                    key={i}>
                    <h3>{item.cafename}</h3>
                    <p>
                        {item.address}&nbsp;
                        {item.addressdetail} <br />
                        {item.zonenum}
                    </p>
                </Card>
            ))}
        </>
    )
}



const Card = styled.div`
    width: 200px;
    height: 121px;
    border: 1px solid gray;
    border-radius: 5px;
    margin-right: 30px;
    margin-bottom: 30px;

    h3 {font-size: 12px;}

    p {font-size: 10px;}
    
    button {
        margin: 0 auto 0 auto;
        cursor: pointer;
        background-color: transparent;
        border-radius: 50px;
    }
    
    :hover {
        border: 2px solid #3FC275;
    }
`;

export default Success;
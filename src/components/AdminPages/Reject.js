import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { CafeRejectList } from "../../redux/modules/adminSlice";


const Reject = () => {

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch((CafeRejectList()))
    }, [dispatch]);

    const list = useSelector((state) => state.adminSlice.RejectInfo);
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
    height: 120px;
    border: 1px solid gray;
    border-radius: 5px;
    margin-right: 30px;

    h3 {font-size: 15px;}

    p {font-size: 10px;}
        
    :hover {
        border: 2px solid #69F0AE;
    }
`;

export default Reject;
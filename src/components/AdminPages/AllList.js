import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { CafeApplyList, CafeApprove } from "../../redux/modules/adminSlice";

const AllList = () => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(CafeApplyList())
    }, [dispatch]);

    const list = useSelector((state) => state.adminSlice.CafeInfo);
    // console.log(list.data.registerList)
    const CafeApply = (regid, permit ) =>{
        // console.log(id,regid, permit)
        dispatch(CafeApprove({
            regid : regid,
            permit : permit
        }))
    }


    return (
      
        <>
            {list?.map((item, i) => (
                <Card
                    key={i}>
                    <h3>{item?.cafename} </h3>
                    <p>
                        {item?.address}&nbsp;
                        {item?.addressdetail} <br />
                        {item?.zonenum}
                    </p>
                    <button
                    onClick={()=>{CafeApply(
                        item?.registerid, 
                        false
                        ); 
             
                        }}>⨉</button>
                    <button 
                    onClick={()=>{CafeApply(
                        item?.registerid, 
                        true
                        ); 
             
                        }}>⩗</button>
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
        margin-top: 10px;
        margin-right:10px;
        float: right;
        cursor: pointer;
        color: white;
        background-color: #3FC275;
        border-radius: 50px;
        border: 1px solid #3FC275;
    }
`;

export default AllList;
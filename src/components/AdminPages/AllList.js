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
        // <>
        //     <div>
        //         관리자 페이지
        //     </div>
        // </>
        <>
            {list?.map((item, i) => (
                <Card
                    key={i}>
                    <h3>{item?.cafename} </h3>
                    <p>
                        {item?.address} <br />
                        {item?.addressdetail} <br />
                        {item?.zonenum}
                    </p>
                    <button 
                    onClick={()=>{CafeApply(
                        item?.registerid, 
                        true
                        ); 
             
                        }}>승인</button>
                    <button
                    onClick={()=>{CafeApply(
                        item?.registerid, 
                        false
                        ); 
             
                        }}>거절</button>
                </Card>
            ))}
        </>



    )
}



const Card = styled.div`
    width: 200px;
    height: 170px;
    border: 2px solid black;
    margin-right: 30px;

    & button {
        margin: 0 auto 0 auto;
        cursor: pointer;
        background-color: transparent;
        border-radius: 50px;
    }
`;

export default AllList;
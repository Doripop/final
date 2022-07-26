import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AllRegCafe, CafeRemove, SuccessApplyList } from "../../redux/modules/adminSlice";


const RealAllCafe = () => {

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(AllRegCafe())
    }, [dispatch]);

    const list = useSelector((state) => state.adminSlice.RealInfo);
    console.log(list)

    const CafeDelete = (cafeid) =>{
        // console.log(id,regid, permit)
        dispatch(CafeRemove({
            cafeid : cafeid
        }))
    }


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
                    <h5>거절되면 바로 페이지 삭제요청
                    <button
                    onClick={()=>{
                        CafeDelete(
                            item.cafeid
                        )
                    }}
                    >⨉</button></h5>
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
    padding: 0 auto;

    h3 {font-size: 12px; font-wight: bold;}
    h5 {font-size: 10px;}

    p {font-size: 10px;}

    button {
        margin-right:10px;
        float: right;
        cursor: pointer;
        color: white;
        background-color: #3FC275;
        border-radius: 50px;
        border: 1px solid #3FC275;
    }
`;

export default RealAllCafe;
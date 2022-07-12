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

    const CafeDelete = (id, cafeid) =>{
        // console.log(id,regid, permit)
        dispatch(CafeRemove({
            id : id,
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
                        {item.address} <br />
                        {item.addressdetail}<br />
                        {item.zonenum}
                    </p>
                    <h5>거절되면 바로 페이지 삭제요청</h5>
                    <button
                    onClick={()=>{
                        CafeDelete(
                            item.id,
                            item.cafeid
                        )
                    }}
                    >삭제</button>
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

export default RealAllCafe;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../css/partCss/CateList.css'
import { MainReview } from '../redux/modules/AllSlice';
import { useNavigate } from "react-router-dom";

const CardList = (props) => {
    const city = useSelector((state) => state.AllSlice.MainReviewList);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    React.useEffect(()=>{
        dispatch(MainReview(city))
    },[dispatch])
    
    console.log(city);
    return (
        <>
        <div className='containDiv'>
            {city?.map((item)=>(
            <>
                <div className='contentDiv'
                onClick={() => {navigate(`/detail/${city?.cafeid}`)}}
                key={item.postid}
                >
                    <img className='contentImg' src={item.img}/>
                    <p className='contentTitle'>{item.cafename}</p>
                </div>
            </>
            ))}
        </div>
        </>
    );
}

export default CardList;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../css/partCss/CateList.css'
import { MainReview } from '../redux/modules/AllSlice';
import { useNavigate } from "react-router-dom";

const CardList = () => {
    const city = useSelector((state) => state.AllSlice.MainReviewList);
    const citychange = useSelector((state) => state.AllSlice.city);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    React.useEffect(()=>{
        dispatch(MainReview(citychange))
    },[citychange, dispatch])
   console.log(city)
    
    
    return (
        <div className='containDiv'>
            {city?.map((item,i)=>(
            <>
                <div className='contentDiv'
                onClick={() => {navigate(`/detail/${city[i]?.cafeid}`)}}
                key={item.postid}
                >
                    <img className='contentImg' src={item.img}/>
                    <p className='contentTitle'>{item.cafename}</p>
                </div>
            </>
            ))}
        </div>
    );
}

export default CardList;
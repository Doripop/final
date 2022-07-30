import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../css/partCss/CateList.css'
import { MainReview } from '../redux/modules/AllSlice';
import { useNavigate } from "react-router-dom";

const CardList = () => {
    const city = useSelector((state) => state.AllSlice.MainReviewList);
    const citychange = useSelector((state) => state.AllSlice.city);
    const sort = useSelector((state) => state.AllSlice.sort);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    React.useEffect(() => {
        dispatch(MainReview(
            {
                city: citychange,
                sort: sort
            }))
    }, [citychange, dispatch, sort])

    //가로 div 만들어서 붙여줌 3개 씩
    var result = [];
    for (let i = 0; i < city.length; i += 3) result.push(city.slice(i, i + 3));
    console.log(result)

    return (
        <div className='containDiv'>

            {result?.map((item, i) => (
                <>
                    {item?.map((post, j) => (
                        <div className='contentDiv'
                            onClick={() => { navigate(`/detail/${item[j]?.cafeid}/review`) }}
                            key={post.postid}
                        >
                            <div className='contentImg' style={{ backgroundImage: `url(${post.img})`, backgroundSize: 'cover' }}>
                                <div className='textAutoLayout'>
                                    <p className='contentTitle'>{post.cafename}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            ))}
        </div>
    );
}

export default CardList;
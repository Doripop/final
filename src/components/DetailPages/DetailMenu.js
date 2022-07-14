import React from "react";
import styled from "styled-components";

import { SiBuymeacoffee } from 'react-icons/si';
import { GiCakeSlice } from 'react-icons/gi';

import {useDispatch, useSelector} from "react-redux"
import { DetailCafeMenu } from "../../redux/modules/AllSlice";



const DetailMenu = (props) => {
    const dispatch = useDispatch()
    const {cafeid} = props
    console.log(cafeid.id)
    React.useEffect(()=>{
        //메뉴 정보 받아오기
      dispatch(DetailCafeMenu(cafeid.id))
    },[dispatch])
    const list = useSelector((state) => state.AllSlice.DetailCafeMenuList);
    
    
    return (
        <>
            <CoffeeMenu>
                <h1><SiBuymeacoffee className="coffee"/>&nbsp;커피메뉴&nbsp;&nbsp;&nbsp;</h1>
                <Coffee>
                    <CoMenu src="data:image/jpeg;base64,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"/>
                    아메리카노<br/>
                    80,000원
                </Coffee>
                <Coffee>
                    <CoMenu src="data:image/jpeg;base64,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"/>
                    아메리카노<br/>
                    80,000원
                </Coffee>
                <Coffee>
                    <CoMenu src="data:image/jpeg;base64,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"/>
                    아메리카노<br/>
                    80,000원
                </Coffee>
                <Coffee>
                    <CoMenu src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH0AvQMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQEDCAL/xAA5EAABAwMCAgcHAgUFAQAAAAABAAIDBAUREiEGMQcTQVFhcYEUIjKRobHBI0IzYtHh8SRDUuLwFf/EABoBAQADAQEBAAAAAAAAAAAAAAADBAUCAQb/xAAnEQEAAgICAgAEBwAAAAAAAAAAAQIDEQQhEjEFEyNRFCIzQUJhkf/aAAwDAQACEQMRAD8AvFERAREQEREBERARcLEqLnSU8vVSTN6ztY33iPPHL1QZi4ytHc+J6W3QSVEzHCCIZe9xDfQd5UUt3GVw4guckVAw08HOPW4DIH1Pb4clxN4idJK4rW7WPkLlRGCqr6VrjU3UFudiWZIHkQM7rb//AHKeINFQ8AnA1NacEnkF1uHM0lt0XRS1cNXHrgeHtPou9euRERAREQEREBERAREQEREBERAREQRrim4z0rXRMqjCH7N0NGo7cgc8/JR2kqOrpiyKcMY5xJa2M+9nvOrc8199Jb4o6+kFRNJDFIP4kZ3bzGft9lXlfdLnFmB1aXMZgRuLAGgbb8u7BVHLyYi80/dfwceb13CxLpYKW80ELqyqleyEuc1rSGBrh918WSx4glkio3NeHkxOnO73AAAAZ7PTdRaHiGup6WmknqpQxm36WkZB5jl59+4C746i51FO+qt13qZ6KQluuLSXU7+6RmCcb9nLyXc5KxPp7OK8dTPTfT8W1TYJI3xyMq6Yf6mF9Dh0Y7D8e4PeM+i742V0kro6l0UXWNADWx5PLOQdWCFW8U13o73S3GvnnnlhkDnSteTlg3OCf2kbeuCs+r4iuM8zayGthaypmL4uqOl8bdRADg385zjKjnkRHcu/w+41VaNtjmo5ZOom94jtZlviBvspPA5zoY3P+ItGfNURabrXVtdCx9S97jI0hzicjBycE7j+6viJumNje5oCs4ckXjpTz4pxzG32iIpkAiIgIiICIiAiIgIiICIiAiIgq/pxhc6goJY/jEunnjnt+VU89b7TPHC4CTADCMjc8ufyVzdNsJfwl1g/25mu+oP4Vc8LUtjuFJFNLORUAhlTE5uNOx97xBWbzJjHPnMNfhW+m5mYyS0uGdTgRl5xpByN+4qO01XU26Yy0lRI3X/EiZIcPHYHDO/qptPaoqmCX2cOMbNTmPDtOhu+4yNts+WcqHmdlBPpo4o31EjiBLLv1Y8B+VXx5oyR17XYiPs+LveaiqxSviNOC0gu151A428sjxXfbBUUlG6nlYHxSbjSfeB8DjlyWlq+uuVe4UxmqnBo/Uk+J2Bzx2DuC3vCtwDOspJvdmLD1byNz4ea9zV8Meq/49rrx9JPwZRtfc6IafedIADp5BXqqd4DaX3+kYXZDXOf9lcSucDc49yyOfO8kCIiuqIiIgIiICIiAiIgIiICIiAiIgiHSrT+0cF1zQMloBAA81QcEctsrGVFMA5srTqaW7sxzHhgr0fxpD7RwxcY++InK8wT1U0jsanF5+MgnJ81T5NfKdNX4fP5JT+CrbV2yR/WRmLGkMGCScdq0NFS2wPe64SukdJ+xj9O3dnu8lrLdTzVDZAyZkeRu1xI/C656I5dJJVNfh+HYBBHjuqXyIrExFtL1bRvSwY6qy0NlnpaakiM0jfdbrwSc8sd3Pmq+qpWOqcsiMMjTy7iF9QRvgjOsjf9xdyWwkt9O6hjmjLg7O57wfDw3ChpWuGe53tJFfH0nXRI59Vf+sk5siceXlurlVT9DtIYrjVOI+Gnbv4klWwtnBrw6YPKn6siIimVhERAREQEREBERAREQEREBERBg3qPrbTWMPbC77Lyy+GCOQtDxr1FpbjO2ef0Xq+pZrp5Wf8AJhH0Xlqcwi8z0tS0NDJnhpx/NnCq8nrUtL4dPdn1CzqeqlZGC1+wB5H/AN89l8630lxp6hsTM6tYikILXYOVJG1c9HaH0zKeOphfs12nL2d3b2HcHsWorXQPt73SmIVkOHNYHDIHcc9oz57LPrl8vcNPf9NVdnNdcHCmGYJhriAGMAjOPQ5Hou611VVMxsbmF7caQS7H+Vm3KW2NjjbBiaRwzlo+E43HzWstc8kbmNdkYO5811vyx+nVPsu7olppIoq6aUY1FoaM5wMf5ViKE9FmXWWeYj4pceeApstHjRMYo2wOV+tYREU6uIiICIiAiIgIiICIiAiIgIiIOCvK3GVP1PFtyha3JFQcAeIH9V6qXm3pMpX0/G9znYdLQ5rgcc3EYwFBn9bX/h9tZJc2RhazFW9pe2MgNdJjR547Vl1lDRyQzSMiD3sZqe44xjI/PqobSyP6znjfbwUihc54ZFodpI5YWNmpNbb22Yr20jpQ1r9EbGtJ2wNguy3xGaZuoAjIzlZt1s8sUJkiadHPHf4rBtj3sqWx495xU1bxeu6y6t46eh+jymipuHGCF2pr5C7PjgA/UFSdR/gKLquEbaCN3Qhx9d1IFr441SIfM5Z3eZERF2jEREBERAREQEREBERAREQEREHBVGdLFHK/jEmNuoPZGAPEj+yvNQnjCy2+93GOGuEo9wgOjzkEYIPIjv8Amoc1JvXUJ+Nl+Vk8pUmbYfaRp2cDn1W3op3RSDrA06dtjgqfu6MbZqa6mnljGnBy5wcT2nOcb+Sxpei23Pd+pX1Zcezrv+qzr8LJfqZ6a8fEMWu0TuVz66EQUrGMG5LpHbbrR01JE6ojkbIXSZ94EhWVH0T2tmP1XHfdz3OeceAyAsqs4Ws1io6qeggf7WW/onBJY7kPr3pj4FsfVZR352L+Kc8Ow9RYrfF3U7PsFsV0UbCylhYf2sA+i71rVjUaY0zudiIi9eCIiAiIgIiICIiAiIgIiICIiAsStoIqrd2psnY9pwQstEEdns1yac09yeO7U1rvuF0m3X/l7ewjxhZ/RShE0bRyO2Xh20twAH8sDB+FsqS2CIh080kzx2udt8uS2KIOBsuURAREQEREBERAREQf/9k="/>
                    아메리카노<br/>
                    80,000원
                </Coffee>
                <Coffee>
                    <CoMenu src="data:image/jpeg;base64,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"/>
                    아메리카노<br/>
                    80,000원
                </Coffee>
                <Coffee>
                    <CoMenu src="data:image/jpeg;base64,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"/>
                    아메리카노<br/>
                    80,000원
                </Coffee>
                <Coffee>
                    <CoMenu src="data:image/jpeg;base64,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"/>
                    수제케이크<br/>
                    80,000원
                </Coffee>
                <Coffee>
                    <CoMenu src="data:image/jpeg;base64,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"/>
                    아메리카노<br/>
                    80,000원
                </Coffee>
            </CoffeeMenu>
            <DessertMenu>
                <h1><GiCakeSlice className="cake"/>&nbsp;디저트메뉴</h1>
                <Dessert>
                    <CoMenu src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrtpWf-ty4r9WtYbsDYFgiXzEL2yYgN9yhZg&usqp=CAU"/>
                    수제케이크<br/>
                    80,000원
                </Dessert>
                <Dessert>
                    <CoMenu src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrtpWf-ty4r9WtYbsDYFgiXzEL2yYgN9yhZg&usqp=CAU"/>
                    수제케이크<br/>
                    80,000원
                </Dessert>
                <Dessert>
                    <CoMenu src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrtpWf-ty4r9WtYbsDYFgiXzEL2yYgN9yhZg&usqp=CAU"/>
                    수제케이크<br/>
                    80,000원
                </Dessert>
                <Dessert>
                    <CoMenu src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrtpWf-ty4r9WtYbsDYFgiXzEL2yYgN9yhZg&usqp=CAU"/>
                    수제케이크<br/>
                    80,000원
                </Dessert>
                <Dessert>
                    <CoMenu src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrtpWf-ty4r9WtYbsDYFgiXzEL2yYgN9yhZg&usqp=CAU"/>
                    수제케이크<br/>
                    80,000원
                </Dessert>
                <Dessert>
                    <CoMenu src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrtpWf-ty4r9WtYbsDYFgiXzEL2yYgN9yhZg&usqp=CAU"/>
                    수제케이크<br/>
                    80,000원
                </Dessert>
                <Dessert>
                    <CoMenu src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrtpWf-ty4r9WtYbsDYFgiXzEL2yYgN9yhZg&usqp=CAU"/>
                    수제케이크<br/>
                    80,000원
                </Dessert>
                <Dessert>
                    <CoMenu src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrtpWf-ty4r9WtYbsDYFgiXzEL2yYgN9yhZg&usqp=CAU"/>
                    수제케이크<br/>
                    80,000원
                </Dessert>
            </DessertMenu>
        </>
    );
}

const CoffeeMenu = styled.div`
    width: 1000px;

    margin: 0 auto;
    padding: 20px;

    border-bottom: 1px solid black;
    
    h1 {
        cursor: default;
    }

    .coffee {
        color: #00E676;
    }
`;

const Coffee = styled.div`
    width: 350px;
    height: 100px;
    border: 1px solid black;
    
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
    margin-right: 30px;
    margin-left: 100px; 
    text-align: center;

    &: hover {
        cursor: default;
        box-shadow : 0px 3px 0px 0px #E0E0E0;
    }
`;

const CoMenu = styled.img`
    width: 80px;
    height: 80px;
    border: 1px solid #EEE;
    margin-right: 20px;
`;

const DessertMenu = styled.div`
    width: 1000px;

    margin: 0 auto;
    padding: 20px;

    border-bottom: 1px solid black;

    h1 {
        cursor: default;
    }

    .cake {
        color: #00E676;
    }
`;

const Dessert = styled.div`
    width: 350px;
    height: 100px;
    border: 1px solid black;

    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
    margin-right: 30px;
    margin-left: 100px; 
    text-align: center;

    &: hover {
        cursor: default;
        box-shadow : 0px 3px 0px 0px #E0E0E0;
    }
`;
export default DetailMenu;
import React, { useState } from "react";
import OwnerHome from "./OwnerHome";
import OwnerMenu from "./OwnerMenu";


const ModifyCafe = () => {

    const [subMenu , setSubMenu] = useState("A")


    return (
        <>
            <div>
                <div>
                    <button
                    onClick={()=>{
                        setSubMenu("A")
                    }}>홈</button>
                    <button
                    onClick={()=>{
                        setSubMenu("B")
                    }}
                    >메뉴</button>


                    {
                            subMenu === "A" && <OwnerHome /> ||
                            subMenu === "B" && <OwnerMenu />
                        }
                </div>
            </div>
        </>
    )
}


export default ModifyCafe;
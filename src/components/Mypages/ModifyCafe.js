import React, { useState } from "react";


const ModifyCafe = () => {

    const [subMenu , setSubMenu] = useState("A")


    return (
        <>
            <div>
                <div>
                    <button>홈</button>
                    <button>메뉴</button>
                </div>
            </div>
        </>
    )
}


export default ModifyCafe;
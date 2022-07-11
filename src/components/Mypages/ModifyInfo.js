import React from "react";


const ModifyInfo = () => {
    return (
        <>
            <div
            style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
            }}
            >
                비밀번호 : <input type="password" />
                비밀번호 확인: <input type="password" />
            </div>
        </>
    )
}



export default ModifyInfo;
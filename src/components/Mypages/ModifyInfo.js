import React, { useState, useRef } from "react";
import '../../css/partCss/UserInfo.css';
import '../../css/partCss/UserCEOInfo.css';
import { AiFillLock } from "react-icons/ai"

const ModifyInfo = () => {
    //입력받을 값
    const Nic = useRef("")
    const Password = useRef("")
    const Check = useRef("")

    const [role, setRole] = useState("")

    React.useEffect(() => {
        setRole(localStorage.getItem("role"));
    }, [])

    //닉네임, 비밀번호 정규표현식
    const reg_nic = /^(?=.*[a-zA-Z0-9가-힣])[a-zA-Z0-9가-힣]{3,9}$/;
    const reg_pass = /^[0-9a-zA-Z!@#$%^&.*]{8,20}$/;

    //유효성 알림
    const [signNicAlert, setSignNicAlert] = useState('');
    const [signEmailAlert, setSignEmailAlert] = useState('');
    const [signPassAlert, setSignPassAlert] = useState('');
    const [signCheckAlert, setSignCheckAlert] = useState('');


    // 닉네임 형식 체크
    const onNicChange = () => {
        const nic = Nic.current.value;
        if (reg_nic.test(nic)) {
            setSignNicAlert("")
        } else {
            setSignNicAlert("닉네임은 3~9글자,국문,영문,숫자로 작성해주세요.")
        }
    }

    // 비밀번호 형식 체크
    const onPassChange = () => {
        const pass = Password.current.value;
        if (reg_pass.test(pass)) {
            if (pass.search(/\s/) !== -1) {
                setSignPassAlert("공백 없이 작성해주세요.")
            } else {
                setSignPassAlert("")
            }
        } else {
            setSignPassAlert("영문,숫자 특수문자!@#$%^&를 포함한 8 이상으로 작성해주세요.")
        }
    }
    // 비밀번호 확인 형식 체크
    const onPassCheckChange = () => {
        const pass = Password.current.value;
        const passCheck = Check.current.value;
        if (passCheck === pass) {
            setSignCheckAlert("")
        } else {
            setSignCheckAlert("비밀번호가 일치하지 않습니다.")
        }
    }

    return (
        <>
            {role === "user" ? (
            <div className="conDiv2">
                <div>
                    <input ref={Nic} className="inputBox2" type="text" placeholder="닉네임" onChange={onNicChange}>
                    </input><span className="spanLock2"><AiFillLock className="lock2"/></span>
                    <p className="checkText2">{signNicAlert}</p>
                </div>
                <div>
                    <input ref={Password} className="inputBox2" type="password" placeholder="비밀번호" onChange={onPassChange}>
                    </input><span className="spanLock2"><AiFillLock className="lock2"/></span>
                    <p className="checkText2">{signPassAlert}</p>
                </div>
                <div>
                    <input ref={Check} className="inputBox2" type="password" placeholder="비밀번호확인" onChange={onPassCheckChange}>
                    </input><span className="spanLock2"><AiFillLock className="lock2"/></span>
                    <p className="checkText2">{signCheckAlert}</p>
                </div>
                <button className="changeBtn2">변경하기</button>
            </div>
            ) : (
            <div className="conDiv2">
                <div>
                    <input ref={Password} className="inputBox2" type="password" placeholder="비밀번호" onChange={onPassChange}>
                    </input><span className="spanLock2"><AiFillLock className="lock2"/></span>
                    <p className="checkText2">{signPassAlert}</p>
                </div>
                <div>
                    <input ref={Check} className="inputBox2" type="password" placeholder="비밀번호확인" onChange={onPassCheckChange}>
                    </input><span className="spanLock2"><AiFillLock className="lock2"/></span>
                    <p className="checkText2">{signCheckAlert}</p>
                </div>
                <button className="changeBtn2">변경하기</button>
            </div>    
            )
            }
        </>
    )
}



export default ModifyInfo;
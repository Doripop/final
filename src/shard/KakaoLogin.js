import React, { useEffect } from "react";

const KakaoLogin = () => {
  useEffect(() => {
    // 토큰 get
    const accessToken = new URL(window.location.href).searchParams.get(
      "accessToken"
    );
    
    localStorage.setItem("token", accessToken);

    

    //닉네임 get
    const nickname = new URL(window.location.href).searchParams.get("nickname");

    localStorage.setItem("nicname", nickname);

    //memeberId get
    const email = new URL(window.location.href).searchParams.get("email");
    localStorage.setItem("memberId", email);
    

    const profileimg = new URL(window.location.href).searchParams.get("profileimg");
    localStorage.setItem("profileimg", profileimg);

    const role = new URL(window.location.href).searchParams.get("role");
    localStorage.setItem("role", role);
    
    //refreshToken get
    const refreshToken = new URL(window.location.href).searchParams.get(
      "RefreshToken"
    );
    
    localStorage.setItem("refreshtoken", refreshToken);
    console.log(role , email, nickname, refreshToken, accessToken )
    //메인으로 보내기
    window.location.replace("/");
  }, []);
  return <></>;
};

export default KakaoLogin;
import axios from "axios"


export const instance = axios.create({
    // baseURL: "http://54.180.88.20"
    baseURL: "https://kyuhong.shop"
    // baseURL: "http://kyuhong.shop"

});

instance.interceptors.request.use(
    (config) => {
        // console.log(config);
        const token = localStorage.getItem("token");
        // console.log(token)
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}` //access token
        }
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error)
    }
);


instance.interceptors.response.use(
    (response) => {
        // console.log(response);

        // if(token) {
        //     config.headers["Authorization"] = `Bearer ${token}` //access token
        // }
        return response;
    },
    async (error) => {
        // console.log(error);
        const refreshtoken = localStorage.getItem("refreshtoken");
        const nickname = localStorage.getItem("nicname")
        // eslint-disable-next-line default-case
        switch (error.response.data.message) {
            case "토큰을 재발급 해주세요.":
                const { data } = await axios.post("https://kyuhong.shop/api/auth/refresh",
                    {
                        refreshToken: refreshtoken,
                        nickname: nickname
                    })
                // console.log(data)
                localStorage.setItem("token", data.data.accessToken)
                localStorage.setItem("refreshtoken", data.data.refreshToken)
                window.alert("세션이 만료되었습니다! 다시 시도해주세요~!")
                break;
        }
        return Promise.reject(error)
    }
);

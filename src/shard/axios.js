import axios from "axios"


export const instance = axios.create({
    baseURL: "http://54.180.88.20"
});

instance.interceptors.request.use(
    (config)=>{
        console.log(config);
        const token = localStorage.getItem("token");
        console.log(token)
        if(token) {
            config.headers["Authorization"] = `Bearer ${token}` //access token
        }
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error)
    }
);


// instance.interceptors.response.use(
//     (config)=>{
//         console.log(config);
//         const token = localStorage.getItem("token");
//         if(token) {
//             config.headers["Authorization"] = `Bearer ${token}` //access token
//         }
//         return config;
//     },
//     (error) => {
//         console.log(error);
//         return Promise.reject(error)
//     }
// );

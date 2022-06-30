import axios from "axios"


export const instance = axios.create({
    baseURL: "http://localhost:5002"
    // baseURL: "http://0.0.0.0"
});

instance.interceptors.request.use(
    (config)=>{
        console.log(config);
        const token = localStorage.getItem("token");
        if(token) {
            config.headers["Authorization"] = `Bearer ${token}`
        }
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error)
    }
);


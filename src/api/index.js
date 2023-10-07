import axios from 'axios';

const request = axios.create({
    // baseURL: 'http://api.yuleng.top:38090',
    timeout: 3000, // 毫秒
    headers: {
        'Content-Type': 'application/json',
    },
});

request.interceptors.request.use(config => {
    if (localStorage.getItem('token')) {
        config.headers.Authorization = localStorage.getItem('token');
    }
    return config;
})


// request.interceptors.response.use(res => {

//     return res
// }, err => {
//     console.log(err);
//     return Promise.reject(err)
// })

export default request;
import axios from 'axios';
import Config from '~/config';

const baseURL = Config.apiUrl;

let token = localStorage.getItem('access_token') ? localStorage.getItem('access_token') : null;

const AxiosInstance = axios.create({
    baseURL: baseURL,
});

// Add a request interceptor
AxiosInstance.interceptors.request.use(
    function (request: any) {
        // Do something before request is sent
        request.headers['Authorization'] = `Bearer ${token}`;
        return request;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

// Add a response interceptor
AxiosInstance.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response && response.data ? response.data : response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error

        // HANDLE TOKEN EXPIRED

        return error && error.response && error.response.data ? error.response.data : Promise.reject(error);
    },
);
export default AxiosInstance;

// axiosInstance.interceptors.request.use(async (req) => {
//     if (!authTokens) {
//         authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null;
//         req.headers.Authorization = `Bearer ${authTokens?.access}`;
//     }

//     const user = jwt_decode(authTokens.access);
//     const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

//     if (!isExpired) return req;

//     const response = await axios.post(`${baseURL}/api/token/refresh/`, {
//         refresh: authTokens.refresh,
//     });

//     localStorage.setItem('authTokens', JSON.stringify(response.data));
//     req.headers.Authorization = `Bearer ${response.data.access}`;
//     return req;
// });

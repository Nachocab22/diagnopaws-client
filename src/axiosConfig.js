import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.withCredentials = true;

axios.interceptors.request.use(
    config => {
        config.withCredentials = true;
        const csrfToken = document.cookie.split('; ').find(row => row.startsWith('XSRF-TOKEN='));
        if(csrfToken){
            config.headers['X-XSRF-TOKEN'] = csrfToken.split('=')[1].replace("%3D", "=");
        }
        return config;
    },
    error => {
        return Promise.reject(new Error(error));
    }
);

export default axios;
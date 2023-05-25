import axiosClient from './axiosClient';

const authApi = {
    // API đăng nhập
    login: params => {
        const url = '/account/sign-in';
        return axiosClient.post(url, params);
    },
    //API đăng ký
    signUp: params => {
        const url = '/account/sign-up';
        return axiosClient.post(url, params);
    },
    //API đặng xuất
    logOut: params => {
        const url = '/account/sign-out';
        return axiosClient.post(url, params);
    },
};

export default authApi;

import axiosClient from './axiosClient';

const balconyApi = {
    //API lấy danh sách ban công
    getListBalcony: params => {
        const url = '/balcony/find';
        return axiosClient.get(url, { params });
    },
    //API cập nhật ban công
    update: params => {
        const url = '/balcony/update';
        return axiosClient.put(url, params);
    },
    //API tạo ban công
    create: params => {
        const url = '/balcony/create';
        return axiosClient.post(url, params);
    },
    //API xoá ban công
    delete: params => {
        const url = '/balcony/delete';
        return axiosClient.delete(url, { params });
    },
};
export default balconyApi;

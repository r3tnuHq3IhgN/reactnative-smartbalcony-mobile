import axiosClient from './axiosClient';

const plantApi = {
    //API lấy danh sách cây trồng
    getListPlant: params => {
        const url = '/plant/find';
        return axiosClient.get(url, { params });
    },
    //API lấy thông tin cây trồng
    getDetail: params => {
        const url = '/plant/detail';
        return axiosClient.get(url, { params });
    },
    //API bật/tắt chế độ tự động tưới
    toggleAutoMode: params => {
        const url = '/plant/auto-mode';
        return axiosClient.post(url, params);
    },
    //API tưới thủ công
    manualControl: params => {
        const url = '/plant/control';
        return axiosClient.post(url, params);
    },
    //API cài đặt độ ẩm thích hợp
    setMoistureBreakpoint: params => {
        const url = '/plant/breakpoint';
        return axiosClient.post(url, params);
    },
    //API tạo cây trồng
    createPlant: params => {
        const url = '/plant/create';
        return axiosClient.post(url, params);
    },
    //API cập nhật thông tin cây trồng
    updatePlant: params => {
        const url = '/plant/update';
        return axiosClient.put(url, params);
    },
    //API xoá cây trồng
    deletePlant: params => {
        const url = '/plant/delete';
        return axiosClient.delete(url, { params });
    },
};

export default plantApi;

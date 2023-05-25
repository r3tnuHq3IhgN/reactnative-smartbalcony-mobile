const { default: AppConfig } = require('general/constants/AppConfig');
const { default: axiosClient } = require('./axiosClient');

const weatherApi = {
    //API lấy thông tin thời tiết hiện tại
    getCurrentWeather: params => {
        const url = `${AppConfig.baseWeatherUrl}/weather`;
        return axiosClient.get(url, { params });
    },
};

export default weatherApi;

import axiosClient from '../axios/axiosClient';

class Device {
    getAll = () => {
        const url = `/device`;
        return axiosClient.get(url);
    };
}

const deviceApi = new Device();

export default deviceApi;

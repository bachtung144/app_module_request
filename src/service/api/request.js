import axiosClient from '../axios/axiosClient';

class Request {
    getAll = userId => {
        const url = `/request?user_id=${userId}`;
        return axiosClient.get(url);
    };

    add = data => {
        const url = `/request`;
        return axiosClient.post(url, data);
    }
}

const requestApi = new Request();

export default requestApi;

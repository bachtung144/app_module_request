import axiosClient from '../axios/axiosClient';

class User {
  login = params => {
    const url = '/user/login';
    return axiosClient.post(url, params);
  };

  update = data => {
    const url = `/user`;
    return axiosClient.put(url, data);
  }
}

const userApi = new User();

export default userApi;

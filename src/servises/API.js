import  axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
    headers: {}
});


const getUsers = () => axiosInstance('');
const getUser = (id) => axiosInstance('/' + id);
export {getUsers, getUser};






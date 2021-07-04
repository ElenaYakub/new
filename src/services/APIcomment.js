import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/comments',
    headers: {}
});

const getComments = () => axiosInstance('');
const getComment = (id) => axiosInstance('/' + id);
export {getComments, getComment};
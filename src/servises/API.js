import  axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});
let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
});
let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/comments'
});
const getUsers = () => axiosInstance.get(0);
const getUser = (id) => axiosInstance.get(id);
export {getUsers, getUser};

const getPosts = () => axiosInstance();
const getPost = (id) => axiosInstance('/' + id);
export {getPosts, getPost};

const getComments = () => axiosInstance();
const getComment = (id) => axiosInstance('/' + id);
export {getComments, getComment};




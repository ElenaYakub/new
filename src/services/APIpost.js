import  axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
});
 const getPosts = () => axiosInstance('');
 const getPost = (id) => axiosInstance('/' + id);
const getUserPosts = (id) => axiosInstance('/' + id + '/posts');
 export {getPosts, getPost, getUserPosts};
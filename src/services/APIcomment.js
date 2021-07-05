import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/comments',
    headers: {}
});

const getComments = () => axiosInstance('');
const getComment = (id) => axiosInstance('/' + id);
const getCommentPosts = (id) => axiosInstance('/' + id + '/posts');
export {getComments, getComment, getCommentPosts};
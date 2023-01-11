import axios from 'axios';
const baseUrl = 'http://localhost:5000/'

export const authenticateUser = (data) => {
    return axios.post(baseUrl+'users/authenticate', data);
}

export const getPosts = () => {
    return axios.get(baseUrl+'post/');
}

export const addPost = (data) => {
    return axios.post(baseUrl+'post/', data);
}
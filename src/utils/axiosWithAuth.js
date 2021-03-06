import axios from 'axios';

export const axiosWithAuth = () =>{
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://tt17-african-marketplace.herokuapp.com/',
        headers: {
            Authorization: token
        }
    });
};

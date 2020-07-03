import axios from 'axios';

const urlLogin = `/api/login`;
const urlRegister = `/api/register`;

export function loginService(username, password) {
    return axios.post(urlLogin, {
        username,
        password
    });
}

export function registerService(username, email, password) {
    return axios.post(urlRegister, {
        username, 
        email,
        password
    });
}

export function logoutService() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
}

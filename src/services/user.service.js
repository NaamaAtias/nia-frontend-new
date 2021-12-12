const axios = require('axios')
const AUTH_URL = 'http://localhost:3030/api/auth/'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    getUsers
}

function getUsers() {
    return axios.get(`user`)
}

function login(userName, password) {
    console.log(userName, password);
    return axios.post(AUTH_URL + 'login', {userName, password}).then(res => res.data)
}

function signup(userName, password) {
    return axios.post(AUTH_URL + 'signup', {userName, password}).then(res => res.data)
}

function logout() {
    sessionStorage.setItem(AUTH_URL, null)
    return Promise.resolve()
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(AUTH_URL))
}
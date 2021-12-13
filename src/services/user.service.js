const axios = require('axios')
import { httpService } from './http.service'
import { socketService } from './socket.service'
// var gWatchedUser = null;
const AUTH_URL = 'http://localhost:3030/api/auth/'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    getUsers
}

function getUsers() {
    // return axios.get(`user`) //***********our**********
    return httpService.get(`user`) //new
}

async function login(userName, password) {
    // console.log(userName, password);
    // return axios.post(AUTH_URL + 'login', {userName, password}).then(res => res.data) //***********our**********

     //new

    const user = await httpService.post('auth/login', {userName, password})
    socketService.emit('set-user-socket', user._id);
    if (user) return _saveLocalUser(user)
}

function _saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function signup(userName, password) {
    return axios.post(AUTH_URL + 'signup', {userName, password}).then(res => res.data)
}

function logout() {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, null)
    return Promise.resolve()
}

function getLoggedinUser() {
    var user = JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
    return user
}
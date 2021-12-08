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

function login(username, password) {
    console.log(username, password);
    return axios.post(AUTH_URL + 'login', {username, password}).then(res => res.data)
}

function signup(username, password) {
    return axios.post(AUTH_URL + 'signup', {username, password}).then(res => res.data)
}

function logout() {
    sessionStorage.setItem(AUTH_URL, null)
    return Promise.resolve()
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(AUTH_URL))
}

// async function getUsers() {
//     try {
//         let users = await storageService.query(USERS_KEY)
//         if (!users || !users.length) {
//             users = [
//                 {
//                     "_id": "u101",
//                     "fullName": "Lula Kula",
//                     "userName": "lula@amdadi.com",
//                     "password": "lula",
//                     "isAdmin": true,
//                     "imgUrl": "https://res.cloudinary.com/db0wqgy42/image/upload/v1638786774/avatars/avatar12_c2fk8k.jpg"
//                 },
//                 {
//                     "_id": "u102",
//                     "fullName": "Bela Mela",
//                     "userName": "bela@amdadi.com",
//                     "password": "bela",
//                     "isAdmin": true,
//                     "imgUrl": "https://res.cloudinary.com/db0wqgy42/image/upload/v1638786774/avatars/avatar1_ydl3ev.png"
//                 },
//                 {
//                     "_id": "u103",
//                     "fullName": "Zara Shara",
//                     "userName": "zara@amdadi.com",
//                     "password": "zara",
//                     "isAdmin": true,
//                     "imgUrl": "https://res.cloudinary.com/db0wqgy42/image/upload/v1638786774/avatars/avatar13_bd50y0.jpg"
//                 },
//                 {
//                     "_id": "u104",
//                     "fullName": "Nina Penina",
//                     "userName": "zara@amdadi.com",
//                     "password": "zara",
//                     "isAdmin": true,
//                     "imgUrl": "https://res.cloudinary.com/db0wqgy42/image/upload/v1638786774/avatars/avatar13_bd50y0.jpg"
//                 },
//                 {
//                     "_id": "u105",
//                     "fullName": "Jhon Snow",
//                     "userName": "jhon@amdadi.com",
//                     "password": "jhon",
//                     "isAdmin": true,
//                     "imgUrl": "https://res.cloudinary.com/db0wqgy42/image/upload/v1638786773/avatars/avatar4_qnojew.png"
//                 }
//                 ,
//                 {
//                     "_id": "u106",
//                     "fullName": "Kuki Shuki",
//                     "userName": "kuki@amdadi.com",
//                     "password": "kuki",
//                     "isAdmin": true,
//                     "imgUrl": "https://res.cloudinary.com/db0wqgy42/image/upload/v1638786773/avatars/avatar8_lfy71z.png"
//                 },
//                 {
//                     "_id": "u107",
//                     "fullName": "Bob Rob",
//                     "userName": "bob@amdadi.com",
//                     "password": "bob",
//                     "isAdmin": true,
//                     "imgUrl": "https://res.cloudinary.com/db0wqgy42/image/upload/v1638786773/avatars/avatar11_zrmnuw.jpg"
//                 },
//                 {
//                     "_id": "u108",
//                     "fullName": "Tom Frog",
//                     "userName": "tom@amdadi.com",
//                     "password": "tom",
//                     "isAdmin": true,
//                     "imgUrl": "https://res.cloudinary.com/db0wqgy42/image/upload/v1638786773/avatars/avatar2_znrytb.png"
//                 },
//                 {
//                     "_id": "u109",
//                     "fullName": "Muki Guki",
//                     "userName": "muki@amdadi.com",
//                     "password": "muki",
//                     "isAdmin": true,
//                     "imgUrl": "https://res.cloudinary.com/db0wqgy42/image/upload/v1638786773/avatars/avatar7_z8e9gw.png"
//                 },
//                 {
//                     "_id": "u110",
//                     "fullName": "Lala Belala",
//                     "userName": "lala@amdadi.com",
//                     "password": "lala",
//                     "isAdmin": true,
//                     "imgUrl": "https://res.cloudinary.com/db0wqgy42/image/upload/v1638786773/avatars/avatar6_vqrh3l.png"
//                 },
//                 {
//                     "_id": "u111",
//                     "fullName": "Mila Belila",
//                     "userName": "mila@amdadi.com",
//                     "password": "mila",
//                     "isAdmin": true,
//                     "imgUrl": "https://res.cloudinary.com/db0wqgy42/image/upload/v1638786773/avatars/avatar3_m1dr5v.png"
//                 },
//                 {
//                     "_id": "u112",
//                     "fullName": "Yosi Bosi",
//                     "userName": "yosi@amdadi.com",
//                     "password": "yosi",
//                     "isAdmin": true,
//                     "imgUrl": "https://res.cloudinary.com/db0wqgy42/image/upload/v1638786773/avatars/avatar9_fc6dnp.png"
//                 },
//                 {
//                     "_id": "u113",
//                     "fullName": "Roi Rosi",
//                     "userName": "roi@amdadi.com",
//                     "password": "roi",
//                     "isAdmin": true,
//                     "imgUrl": "https://res.cloudinary.com/db0wqgy42/image/upload/v1638786773/avatars/avatar5_titi4p.png"
//                 }
//             ];
//             await storageService.postMany(USERS_KEY, users);
//         }
//         return users;
//     } catch (err) {
//         console.log(err, 'error in createUsers');
//     }
// }
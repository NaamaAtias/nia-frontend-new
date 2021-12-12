// import { storageService } from './async-storage.service';
// import { userService } from './user.service';
import { httpService } from './http.service';

import Axios from 'axios'; var axios = Axios.create({ withCredentials: true });

// const STAY_KEY = 'stays';
// createStays();

const STAY_URL = (process.env.NODE_ENV !== 'development')
  ? '/api/stay/'
  : '//localhost:3030/api/stay/';

export const stayService = {
    add,
    query,
    remove,
    getById,
};

async function query(filterBy) {
    // return storageService.query(STAY_KEY);
  try {
    // const res = await axios.get(STAY_URL, { params: filterBy })
    return httpService.get('stay/', filterBy)
    // return res.data;
  }
  catch (err) {
    console.log(err)
    throw err;
  }
}

async function remove(stayId) {
    // return storageService.delete(STAY_KEY, stayId);
    try {
      const res = await axios.delete(STAY_URL + stayId);
      return res.data;
    }
    catch (err) {
      console.log(err);
      throw err;
    }
}

async function add(stay) {
    // stay.byUser = userService.getLoggedinUser()
    // stay.aboutUser = await userService.getById(stay.aboutUserId)
    // const addedStay = storageService.post(STAY_KEY, stay);
    // return addedStay;
    if (stay._id) {
      try {
        const res = await axios.put(STAY_URL + stay._id, stay);
        return res.data;
      }
      catch (err) {
        console.log(err)
        throw err;
      }
    } else {
      try {
        const res = await axios.post(STAY_URL, stay);
        return res.data;
      }
      catch (err) {
        console.log(err);
        throw err;
      }
    }
}

async function getById(stayId) {
    // const stay = await storageService.get(STAY_KEY, stayId);
    // // const user = await httpService.get(`user/${stayId}`)
    // return stay;
    try {
      const res = await axios.get(STAY_URL + stayId)
      return res.data;
    }
    catch (err) {
      console.log(err)
      throw err;
    }
}

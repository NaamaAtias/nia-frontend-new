// import { storageService } from './async-storage.service';
// import { userService } from './user.service';

import { httpService } from './http.service';
import Axios from 'axios';import { orderStore } from '../store/order.store';
 var axios = Axios.create({ withCredentials: true });

// const ORDER_KEY = 'orders';
// var gOrders = query() || [] ;
// // createOrders();

const STAY_URL = (process.env.NODE_ENV !== 'development')
  ? '/api/order/'
  : '//localhost:3030/api/order/';

export const orderService = {
    add,
    query,
    // remove,
    getById,
    updateApprove
};

// function query() {
//     return storageService.query(ORDER_KEY);
// }
async function query(filterBy) {
    // console.log('order filter:', filterBy)
  try {
    return httpService.get('order/', filterBy)
  }
  catch (err) {
    console.log(err)
    throw err;
  }
}

// function remove(orderId) {
//     return storageService.delete(ORDER_KEY, orderId);
// }

async function add(order) {
    // order.byUser = userService.getLoggedinUser()
    try {
        return httpService.post('order/', order)
      }
      catch (err) {
        console.log(err)
        throw err;
      }

    // const addedOrder = storageService.post(ORDER_KEY, order);
    // return addedOrder;
}

// async function createOrders() {
//   try {
//   let orders = await storageService.query(ORDER_KEY)
//   if (!orders || !orders.length) {
//         await storageService.postMany(ORDER_KEY, orders);
//         }
//         return orders;
//     } catch (err) {
//         console.log(err, 'error in createOrders');
//     }
// }

async function updateApprove(order) {
    const currOrder = await httpService.put(`order/${order._id}`, order);
    // const user = await httpService.get(`user/${orderId}`)
    return currOrder;
}
async function getById(orderId) {
    const order = await storageService.get(ORDER_KEY, orderId);
    // const user = await httpService.get(`user/${orderId}`)
    return order;
}



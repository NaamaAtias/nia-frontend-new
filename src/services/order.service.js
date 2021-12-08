import { storageService } from './async-storage.service';
import { userService } from './user.service';

const ORDER_KEY = 'orders';
var gOrders = query() || [] ;
// createOrders();

export const orderService = {
    add,
    query,
    // remove,
    getById,
};

function query() {
    return storageService.query(ORDER_KEY);
}

// function remove(orderId) {
//     return storageService.delete(ORDER_KEY, orderId);
// }

async function add(order) {
    order.byUser = userService.getLoggedinUser()
    const addedOrder = storageService.post(ORDER_KEY, order);
    return addedOrder;
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

async function getById(orderId) {
    const order = await storageService.get(ORDER_KEY, orderId);
    // const user = await httpService.get(`user/${orderId}`)
    return order;
}

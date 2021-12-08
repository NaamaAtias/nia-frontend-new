import { orderService } from '../services/order.service.js';
import { storageService } from '../services/async-storage.service.js';
// import { socketService, SOCKET_EVENT_REVIEW_ADDED, SOCKET_EVENT_REVIEW_ABOUT_YOU } from '../services/socket.service'

export const orderStore = {
    state: {
        currOrder: null,
        orders: [],
        currTrip: {}
    },
    getters: {
        showCurrOrder(state) {
            return state.currOrder;
        },
        orders(state) {
            return state.orders;
        },
        trip(state) {
            return state.currTrip;
        },
        nights(state) {
            if (state.currTrip.nights) return state.currTrip.nights;
            else return 0;
        }
    },
    mutations: {
         setOrder(state, { order }) {
            state.currOrder = order;
            state.currTrip = {};
            console.log('order', state.currOrder)
        },
        setCurrOrder(state, { order }) {
            state.currOrder = order;
        },
        setCurrTrip(state, { trip }) {
            state.currTrip = trip;
            storageService.save("search", trip);

        },

        addOrder(state, { order }) {
            state.orders.push(order);
        },
    },
    actions: {
        async addOrder(context, { order }) {
            try {
                order = await orderService.add(order);
                context.commit({ type: 'addOrder', order });
                return order;
            } catch (err) {
                console.log('orderStore: Error in addOrder', err);
                throw err;
            }
        },
        async loadOrder(context, { orderId }) {
            try {
                const order = await orderService.getById(orderId);
                console.log(stay);
                context.commit({ type: 'setCurrOrder', order });
                // socketService.off(SOCKET_EVENT_REVIEW_ADDED)
                // socketService.on(SOCKET_EVENT_REVIEW_ADDED, stay => {
                // //     console.log('Got stay from socket', stay);
                //     context.commit({ type: 'addStay', stay })
                // })
                // socketService.off(SOCKET_EVENT_REVIEW_ABOUT_YOU)
                // socketService.on(SOCKET_EVENT_REVIEW_ABOUT_YOU, stay => {
                //     console.log('Stay about me!', stay);

                // })
            } catch (err) {
                console.log('orderStore: Error in loadOrder', err);
                throw err;
            }
        },
        async loadOrders(context, { filterBy }) {
            try {
                const orders = await orderService.query(filterBy);
                context.commit({ type: 'setOrders', orders });
            } catch (err) {
                console.log('orderStore: Error in loadOrders', err);
                throw err;
            }
        },
    },
};

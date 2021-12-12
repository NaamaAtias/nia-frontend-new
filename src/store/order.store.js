import { orderService } from '../services/order.service.js';
import { storageService } from '../services/async-storage.service.js';
// import { socketService, SOCKET_EVENT_REVIEW_ADDED, SOCKET_EVENT_REVIEW_ABOUT_YOU } from '../services/socket.service'

export const orderStore = {
    state: {
        currOrder: null,
        orders: [],
        currTrip: {},
        isOrdered: false,
        filterOrdersBy: { host: '', byUser: '', isAprooved: 'all' },
        // filterOrdersByHostId: '',

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
            else if (state.currOrder.nights) return state.currOrder.nights;
            else return 0;
        },
        isOrdered(state) {
            return state.isOrdered;
        },
    },
    mutations: {
        setOrders(state, {orders}) {
            state.orders = orders;
            console.log('setOrders:',state.orders);
        },
         setOrder(state, { order }) {
            state.currOrder = order;
            state.currTrip = {};
            console.log('order', state.currOrder);
            state.isOrdered = true;
            console.log(state.isOrdered);
        },
        setCurrTrip(state, { trip }) {
            state.currTrip = trip;
            storageService.save("search", trip);
        },
        cleanScreen(state) {
            state.isOrdered = false;
            state.currOrder = {}
        },
        setOrdersFilter(state,  {filterBy} ) {
            // state.filterOrdersByHostId = filterByHostId;
            if (filterBy.filterType === 'host') state.filterOrdersBy.host = filterBy.filter;
            else if (filterBy.filterType === 'byUser') state.filterOrdersBy.byUser = filterBy.filter;
            else if (filterBy.filterType === 'isApproved') state.filterOrdersBy.isApproved = filterBy.filter;
            console.log('orders filter - mute', state.filterBy);
        },
        clearOrdersFilter(state) {
            state.filterBy =  { host: '', byUser: '', isAprooved: 'all' }
        }
    },
    actions: {
        async addOrdertoDB(context, { order }) {
            try {
                order = await orderService.add(order);
                console.log('orderService res',order)
                context.commit({ type: 'setOrder', order });
                return order;
            } catch (err) {
                console.log('orderStore: Error in addOrderToDB', err);
                throw err;
            }
        },
        async loadOrder(context, { orderId }) {
            try {
                const order = await orderService.getById(orderId);
                console.log(stay);
                context.commit({ type: 'setOrder', order });
            } catch (err) {
                console.log('orderStore: Error in loadOrder', err);
                throw err;
            }
        },
        async loadOrders(context,  {filterBy} ) {
            try {
                // var filterBy = state.filterBy ? state.filterBy : ''
                console.log(filterBy);
                const orders = await orderService.query(filterBy);
                context.commit({ type: 'setOrders', orders });
            } catch (err) {
                console.log('orderStore: Error in loadOrders', err);
                throw err;
            }
        },

        setOrdersFilter({ commit, dispatch }, {filterBy}) {
            console.log('ordersFilter', filterBy);
            commit({ type: 'setOrdersFilter', filterBy })
            dispatch({ type: 'loadOrders', filterBy })
        },
        clearOrdersFilter({ commit, dispatch }) {
            commit({ type: 'clearOrdersFilter' })
            dispatch({ type: 'loadOrders' })
        },
    },
};

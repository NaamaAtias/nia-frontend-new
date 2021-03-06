import { orderService } from '../services/order.service.js';
import { storageService } from '../services/async-storage.service.js';
import { socketService, SOCKET_EVENT_ORDER_ADDED, SOCKET_EVENT_ORDER_TO_YOU } from '../services/socket.service'

export const orderStore = {
    state: {
        currOrder: null,
        orders: [],
        currTrip: {},
        isOrdered: false,
        filterOrdersBy: { host: '', byUser: '', isAprooved: 'all' },
        // filterOrdersByHostId: '',
        currSearch: {startDate: 0, endDate: 0},
        isMobileFooter: true

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
        isMobileFooter(state) {
            return state.isMobileFooter;
        },
        searchedStartDate() {
            return state.currSearch.startDate;
        },
        searchedEndDate() {
            return state.currSearch.endDate;
        }
    },
    mutations: {
        setOrders(state, {orders}) {
            state.orders = orders;
        },
        setOrder(state, { order }) {
            state.currOrder = order;
            state.currTrip = {};
            state.isOrdered = true;
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
            if (filterBy.filterType === 'host') state.filterOrdersBy.host = filterBy.filter;
            else if (filterBy.filterType === 'byUser') state.filterOrdersBy.byUser = filterBy.filter;
            else if (filterBy.filterType === 'isApproved') state.filterOrdersBy.isApproved = filterBy.filter;
        },
        clearOrdersFilter(state) {
            state.filterBy =  { host: '', byUser: '', isAprooved: 'all' }
        },
        updateOrder(state, {order}) {
            var orders = state.orders.map(currOrder => {
                if (order._id === currOrder._id){
                    return order
                } else return currOrder
            })
            state.orders = orders
        },
        toggleMobileForm(state) {
            state.isMobileFooter = !state.isMobileFooter;
        }
    },
    actions: {
        async approveOrder(context, { orderId, isApproved }){            
            try {
                const idx = context.state.orders.findIndex((order) => order._id === orderId)
                var order = JSON.parse(JSON.stringify(context.state.orders[idx]))
                order.isApproved = isApproved
                await orderService.updateApprove(order);
                context.commit({ type: 'updateOrder', order });
                return order;
            } catch (err) {
                console.log('orderStore: Error in addOrderToDB', err);
                throw err;
            }
        },
        async addOrdertoDB(context, { order }) {
            try {
                order = await orderService.add(order);
                // console.log('orderService res',order)
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
                // console.log(stay);
                context.commit({ type: 'setOrder', order });
            } catch (err) {
                console.log('orderStore: Error in loadOrder', err);
                throw err;
            }
        },
        async loadOrders(context,  {filterBy} ) {
            try {
                // var filterBy = state.filterBy ? state.filterBy : ''
                // console.log(filterBy);
                const orders = await orderService.query(filterBy);
                context.commit({ type: 'setOrders', orders });
                socketService.off(SOCKET_EVENT_ORDER_ADDED)
                socketService.on(SOCKET_EVENT_ORDER_ADDED, order => {
                    console.log('Got order from socket', order);
                    context.commit({ type: 'addOrder', order })
                })
                socketService.off(SOCKET_EVENT_ORDER_TO_YOU)
                socketService.on(SOCKET_EVENT_ORDER_TO_YOU, order => {
                    console.log('order about me!', order);
                    
                })
            } catch (err) {
                console.log('orderStore: Error in loadOrders', err);
                throw err;
            }
        },
        setOrdersFilter({ commit, dispatch }, {filterBy}) {
            // console.log('ordersFilter', filterBy);
            commit({ type: 'setOrdersFilter', filterBy })
            dispatch({ type: 'loadOrders', filterBy })
        },
        clearOrdersFilter({ commit, dispatch }) {
            commit({ type: 'clearOrdersFilter' })
            dispatch({ type: 'loadOrders' })
        },
    },
};

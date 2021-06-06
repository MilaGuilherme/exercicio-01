import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [
            {
                name: "Produto 1",
                price: 0.99,
            },
            {
                name: "Produto 2",
                price: 9.99,
            },
        ],
    },
    getters: {
        getProducts: state => {
            return state.products.map(product => product)
        },
    },
    mutations: {
        insertProduct(state, payload) {
            state.products.push(payload);
        }
    },
    actions: {
        insertProduct(context, payload) {
            context.commit('insertProduct', payload)
        }
    }
})
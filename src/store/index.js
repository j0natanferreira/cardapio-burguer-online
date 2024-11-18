import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    productCart: []
  },
  getters: {
  },
  mutations: {
    loadProducts(state, products){
      state.products = products;
    },
    loadCart(state, product) {
      state.product = product;
    },
    addToCart(state, product) {
      state.productCart.push(product);
    },
    removeFromCart(state, productId) {
      var updatedCart = state.productCart.filter(item => productId != item.id );
      state.productCart = updatedCart;
    },
    clearCart(state) {
      state.productCart = [];
    }
  },
  actions: {
    loadProducts({commit}) {
      axios
      .get('http://localhost:3000/products')
      .then(response => {
        commit('loadProducts', response.data);
      })
    },

    loadCart({commit}) {
      commit('loadCart', 'productCart');
    }, 
    addToCart({commit}, product) {
      commit('addToCart', product);
    },
    removeFromCart({commit} , productId) {
      commit('removeFromCart', productId);
    },
    clearCart({commit}) {
      commit('clearCart');
    }
  },
  modules: {
  }
})

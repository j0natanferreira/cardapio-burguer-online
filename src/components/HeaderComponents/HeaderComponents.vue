<script>
import CartComponents from '../CartComponents/CartComponents.vue';
import {mapState} from 'vuex'
export default {
    name: "HeaderComponents",
    data() {
        return {
            cart: false
        }
    },
    computed: mapState ([
        'productCart'
    ]),
    components: {
        CartComponents
    },
    methods: {
        btnOpenCart() {
            this.cart = true;
        }
    },
    
}
</script>

<template>
    <div>
        <header class="flex items-end justify-around py-5 shadow-md bg-blue-700 text-white">
            <h1 class="text-4xl font-bold">Logomarca</h1>
            
            <button 
                @click="btnOpenCart()"
                type="button" 
                class="relative transition-all duration-300 text-xl hover:text-gray-300"
                >
                <i class="fa-solid fa-cart-shopping"></i>
                <div class="flex items-center justify-center absolute -top-2 -right-4 bg-red-500 rounded-full text-center w-5 h-5 text-sm">
                    <span>{{ productCart.length }}</span>
                </div>
            </button>
        </header>
        <CartComponents :cart="cart" @close-cart="cart = false"/>
    </div>
    
</template>

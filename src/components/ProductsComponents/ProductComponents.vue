<script>
import { mapState } from 'vuex';
export default {
    computed: mapState([
        'products',
        'productCart'
    ]),
    methods: {
        addToCart(product) {
            product.quantity = 1;
            this.$store.dispatch('addToCart', product)
        },
        isInCart(product) {
            return this.productCart.find(item => item.id == product.id);
        }
    }
}
</script>

<template>

    <div>
        <div class="flex flex-row justify-center flex-wrap mx-auto w-10/12 pb-10 ">
            <div 
                v-for="(product, index) in products" :key="index"
                class="flex flex-col justify-between items-center bg-blue-100 w-52 h-72 text-center m-2 pb-4 rounded-t-lg shadow overflow-hidden dark:bg-stone-800"
                :class="{inCart : isInCart(product)}"
                >
                <img class="rounded-t-lg h-36 object-cover transition duration-300 hover:scale-110" :src="product.image" >
                <h3 class="text-2xl font-bold">{{ product.title }}</h3>
                <p class="text-xl">R$ {{ product.price }}</p>
                <button 
                    v-if="!isInCart(product)"
                    @click="addToCart(product)"
                    type="button" 
                    class="transition-all bg-blue-700 text-white px-3 py-1 rounded-lg duration-500 hover:bg-blue-800">
                    Comprar
                    <i class="fa-solid fa-cart-plus"></i>
                </button>
                <button
                    v-else
                    @click="this.$store.dispatch('removeFromCart', product.id)"
                    type="button"
                    class="transition-all bg-red-700 text-white px-3 py-1 rounded-lg duration-500 hover:bg-red-800"
                >
                    Remover
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </div>
    </div>

</template>

<style scoped>

    .inCart {
        background: rgba(255, 0, 0, 0.103);
        border: 1px solid red;
    }
</style>
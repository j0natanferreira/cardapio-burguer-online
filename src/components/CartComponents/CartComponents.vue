<script>
import {mapState} from 'vuex';
export default {
    name: 'CartComponents',
    data() {
        return {
            endereco: '',
            phone: 82991506326,
        }
    },
    props: {
        cart: Boolean
    },
    computed: mapState([
        'productCart'
    ]),
    methods: {
        btnClose() {
            this.$emit('close-cart');
        },
        totalPriceCart() {
            var total = 0;
            this.productCart.forEach(item => {
                total += item.price * item.quantity;
            });
            return total.toFixed(2);
        },
        clearCart() {
            this.$store.dispatch('clearCart')
        },
        finishCart() {
            if(this.endereco.length > 1) {
                var produtos = this.productCart.map(item => `${item.title} - Qtd: ${item.quantity} - R$ ${item.price*item.quantity}\n`);
                var message = `Descrição - Quantidade - Preço\n${produtos}\nTotal: ${this.totalPriceCart()}\nEndereço: ${this.endereco}`;
                window.open(`https://wa.me/${this.phone}?text=${encodeURIComponent(message)}`, "_blank");
                window.location.href = 'http://localhost:5173/';
            }else {
                alert("Digite o endereço de entrega")
            }
        },
    },
}
</script>

<template>
    <div class="relative" v-show="cart">
        <div class="fixed flex flex-col top-0 right-0 bg-stone-900 h-full w-96 text-white z-40">
            <div class="flex justify-between items-center p-4">
                <h1 class="text-3xl font-bold">Carrinho</h1>
                <button 
                    @click="btnClose"
                    type="button" 
                    class="text-3xl transition-all duration-300 hover:text-red-800">
                    <i class="fa-regular fa-circle-xmark"></i>
                </button>
            </div>

            <!-- Produtos Carrinho -->
            <div v-if="productCart.length > 0" class="overflow-y-auto overflow-x-hidden">
                <div 
                    v-for="(product, index) in productCart" :key="index" 
                    class="flex flex-col pb-3"
                >
                    <div class="flex justify-between items-center pl-2 w-full">
                        <img :src="product.image" alt="product" class="h-12">
                        <span class="w-28">{{ product.title }}</span>
                        <span>R$ {{ (product.price * product.quantity).toFixed(2) }}</span>
                        <div class="flex gap-2">
                            <button 
                                :disabled="product.quantity <= 1"
                                @click="product.quantity--"
                                class="transition duration-300 hover:text-blue-800"
                            >
                                <i class="fa-solid fa-circle-arrow-left"></i>
                            </button>
                            <span>{{product.quantity}}</span>
                            <button 
                                @click="product.quantity++"
                                class="transition duration-300 hover:text-blue-800"
                            >
                                <i class="fa-solid fa-circle-arrow-right"></i>
                            </button>
                        </div>
                        <button 
                            @click="this.$store.dispatch('removeFromCart', product.id)"
                            class="py-1 px-3 text-xl bg-red-700 transition-all duration-300 hover:bg-red-800 hover:pr-5"
                            type="button"
                        >
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </div>
    
                </div>

            </div>
            
            <!-- Caso estea vazio -->
            <div v-else class="flex flex-col items-center justify-center gap-4 h-3/4">
                <i class="fa-solid fa-cart-shopping text-6xl"></i>
                <h1 class="text-4xl">Carrinho vazio</h1>
            </div>

            <!-- Endereço -->
            <div class="flex">
                <input 
                    required
                    v-model="endereco"
                    type="text" 
                    class="absolute bottom-24 w-full text-sm border-gray-300 p-2.5 text-black font-bold placeholder:text-black placeholder:font-bold" 
                    placeholder="Digite seu endereço(Rua, Nº, Bairro)"
                >
            </div>

            <!-- Valor total -->
            <div>
                <span type="button" class="flex justify-end px-2 items-center pl-2 bg-green-300 text-black w-full h-10 text-3xl font-bold absolute bottom-14">R$ {{ totalPriceCart() }}</span>
            </div>

            <!-- Botões de limpar e finalizar -->
            <div class="flex items-center justify-center absolute bottom-0 h-14 w-full">
                <button 
                    @click="clearCart()"
                    :disabled="this.productCart <= 0"
                    type="button" 
                    class="bg-red-500 hover:bg-red-600 w-1/2 h-14 text-xl transition-all duration-300 font-bold"
                >
                    LIMPAR
                    <i class="fa-regular fa-trash-can"></i>
                </button>
                <button 
                    @click="finishCart()"
                    :disabled="this.productCart <= 0"
                    type="button" 
                    class="bg-blue-700 flex-1 h-14 text-xl transition-all duration-300 hover:bg-blue-800 font-bold"
                >
                    FINALIZAR
                    <i class="fa-solid fa-floppy-disk"></i>
                </button>
            </div>
        </div>
    </div>
</template>

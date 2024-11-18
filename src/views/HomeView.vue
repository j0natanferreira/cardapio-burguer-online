<script>
import HeaderComponents from '../components/HeaderComponents/HeaderComponents.vue';
import ProductsComponents from '../components/ProductsComponents/ProductsComponents.vue';
import CartComponents from '../components/CartComponents/CartComponents.vue';

export default {
    components: {
        HeaderComponents,
        ProductsComponents,
        CartComponents
    }
}
</script>

<template>
    <div>
        <HeaderComponents />
        <div class="flex justify-center text-4xl font-bold py-4">
           <h1>Produtos</h1>
        </div>
        <ProductsComponents />
        <CartComponents />
    </div>
</template>

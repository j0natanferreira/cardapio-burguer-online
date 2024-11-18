<script>
import HeaderComponents from './components/HeaderComponents/HeaderComponents.vue';
import HomeView from './views/HomeView.vue';
import { mapState } from 'vuex';

export default {
  components: { 
    HeaderComponents,
    HomeView 
  },

  created() {
    this.$store.dispatch('loadProducts');
  },
  computed: mapState([
    'productCart',
  ])
}

</script>

<template>
  <div>
    <HomeView />
  </div>
</template>

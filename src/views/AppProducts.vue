<template>
  <div >
    <app-products></app-products>
  </div>
</template>
<script>
// @ is an alias to /src
import AppProducts from '../components/AppProducts.vue'
export default {
  name: 'Products',
  components: {
    AppProducts
  }
}
</script>
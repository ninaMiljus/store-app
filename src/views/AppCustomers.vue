<template>
  <div >
    <app-customers></app-customers>
  </div>
</template>
<script>
// @ is an alias to /src
import AppCustomers from '../components/AppCustomers.vue'
export default {
  name: 'Customers',
  components: {
    AppCustomers
  }
}
</script>
<template>
  <div>
    <h1>Customers</h1>
    <hr/>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th scope="col">Email</th>
          <th scope="col">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer, index) in customers" :key="index">
          <td>{{ customer.firstName }}</td>
          <td>{{ customer.lastName }}</td>
          <td>{{ customer.email }}</td>
          <td class="text-right">
            <button class="btn btn-danger btn-sm" @click="removeCustomer(index)">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
      name: 'Customers',
      data(){
        return {
          newCustomerId: '',
          newCustomerFirstName: '',
          newCustomerLastName: '',
          newCustomerEmail: '',
          customers: [
            {
              id: 1,
              firstName: 'Marko',
              lastName: 'Markovic',
              email: 'marko@gmail.com'
            },
            {
              id: 2,
              firstName: 'Petar',
              lastName: 'Petrovic',
              email: 'petar@gmail.com'
            },
            {
              id: 3,
              firstName: 'Jovana',
              lastName: 'Jovanovic',
              email: 'jovana@gmail.com'
            }
          ],
            newCustomer: {
              id: this.newCustomerId,
              firstName: this.newCustomerFirstName,
              lastName: this.newCustomerLastName,
              email: this.newCustomerEmail
            }
        }
      },
      methods: {
        list() {
          return this.customers.list();
        },

        removeCustomer(index) {
          this.customers.splice(index, 1);
        }
      }
    }
</script>
<template>
  <div>
    <h1>Customers</h1>
    <hr/>
    <div class="row">
      <div class="col-sm-4">
        <form @submit.prevent="addCustomer">
          <div class="form-group">
            <label for="name">First name</label>
            <input v-model="newCustomer.firstName" type="text" class="form-control" id="first-name" placeholder="Enter name">
          </div>
          <div class="form-group">
            <label for="name">Last name</label>
            <input v-model="newCustomer.lastName" type="text" class="form-control" id="last-name" placeholder="Enter name">
          </div>
          <div class="form-group">
            <label for="email">Email address</label>
            <input v-model="newCustomer.email" type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>

    <br/>
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
        },

        addCustomer() {
          this.customers.push(this.newCustomer)
          this.newCustomer = {}
        }
      }
    }
</script>
<template>
  <div class="box box-info">
    <div class="box-header with-border">
      <h3 class="box-title">Accounts</h3>
    </div>
    <div class="card-body">
      <table class="table table-bordered table-striped">
        <thead class="thead">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Account Number</th>
            <th scope="col">Account Name</th>
            <th scope="col">Account Type</th>
            <th scope="col">Address</th>
            <th colspan="2" class="text-center" scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(account, item) in accounts" :key="account.id">
            <td>{{ item + 1 }}</td>
            <td>{{ account.account_number }}</td>
            <td>{{ account.account_name }}</td>
            <td>{{ account.account_type }}</td>
            <td>{{ account.address }}</td>
            <td>
              <router-link
                :to="{ name: 'editaccount', params: { id: accounts.id } }"
                class="btn btn-info"
              >
                <i class="fa fa-edit"></i> Edit
              </router-link>
            </td>
            <td>
              <button class="btn btn-danger" @click="remove(key, account.id)">
                <i class="fa fa-trash"></i> Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accounts: {},
      error: {}
    };
  },

  methods: {
    loadAccounts() {
      this.$axios
        .get("/accounts")
        .then(response => {
          this.accounts = response.data;
        })
        .catch(error => (this.error = error.response.data.error));
    },

    remove(key, id) {
      //console.log(`${key} ${id}`)
      this.$axios
        .delete(`/accounts/${id}`)
        .then(response => this.accounts.splice(key, 1))
        .catch(error => (this.error = error.response.data.error));
    }
  },

  mounted() {
    this.loadAccounts();
  }
};
</script>

<style scoped></style>

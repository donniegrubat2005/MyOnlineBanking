<template>
  <div class="col-md-11">
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
                  :to="`/accounts/edit/${account.id}`"
                  class="btn btn-info"
                >
                  <i class="fa fa-edit"></i> Edit
                </router-link>
              </td>
              <td>
                <button
                  class="btn btn-danger"
                  @click.prevent="remove(item, account.id)"
                >
                  <i class="fa fa-trash"></i> Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
        .get("/accounts/list")
        .then(response => {
          this.accounts = response.data;
        })
        .catch(error => (this.error = error.response.data.error));
    },

    remove(item, id) {
      //console.log(`${key} ${id}`)
      this.$axios
        .delete(`/accounts/${id}`)
        .then(response => {
          this.accounts.splice(item, 1);
          this.$toastr.warning(
            "Records has been successfully deleted!",
            "Deleted Record",
            {
              progressBar: true,
              setimeout: 2000,
              preventDuplicate: true
            }
          );
        })
        .catch(error => (this.error = error.response.data.error));
    }
  },

  mounted() {
    this.loadAccounts();
  }
};
</script>

<style scoped></style>

<template>
  <div class="col-md-11">
    <div class="box box-info">
      <div class="box-header with-border">
        <h3 class="box-title">Create Account</h3>
      </div>
      <!-- /.box-header -->
      <!-- form start -->
      <form class="form-horizontal">
        <div class="box-body">
          <div class="form-group">
            <label for="account_number" class="col-sm-2 control-label"
              >Account Number</label
            >
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="account_number"
                name="account_number"
                v-model="account.account_number"
                placeholder="Account Number"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="account_name" class="col-sm-2 control-label"
              >Account Name</label
            >
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="account_name"
                name="account_name"
                v-model="account.account_name"
                placeholder="Account Name"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="account_type" class="col-sm-2 control-label"
              >Account Type</label
            >
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="account_type"
                name="account_type"
                v-model="account.account_type"
                placeholder="Account Type"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="address" class="col-sm-2 control-label">Address</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="address"
                name="address"
                v-model="account.address"
                placeholder="Address"
              />
            </div>
          </div>
        </div>
        <!-- /.box-body -->
        <div class="box-footer">
          <button @click.prevent="save()" class="btn btn-info pull-right">
            Create Account
          </button>
        </div>
        <!-- /.box-footer -->
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: {
        account_number: "",
        account_name: "",
        account_type: "",
        address: ""
      },
      error: {}
    };
  },

  methods: {
    save() {
      this.$axios
        .post("/accounts/create ", this.$data.account)
        .then(response => {
          this.$router.push({ name: "accountlist" });
          this.$toastr.success(
            "Records has been successfully saved!",
            "Save Record",
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
    console.log("Component mounted.");
  }
};
</script>

<style></style>

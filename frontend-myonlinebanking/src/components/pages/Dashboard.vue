<template>
  <div>
    <h1>This is dashboard</h1>
    <button class="btn btn-primary" @click="test()">Connected</button>
  </div>
</template>
    
<script>
export default {
  data() {
    return {};
  },
  methods: {
    test() {
      //this.$http.get('api/test')
      this.$axios.get("/test").then(function(response) {
        console.log(response);
      });
    }
  },
  mounted() {}
};
</script>

<style scoped>
</style>
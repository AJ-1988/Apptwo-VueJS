<template>
  <div class="container">
    <ul class="list-group" v-for="u in user">
      <h1 class="mt-4 mb-4">{{u.name}}</h1>
      <li class="list-group-item list-group-item-light">Phone number: {{u.phone_number}}</li>
      <li class="list-group-item list-group-item-light">Deposite amount: {{u.deposite_amount}}</li>
      <li class="list-group-item list-group-item-light">Deposite date: {{u.deposite_date}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      user: []
    }
  },
  methods: {
    fetchUser(id) {
      this.$http.get('http://api.aj-jerath.com/apptwo/user/'+id).then((res) => {
        this.user = res.body;
      });
    }
  },
  created: function() {
    this.fetchUser(this.$route.params.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

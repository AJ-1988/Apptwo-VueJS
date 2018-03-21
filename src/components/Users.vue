<template>
  <div class="container">
    <h1 class="mt-4">Users</h1>
    <input type="text" class="form-control form-control-lg mt-5 mb-5" placeholder="search" v-model="filterInput">
    <ul class="list-group" v-for="user in filterBy(users, filterInput)">
      <li class="list-group-item list-group-item-success mb-3"><h2>{{user.name}}</h2> <router-link class="btn btn-success btn-lg mt-2" v-bind:to="'/projects/apptwo/user/'+user.id">Details</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
      users: [],
      filterInput: ''
    }
  },
  methods: {
    fetchUsers() {
      this.$http.get('http://api.aj-jerath.com/apptwo/users').then((res) => {
        this.users = res.body;
      });
    },
    filterBy(list, value) {
      value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      return list.filter(function(user) {
        return user.name.indexOf(value) > -1;
      })
    }
  },
  created: function() {
    this.fetchUsers();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

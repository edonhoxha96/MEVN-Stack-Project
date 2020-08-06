<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
      <div class="container">
        <div class="image">
          <a href="HomePage" class="navbar-brand">
            <img src="../assets/emall-logo.png" />eMall
          </a>
        </div>
        <ul class="navbar-nav">
          <div v-if="loggedIn">
            <li class="nav-item">
              <router-link class="nav-link" to="/login">
                <a @click="logout()">Logout</a>
              </router-link>
            </li>
          </div>
          <div class="nav-item" v-else>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">
                <a>Login</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register">
                <a>Register</a>
              </router-link>
            </li>
          </div>
           <li class="nav-item">
            <router-link class="nav-link" to="/Masterlogin">
              <a>Admin</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed:{
    ...mapGetters({
      loggedIn: 'isLoggedIn'
    })
  },
  methods:{
    logout(){
      this.$store.dispatch("logoutUser");
    }
  }
};
</script>

<style lang="scss" scoped>
.image {
  width: 85px;
}

.image img {
  width: 100%;
}

.nav-item{
  display: flex;
}
</style>

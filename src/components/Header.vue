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
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.image {
  width: 85px;
}

.image img {
  width: 100%;
}
</style>

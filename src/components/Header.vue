<template>
  <div class="header">
    <div class="logo">
      <h1>
          <a href="HomePage">
        <img src="../assets/emall-logo.png" />emall 
          </a>
      </h1>
    </div>
    <div class="login">
    <ul>
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
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  background-color: #333;
  display: flex;
  justify-content: space-between;
}
h1 {
  font-family: Poppins;
}
.logo {
  width: 250px;
  padding-top: 5px;
  
}
.logo:hover {
  background-color: rgb(121, 133, 121);
}
.hello {
  background-color: white;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 0px;
}
a {
  color: #42b983;
  font-size: 25px;
}
.nav-item:nth-child(1) {
  border-right: 1px solid #eee;
}
.nav-link:hover {
  background-color: #eee;
  outline-color: #eee;
}
.login {
background-color: #333;
align-self: center;

}
</style>

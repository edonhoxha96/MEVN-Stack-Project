<template>
  <div class="hello">
    <ul>
      <li class="nav-item">
        <router-link class="nav-link" to="/login">
          <a>Login</a>
        </router-link>
      </li>
      <li>
        <router-link class="nav-link" to="/about">
          <a>About Page</a>
        </router-link>
      </li>
        <a href="https://react-my-burger-5639f.firebaseapp.com/">Burgeri</a>
      
<footer> </footer>
     
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  background-color: grey;
}
.footer {
  display:block;
  margin: 10%;
  background-color: #42b983;
}
</style>

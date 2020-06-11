<template>
    <div>
 <div class="hello">
    <ul>
      <li class="nav-item">
        <router-link class="nav-link" to="/login">
          <a>Login</a>
        </router-link>
      </li>
      <li class="nav-item">
      
        <router-link class="nav-link" to="/about">
          <a>About Page</a>
        </router-link>
      </li>
      <li>

        <a href="https://react-my-burger-5639f.firebaseapp.com/">Burgeri</a>
      </li>
    </ul>
    </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Webapp",
    };
  },
};
</script>


<style lang="scss" scoped>
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
.nav-item {
        border-right: 1px solid #eee;
}
.nav-link:hover {
    background-color: #eee;
    outline-color: #eee;
}

</style>
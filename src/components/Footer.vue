<template>
  <div class="page-footer">
    <div class="footer">
      <ul>
        <ol>
          <router-link class="nav-link" to="/about">
            <a>About Page</a>
          </router-link>
        </ol>
        <ol>
          <router-link class="nav-link" to="/politikat">
            <a>Politikat e Privatësis</a>
          </router-link>
        </ol>
        <ol>
          <router-link class="nav-link" to="/kushtet">
            <a>Kushtet e përdorimit</a>
          </router-link>
        </ol>
      </ul>
    </div>
    <div class="social">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <button class="btn"><i class="fa fa-instagram"></i></button>
      <button class="btn"><i class="fa fa-facebook"></i></button>
      <button class="btn"><i class="fa fa-twitter"></i></button>
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
.page-footer {
  background-color: aqua;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20%;
}
.footer {
  float: left;
}
.btn {
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
}

.btn:hover {
  background-color: RoyalBlue;
}
</style>

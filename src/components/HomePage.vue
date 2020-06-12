<template>
  <div class="wrapper">
    <section class="items">
      <div class="produkti">
        <img src="https://source.unsplash.com/random/200x200" alt />
        <h3>Produkti</h3>
        <span>pershkrimi i produktit</span>
      </div>

      <img src="https://source.unsplash.com/random/201x200" alt />
      <img src="https://source.unsplash.com/random/203x200" alt />
      <img src="https://source.unsplash.com/random/204x200" alt />
      <img src="https://source.unsplash.com/random/205x200" alt />
      <img src="https://source.unsplash.com/random/206x200" alt />
      <img src="https://source.unsplash.com/random/207x200" alt />
      <img src="https://source.unsplash.com/random/208x200" alt />
      <img src="https://source.unsplash.com/random/209x200" alt />
      <img src="https://source.unsplash.com/random/202x200" alt />
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  display: grid;
  grid-gap: 20px;
}
.produkti{
  text-align: left;
}
.produkti h3{
  cursor: pointer;
}
.items {
  display: grid;
  grid-gap: 35px;
  padding: 20px 5%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.items img {
  width: 100%;
}
</style>

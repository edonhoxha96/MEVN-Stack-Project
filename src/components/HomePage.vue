<template>
  <div class="container m-9">
    <section class="card-columns mt-5 items">
      <!-- <div class="card karta">
        <img class="card-img-top" src="https://source.unsplash.com/random/201x200" alt />
        <div class="card-body">
          <h4 class="card-title">Card Titile</h4>
          <p class="card-text">This is the test of a short preview for a product description</p>
          <a href class="btn btn-success btn-block">Read description</a>
        </div>
      </div> -->

      <!-- **********     WHEN READY REPLACE WITH THE ONE BELOW    ********** -->

      <div class="card karta" v-for="product in products" :key="product.id">
        <img class="card-img-top" :src="getPath(product.image)" alt />
        <div class="card-body">
          <h4 class="card-title">{{product.name}}</h4>
          <p class="card-text">{{product.price}}</p>
          <router-link :to="{name: '/', params: { id: product._id }}" class="btn btn-success btn-block">Read description</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      products: []
    };
  },
  created() {
    axios.get(`http://localhost:3000/emall/api/products`)
    .then(response => {
      this.products = response.data;
    });
  },
  methods:{
      getPath(picturepath){
        if(picturepath == null) {
          return
        }
        return require(`../assets/${picturepath}`)
      }
    }
};
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-gap: 20px;
}
.items {
  display: grid;
  grid-gap: 35px;
  max-width: 200px;
}
/* .karta {
  max-width: 100%;
} */
.items img {
  width: 100%;
}
</style>

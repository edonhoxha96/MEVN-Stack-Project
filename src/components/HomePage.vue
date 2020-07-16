<template>
  <div class="container input-group m-9">
    <div class="filter">
      <input class="form-control" type="text" v-model="search" placeholder="Search Product" />
      <Categories />
    </div>
    <section class="card-columns content mt-5">
      <div class="card karta" v-for="product in filteredProducts" :key="product.id">
        <div class="image">
          <div class="image1">
            <img class="card-img-top img-fluid" :src="getPath(product.image)" alt />
          </div>
        </div>
        <div class="card-body">
          <h4 class="card-title">{{product.name}}</h4>
          <p class="card-text">{{product.price}}</p>
          <router-link
            :to="{to: '/', params: { id: product._id }}"
            class="btn btn-success btn-block"
          >Read description</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import Categories from "./Categories";

export default {
  name: "HomePage",
  data() {
    return {
      products: [],
      search: ""
    };
  },
  components: {
    Categories
  },
  created() {
    axios.get(`http://localhost:3000/emall/api/products`).then(response => {
      this.products = response.data;
    });
  },
  computed: {
    filteredProducts: function() {
      return this.products.filter(product => {
        return product.name.toLowerCase().match(this.search.toLowerCase());
      });
    }
  },
  methods: {
    getPath(picturepath) {
      if (picturepath == null) {
        return;
      }
      return require(`../assets/${picturepath}`);
    }
  }
};
</script>

<style scoped>
.karta {
  max-width: 250px;
}
/* .image {
  height: 200px;
  display: table-cell;
  vertical-align: middle;
}
.image1{
  display: block;
  text-align: center;
} */
.filter {
  display: flex;
  width: 100%;
}
.image img {
  max-width: 200px;
}
</style>

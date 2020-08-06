<template>
  <div id="app" class="container input-group m-9">
    <div class="filter">
      <input class="form-control" type="text" v-model="search" placeholder="Search Product" />
      <div class="categories">
        <div v-for="category in parentCategories" :key="category.id"> 
          <b-dropdown split :text="category.name" @click="filterCategory(category.id)" class="m-2">
            <div v-for="cats in categories" :key="cats.id">
            <b-dropdown-item @click="filterCategory(cats.id)" v-if="category.id == cats.parentId">{{cats.name}}</b-dropdown-item>
            </div>
          </b-dropdown>
        </div>
     </div>
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
import {BDropdown} from "bootstrap-vue";

export default {
  name: "HomePage",
  data() {
    return {
      products: [],
      categories: [],
      parentCategories: [],
      search: ""
    };
  },
  components: {
    'b-dropdown': BDropdown
  },
  created() {
    axios.get(`http://localhost:3000/emall/api/products`).then(response => {
      this.products = response.data;
    });

    axios.get(`http://localhost:3000/emall/api/categories`).then(response => {
      this.categories = response.data;
      });

    axios.get(`http://localhost:3000/emall/api/parentcategories`).then(response => {
      this.parentCategories = response.data;
      });
  },
  computed: {
    filteredProducts: function() {
      return this.products.filter(product => {
        return product.name.toLowerCase().match(this.search.toLowerCase());
      });  
    },
    filterCategory: function(cid) {
      console.log(cid)
      return this.products.filter(product => {
        return product.CategoryId.match(cid);
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

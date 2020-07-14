<template>
  <div class="categories">
    <div v-for="category in categories" :key="category.id">
      <div class="category">
        <button class="btn btn-dark button">{{category.name}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Categories",
  data() {
    return {
      categories: [],
      search: ''
    };
  },
  computed: {
    filteredProducts: function() {
      return this.products.filter(product => {
        return product.categegory.toLowerCase().match(this.search.toLowerCase());
      });
    }
  },
  created() {
    axios.get(`http://localhost:3000/emall/api/categories`).then(response => {
      this.categories = response.data;
    });
  }
};
</script>

<style lang="scss" scoped>
.categories {
  display: flex;
  width: 100%;
  background-color: #343a40;
}
.category {
  min-width: 100px;
}
.button {
  min-width: 100px;
}
</style>
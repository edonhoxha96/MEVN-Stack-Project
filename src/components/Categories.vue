<template>
  <div class="categories">
    <!-- <div v-for="category in parentCategories" :key="category.id">
      <div class="category">
        <button class="btn btn-dark button">{{category.name}}</button>
      </div>
    </div> -->
    <div class="text-center" v-for="category in parentCategories" :key="category.id">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attre }">
        <v-btn
          color="primary"
          dark
          v-bind="attr"
          v-on="on"
        >
          {{category.name}}
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="subcategory in categories"
          :key="subcategory.id"
        >
          <v-list-item-title >{{ subcategory.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
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
      parentCategories: [],
    };
  },
  computed:{
      // subCategories: (id) => {
      //  axios.get(`http://localhost:3000/emall/api/subcategories/${id}`).then(response => {
      //   var sub = response.data
      // });
      // return sub
      // }
  },
  created() {
    axios.get(`http://localhost:3000/emall/api/categories`).then(response => {
      this.categories = response.data;
      });

      axios.get(`http://localhost:3000/emall/api/parentcategories`).then(response => {
      this.parentCategories = response.data;
      });
    }
  }

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
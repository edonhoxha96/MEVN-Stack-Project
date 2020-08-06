<template>
  <div class="container mt-5 mb-5 content">
    <div class="heading">
      <h1>Welcome back {{user.firstName}}</h1>
      <div class="buttons">
        <ul class="list">
          <li>
            <router-link :to="{name: 'addProduct'}">Add a Product</router-link>
          </li>
          <li>
            <button @click="logout">LogOut</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="store">
      <div>
        <h3 class="storename">{{store.name}}</h3>
        <div class="logo" v-if="store.logo != null">
          <img :src="getPath(store.logo)" alt="logo" width="500px" height="400px" />
        </div>
      </div>
      <hr />
      <h2>Your Products:</h2>
      <div class="card-columns productlist" v-for="product in products" :key="product.id">
        <div class="image">
          <img class="card-img-top productimg" :src="getPath(product.image)" alt />
        </div>
        <div class="card-body">
          <h4 class="card-title">{{product.name}}</h4>
          <p class="card-text">Product price: {{product.price}}</p>
          <div>Product rating: {{product.rating}}</div>
          <router-link :to="{name: 'editproduct', params: { id: product.id }}">Edit</router-link>
          <button class= "btn btn-danger" @click="remove(product.id)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "StoreKeeperPage",
  data() {
    return {
      store: {},
      products: []
    };
  },
  computed: {
    ...mapState(["user"])
  },
  mounted() {
    this.$store.dispatch("loadCurrentUser");

    axios
      .get(`http://localhost:3000/emall/api/stores/${this.user.StoreId}`)
      .then(response => {
        this.store = response.data;
      });

    axios
      .get(`http://localhost:3000/emall/api/storeproducts/${this.user.StoreId}`)
      .then(response => {
        this.products = response.data;
      });
  },
  methods: {
    getPath(picturepath) {
      if (picturepath == null) {
        return;
      }
      return require(`../assets/${picturepath}`);
    },
    logout() {
      this.$store.dispatch("logoutUser");
      this.$router.push("userLogin");
    },
    remove(id) {
      var result = confirm("Are you sure you want to delete?");
      if (result){
      axios.delete(`http://localhost:3000/emall/api/products/delete/${id}`)
      .then(response => {
        console.log(response)
      });
      location.reload()
      } 
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  padding-top: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 31px -12px black;
}
.buttons {
  float: right;
  padding-top: 11px;
}
.heading h1 {
  width: 80%;
  padding-left: 10px;
}
.heading {
  display: flex;
  width: 100%;
  text-align: left;
}
.logo img {
  border-radius: 50%;
  box-shadow: 0px 0px 20px 0px;
  max-width: 250px;
  height: 250px;
}
h3 {
  margin: 40px 0 0;
}
.heading .list {
  margin: 0;
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
.store {
  box-shadow: 0px 0px 20px -9px;
  border-radius: 3px;
  padding: 1px;
}
.store h2 {
  padding: 30px;
}
.productlist {
  margin: 30px;
  box-shadow: 0px 0px 20px -9px;
}
.productimg {
  max-width: 200px;
}
.storename {
  margin: 40px 0 40px 0;
  padding-top: 30px;
}
.productlist:hover {
  box-shadow: 0px 0px 20px 3px;
  cursor: pointer;
}
</style>

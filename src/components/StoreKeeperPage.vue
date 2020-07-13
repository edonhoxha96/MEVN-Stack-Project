<template> 
  <div>
    <h1>Hello {{user.firstName}}</h1>
    <div><ul>
      <li><button @click="logout">LogOut</button></li>
      <li><router-link :to="{path: '/addProduct'}">Add a Product</router-link></li>
    </ul></div>
    
    <div>
      <h3>{{store.name}}</h3>
      <div v-if="store.logo != null">
      <img :src="getPath(store.logo)" alt="logo" width="500px" height="400px">
      </div>
    </div>
    <hr>
    <h2>Your Products:</h2>
  <div v-for="product in products" :key="product.id">
      <div>{{product.name}}</div>
      <div>{{product.price}}</div>
      <div>{{product.rating}}</div>
      <router-link :to="{name: 'editproduct', params: { id: product.id }}">Edit</router-link>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'

export default {
  name: "StoreKeeperPage",
  data(){
    return{
      store:{},
      products:[]
    }
  },
  computed:{
    ...mapState(['user'])
  },
  mounted(){
    this.$store.dispatch('loadCurrentUser')

    axios.get(`http://localhost:3000/emall/api/stores/${this.user.StoreId}`)
        .then(response => {
        this.store = response.data;
          });

    axios.get(`http://localhost:3000/emall/api/storeproducts/${this.user.StoreId}`)
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
      },
      logout(){
        this.$store.dispatch('logoutUser')
        this.$router.push('userLogin')
      },
      loadStores(){
        
      }
    }
  }

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
</style>

<template> 
  <div>
    <h1>Hello {{admin.firstName}}</h1>
    <div><ul>
      <li><button @click="logout">LogOut</button></li>
      <li><router-link :to="{path: '/addStore'}">Add a Store</router-link></li>
      <li><router-link :to="{path: '/addStoreKeeper'}">Add a StoreKeeper</router-link></li>
    </ul></div>
    
    <div v-for="store in stores" :key= "store.id">
      <h3>{{store.name}}</h3>
      <div v-if="store.logo != null">
      <img :src="getPath(store.logo)" alt="logo" width="500px" height="400px">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'

export default {
  name: "AdminPage",
  data(){
    return{
      stores:[]
    }
  },
  computed:{
    ...mapState(['admin'])
  },
  mounted(){
    this.$store.dispatch('loadCurrentAdmin')
  },
  created(){
      axios.get(`http://localhost:3000/emall/api/stores`)
        .then(response => {
        this.stores = response.data;
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
        this.$store.dispatch('logoutAdmin')
        this.$router.push('adminLogin')
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

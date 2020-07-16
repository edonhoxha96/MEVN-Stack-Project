<template> 
  <div>
    <h1>Your Wishlist</h1>
    
    <div v-for="prod in wishlist" :key="prod.id">
      <h3>{{prod.name}}</h3>
      <h3>{{prod.price}}</h3>
      <div v-if="prod.image != null">
      <img :src="getPath(prod.image)" alt="logo" width="500px" height="400px">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'

export default {
  name: "Wishlist",
  data(){
    return{
      wishlist:[],
    }
  },
  computed:{
    ...mapState(['user','products'])
  },
  mounted(){
    this.$store.dispatch('loadCurrentUser')
  },
  created(){
      axios.get(`http://localhost:3000/emall/api/wishlists/${this.user.id}`)
        .then(response => {
        var list = response.data;
        list.forEach(element => {
            this.wishlist.push(this.products.find(p => p.id == element.ProductId))
        });

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
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
    width:300px;
    height:300px;
}
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

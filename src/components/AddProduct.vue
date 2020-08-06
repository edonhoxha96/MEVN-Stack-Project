<template>
  <div class="container">
    <h1>Add Product</h1>
    <hr />
    <form @submit="onSubmit">
      <div class="form-group">
        <input class="form-control" type="text" id="name" placeholder="Name" v-model="product.name"/>
      </div>
      <div>
        <p>Add product image: <file-select v-model="product.image" required></file-select></p>
      </div>
      <div class="form-group">
        <input type="number" placeholder="price" step="0.01" min="0" v-model="product.price">
      </div>
      <div class="form-group">
        <input type="number" placeholder="old price" step="0.01" min="0" v-model="product.oldPrice">
      </div>
      <div class="form-group">
        <input class="form-control" type="text" id="color" placeholder="color" v-model="product.color"/>
      </div>
      <div class="form-group">
        <input class="form-control" type="text" id="size" placeholder="size" v-model="product.size"/>
      </div>
      <div class="form-group">
        <input class="form-control" type="number" id="rating" placeholder="rating" min="0" max="10" v-model="product.rating"/>
      </div>
      <div class="form-group">
        <input class="form-control" type="text" id="description" placeholder="description" v-model="product.description"/>
      </div>
      <div class="form-group">
        <input class="form-control" type="number" id="stock" placeholder="stock" v-model="product.stock"/>
      </div>
      <div class="form-group">
        <input class="form-control" type="text" id="brand" placeholder="brand" v-model="product.brand"/>
      </div>
      <!-- <div class="form-group">
          <label for="store">Store</label>
          <select name="store" placeholder="store" v-model="product.StoreId" >
            <option v-for="store in stores" :key="store.id" :value = "store.id">{{store.name}}</option>
          </select>
      </div> -->
      <br/>
      <div class="form-group">
          <label for="category/subcategory">Category</label>
          <select name="category/subcategory" placeholder="category" v-model="product.CategoryId" >
            <option v-for="category in categories" :key="category.id" :value = "category.id">{{category.name}}</option>
          </select>
      </div>
      <br/>
      <div>
      <input type="submit" id="submit" class="btn btn-secondary btn-block" value="Create">
      </div>
    </form>
    <br/>  
  </div>
</template>

<script>
import axios from 'axios'
import FileSelect from './FileSelect'
import {mapState} from 'vuex'


export default {
  name: 'AddProduct',
  components:{
    FileSelect
  },
  data(){
    return {
      product:{},
      stores:[],
      categories:[]
    }
  },
  computed: {
    ...mapState(["user"])
  },
  mounted() {
    this.$store.dispatch("loadCurrentUser");
  },
  created(){
      axios.get(`http://localhost:3000/emall/api/stores`)
        .then(response => {
        this.stores = response.data;
          });

      axios.get(`http://localhost:3000/emall/api/categories`)
        .then(response => {
        this.categories = response.data;
          });    
  },
  methods:{
    onSubmit (evt) {
      evt.preventDefault()
      this.product.StoreId = this.user.StoreId
      axios.post(`http://localhost:3000/emall/api/products`, this.product)
      .then(function (response) {
        console.log(response);
        })
        this.$store.dispatch('loadProducts')
        location.reload()  
    }
  }
}

</script>

<style scoped>
    div {
    color: inherit;
    
    padding-right: 70px;

    }
    input {
    width: 400px;
    padding: 30px;
    margin: 20px;
    font-size: 21px;
    background-color: #dfdfdf;
    }
  
.form-group {
    margin-bottom: 1rem;
    margin-right: 70%;
}
    #submit {
    width: 400px;
    height: 75px;
    font-size: 100%;
    margin-left: 20px;
    color:white;
    background-color:#2EA169;
    font-weight: bold;
    }
 
    h1{
        margin-left:150px
    }
    
    select{
      margin-left: 5px;
      border: 1px solid gray;
    }
</style>
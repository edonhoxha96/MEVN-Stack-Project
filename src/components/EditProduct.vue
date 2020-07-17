<template>
  <div class="container">
    <h1>Edit Product</h1>
    <hr />
    <form @submit="onSubmit">
      <div class="form-group">
        <input class="form-control" type="text" id="name" :placeholder="product.name" v-model="product.name"/>
      </div>
      <div>
        <p>My File Selector: <file-select :placeholder="product.logo" v-model="product.image"></file-select></p>
      </div>
      <div class="form-group">
        <input type="number" :placeholder="product.price" step="0.01" min="0" v-model="product.price">
      </div>
      <div class="form-group">
        <input class="form-control" type="text" id="color" :placeholder="product.color" v-model="product.color"/>
      </div>
      <div class="form-group">
        <input class="form-control" type="text" id="size" :placeholder="product.size" v-model="product.size"/>
      </div>
      <div class="form-group">
        <input class="form-control" type="number" id="rating" :placeholder="product.rating" min="0" max="10" v-model="product.rating"/>
      </div>
      <div class="form-group">
        <input class="form-control" type="number" id="stock" :placeholder="product.stock" v-model="product.stock"/>
      </div>
      <div class="form-group">
        <input class="form-control" type="text" id="brand" :placeholder="product.brand" v-model="product.brand"/>
      </div>
      <div class="form-group">
          <label for="store">Store</label>
          <select name="store" :placeholder="product.StoreId" v-model="product.StoreId" >
            <option v-for="store in stores" :key="store.id" :value = "store.id">{{store.name}}</option>
          </select>
      </div>
      <br/>
      <div class="form-group">
          <label for="category/subcategory">Category</label>
          <select name="category/subcategory" :placeholder="product.CategoryId" v-model="product.CategoryId" >
            <option v-for="category in categories" :key="category.id" :value = "category.id">{{category.name}}</option>
          </select>
      </div>
      <br/>
      <div>
      <input type="submit" id="submit" class="btn btn-secondary btn-block" value="Update">
      </div>
    </form>
    <br/>  
  </div>
</template>

<script>
import axios from 'axios'
import FileSelect from './FileSelect'


export default {
  name: 'EditProduct',
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
  created(){
      axios.get(`http://localhost:3000/emall/api/products/${this.$route.params.id}`)
        .then(response => {
        this.product = response.data;
          });

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
      axios.put(`http://localhost:3000/emall/api/products/update/${this.$route.params.id}`, this.product)
      .then(function (response) {
        console.log(response);
      })
      this.$store.dispatch('loadProducts')  
      this.$router.push('storeKeeperPage')  
    }
  }
}

</script>

<style scoped>
    div {
    color: inherit;
    }
    input {
    width: 400px;
    padding: 30px;
    margin: 20px;
    font-size: 21px;
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
    .container{
        align-self: center;
    }
    h1{
        margin-left:150px
    }
</style>
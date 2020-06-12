<template>
  <div class="container">
    <h1>Add Category</h1>
    <hr />
    <form @submit="onSubmit">
      <div class="form-group">
        <input class="form-control" type="text" id="title" placeholder="Name" v-model="category.name"/>
      </div>
      <!-- <div class="form-group">
        <input class="form-control" type="number" id="descrition" placeholder="Subcategory" v-model="category.parentId" />
      </div> -->
      <div class="form-group">
          <label for="">Parent Category</label>
          <select name="category/subcategory" v-model="category.parentId" >
            <option v-for="category in categories" :key="category.id" :value = "category.id">{{category.name}}</option>
          </select>
      </div>
      <!-- <div class="form-group">
        <label for="category">Category</label>
        <select class="form-control" id="category" v-model="movies.category">
          <option>Action</option>
          <option>Thriller</option>
          <option>Comedy</option>
          <option>Drama</option>
        </select>
      </div>
      <div class="form-group">
        <input
          style="width: 50%; margin-right: 10px"
          class="custom-range"
          type="range"
          name="rating"
          id="ratingId"
          value="1"
          min="1"
          max="10"
          step="1"
          oninput="ratingOutputId.value = ratingId.value"
          v-model="movies.rating"
        />
        <output name="ratingOutput" id="ratingOutputId"></output>
      </div>
      <div class="form-group">
        <label for="date">Release date</label>
        <input class="form-control" type="date" id="date"  v-model="movies.released" />
      </div>
      <div>
        <p>My File Selector: <file-select v-model="movies.picturepath"></file-select></p>
      </div> -->
      <br/>
      <input type="submit" id="submit" class="btn btn-secondary btn-block" value="Create">
    </form>
    <br/>  
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'AddCategory',
  components:{
  },
  data(){
    return {
      category:{},
      categories:[]
    }
  },
  created(){
      axios.get(`http://localhost:3000/emall/api/categories`)
        .then(response => {
        this.categories = response.data;
          });
  },
  methods:{
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:3000/emall/api/categories/post`, this.category)
      .then(function (response) {
        console.log(response);
        })
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
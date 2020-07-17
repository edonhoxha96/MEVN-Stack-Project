<template>
  <div class="container">
    <h1>Add Category</h1>
    <hr />
    <form @submit="onSubmit">
      <div class="form-group">
        <input class="form-control" type="text" id="title" placeholder="Name" v-model="category.name"/>
      </div>
      <div class="form-group">
          <label for="parent-category">Parent Category</label>
          <select name="category/subcategory" v-model="category.parentId" >
            <option v-for="category in categories" :key="category.id" :value = "category.id">{{category.name}}</option>
          </select>
      </div>
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
        location.reload()
        })
    }
  }
}

</script>

<style scoped>
    div {
    color: inherit;
    }

    select{
          background-color: #d1caca;
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
    background-color:#009AD5;
    font-weight: bold;
    }
    #submit:hover{
  background-color:#55BCE3;
}
.form-group:nth-child(1)  {
  margin: 1px 1px 1px 1px;
}
.form-group:nth-child(2)  {
  margin: 1px 1px 1px 20px;
  float: left;


}

    .container{
        align-self: center;
        /* padding-bottom: -50px; */
    }
    h1{
        margin-left:150px
    }
</style>
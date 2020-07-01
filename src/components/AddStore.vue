<template>
  <div class="container">
    <h1>Add Category</h1>
    <hr />
    <form @submit="onSubmit">
      <div class="form-group">
        <input class="form-control" type="text" id="title" placeholder="Name" v-model="store.name"/>
      </div>
      <div>
        <p>My File Selector: <file-select v-model="store.logo"></file-select></p>
      </div>
      <br/>
      <input type="submit" id="submit" class="btn btn-secondary btn-block" value="Create">
    </form>
    <br/>  
  </div>
</template>

<script>
import axios from 'axios'
import FileSelect from './FileSelect'


export default {
  name: 'AddStore',
  components:{
      FileSelect
  },
  data(){
    return {
      store:{}
    }
  },
  methods:{
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:3000/emall/api/stores`, this.store)
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
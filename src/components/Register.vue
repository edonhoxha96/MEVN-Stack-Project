<template>
    <div class="container">
     
    <h1 class="mb-5">Register</h1>
    <form @submit="onSubmit">
        <div class="form-group">
            <label>Emri</label>
            <input class="form-control" type="text" v-model="costumer.firstName" required/>
        </div>
        <div class="form-group">
            <label>Mbiemri</label>
            <input class="form-control" type="text" v-model="costumer.lastName" required/>
        </div>
        <div class="form-group">
            <label>Email</label>
            <input class="form-control" type="text" v-model="costumer.email" required/>
        </div>
        <div class="form-group">
            <label>Password</label>
            <input class="form-control" type="password" v-model="costumer.password" required/>
        </div>
        <div class="form-group">
            <label>Adresa</label>
            <input class="form-control" type="text" v-model="costumer.address" required/>
        </div>
        <div class="form-group">
            <label>Telefoni</label>
            <input class="form-control" type="text" v-model="costumer.phone" />
        </div>
        <div class="form-group">
            <label>Bank Nr:</label>
            <input class="form-control" type="text" v-model="costumer.bank" required/>
        </div>
        <div>
            <input type="submit" id="submit" class="btn btn-secondary btn-block" value="Create">
        </div>
    </form>
  </div>
</template>
<script>
import axios from 'axios'


export default {
  name: 'Register',
  components:{
  },
  data(){
    return {
      costumer:{}
    }
  },
  methods:{
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:3000/emall/api/costumers`, this.costumer)
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
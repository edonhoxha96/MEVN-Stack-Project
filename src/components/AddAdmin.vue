<template>
    <div class="container">
     
    <h1 class="mb-5">Register Admin</h1>
    <form @submit="onSubmit">
        <div class="form-group">
            <label>Emri</label>
            <input class="form-control" type="text" v-model="admin.firstName" />
        </div>
        <div class="form-group">
            <label>Mbiemri</label>
            <input class="form-control" type="text" v-model="admin.lastName"/>
        </div>
        <div class="form-group">
            <label>Email</label>
            <input class="form-control" type="text" v-model="admin.email" />
        </div>
        <div class="form-group">
            <label>password</label>
            <input class="form-control" type="password" v-model="admin.password" />
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
  name: 'AddAdmin',
  components:{
  },
  data(){
    return {
      admin:{}
    }
  },
  methods:{
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:3000/emall/api/admins`, this.admin)
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
<template>
    <div class="container">
      <img src="../assets/avatar2.png" class="avatar2" />
    <h1 class="mb-5">Register User</h1>
    <form @submit="onSubmit" class="onsubmit">
        <div class="form-group">
            <label></label>
            <input class="form-control" placeholer="test" type="text" v-model="user.firstName" placeholder="Emri"/>
        </div>
        <div class="form-group">
            <label></label>
            <input class="form-control" type="text" v-model="user.lastName" placeholder="Mbiemri"/>
        </div>
        <div class="form-group">
            <label></label>
            <input class="form-control" type="text" v-model="user.email" placeholder="Email"/>
        </div>
        <div class="form-group">
            <label></label>
            <input class="form-control" type="password" v-model="user.password" placeholder="Password"/>
        </div>
        <div class="form-group">
          <label for="category/subcategory">Role</label>
          <select name="category/subcategory" placeholder="category" v-model="user.RoleId" >
            <option v-for="role in roles" :key="role.id" :value = "role.id">{{role.name}}</option>
          </select>
      </div>
      <div class="form-group" v-if="user.RoleId == 2">
          <label for="store">Store</label>
          <select name="store" placeholder="store" v-model="user.StoreId" >
            <option v-for="store in stores" :key="store.id" :value = "store.id">{{store.name}}</option>
          </select>
      </div>
           <div class="button">
            <input type="submit" id="submit" class="btn btn-secondary btn-block" value="Create">
        </div>
        <div class="register">
        <h4>Do you have an account?</h4>
            <h4>Login here:
                <router-link class="nav-link" to="/Userlogin">
                  <a>Click</a>
                </router-link>
        </h4>
        </div>

    </form>
  </div>
</template>
<script>
import axios from 'axios'


export default {
  name: 'AddUser',
  components:{
  },
  data(){
    return {
      user:{},
      roles:[],
      stores:[]
    }
  },
  created(){
    axios.get(`http://localhost:3000/emall/api/roles`)
    .then(response => {
      this.roles = response.data
    })

    axios.get(`http://localhost:3000/emall/api/stores`)
        .then(response => {
        this.stores = response.data;
          });
  },
  methods:{
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:3000/emall/api/users`, this.user)
      .then(function (response) {
        console.log(response);
        location.reload()
        })
    }
  }
}

</script>

<style scoped>
    /* div {
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
    } */
    .container {
  align-self: center;
  margin: 50px 100px 10px 50px;
  align-content: center;
  margin-top: 550px;
  max-width: fit-content;
  min-width: 650px;
  margin-bottom: -400px;
  background: #343a40;
  color: #fff;
  top: 50%;
  left: 50%;
  position: relative;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  align-content: center;
  border-radius: 4%;
  padding: 70px;
}

.container p {
  margin: 0;
  padding: 0;
  font-weight: bold;
}
.container input {
  width: 70%;
  margin-bottom: 20px;
}
input {
  width: 100px;
  padding: 20px;
  margin: 10px;
  font-size: 21px;
  background-color: #343a40;
}
.onsubmit {
    padding-left: 18%;
}
#submit {
  width: 200px;
  height: 75px;
  font-size: 100%;
  margin-left: -44%;
  color: white;
  background-color: #009ad5;
  font-weight: bold;
  margin-top: 68px;
  margin-bottom: 25px;
}

.button {
    padding-left: 170px;
}
.loginbutton h4 {
    padding-right: 85px;
    margin: 1px -5px 0px 0px;
}
#submit:hover {
  background-color: #55bce3;
}
.avatar2 {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: -50px;
  background-size: 150px 150px;
  background: #009ad5;
  left: calc(50% - 50px);
}
.register {
  padding: 0px 100px 0px 10px;
}

</style>
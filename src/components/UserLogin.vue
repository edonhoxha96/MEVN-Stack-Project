<template>
    <div class="login"><h3>Login</h3>
            <img src="../assets/avatar.png" class="avatar" />
    
    <div v-if="errorMessage" class= "alert alert-danger" role="alert">
        {{errorMessage}}
    </div>
    
    <form @submit.prevent="loginAdmin()">
            <div><input type="text" placeholder="email" v-model="currentUser.email" required></div>
            <div><input type="password" placeholder="password" v-model="currentUser.password" required></div>
            <button type="submit">Login</button>
             <h4>Don't have an account?</h4>
            <h4>Register here:
                <router-link class="nav-link" to="/addUser">
                  <a>Click</a>
                </router-link>
            </h4>
    </form>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name:'LoginUser',
    data(){
        return{
            currentUser:{
                email:'',
                password:''
                },
            user:{},
            errorMessage: null
        }
    },
    methods:{
       async loginAdmin(){
            
                // console.log(this.currentUser)
                await axios.post(`http://localhost:3000/emall/api/loginUser`, this.currentUser
                ).then(response => {
                    this.user = response.data                     
                })
                .catch(err => {
                    this.errorMessage = err.response.data.message
                })
            
            if(!(this.user.firstName == undefined)){
                this.$store.dispatch('loginUser', this.user)
                if(this.$route.params.nextUrl != undefined){
                    this.$router.push(this.$route.params.nextUrl)
                }else{
                    if(this.user.RoleId == 1){
                            this.$router.push('adminPage')
                    }
                    if(this.user.RoleId == 2){
                    // this.$router.push({name:'skPage', params: { id: this.user.StoreId }})
                    this.$router.push('storeKeeperPage')
                    }
                }
            }
        }
    }
}
</script>
<style scoped>
    input {
    width: 100px;
    padding: 20px;
    margin: 10px;
    font-size: 21px;
    }
    button {
    width: 200px;
    height: 75px;
    font-size: 100%;
    margin-left: 20px;
    color:white;
    background-color:#009AD5;
    font-weight: bold; 
    margin-top: 68px;
    margin-bottom: 25px;
    } 
    button:hover{
    background-color:#55BCE3;
    }
    .login{
        width: 520px;
        height: 620px;
        margin-top: 400px;
        margin-bottom: -200px;
        background: #343a40;
        color: #fff;
        top: 50%;
        left: 50%;
        position: relative;
        transform: translate(-50%,-50%);
        box-sizing: border-box;
        align-content: center;
        border-radius: 4%;
        padding: 70px;
    }
    .login p{
        margin: 0;
        padding: 0;
        font-weight: bold;
    }
    .login input{
        width: 100%;
        margin-bottom: 20px;
    }
    .avatar{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        position: absolute;
        top: -50px;
        background:#009AD5;
        left: calc(50% - 50px);
    }
    h3{
        margin: 0;
        padding: 0 0 20px;
        text-align: center;
        font-size: 22px;
    }
</style>
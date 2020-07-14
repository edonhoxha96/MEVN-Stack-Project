<template>
    <div class="login"><h3>Login</h3>
    
    <div v-if="errorMessage" class= "alert alert-danger" role="alert">
        {{errorMessage}}
    </div>
    
    <form @submit.prevent="loginAdmin()">
            <div><input type="text" placeholder="email" v-model="currentUser.email" required></div>
            <div><input type="password" placeholder="password" v-model="currentUser.password" required></div>
            <button type="submit">Login</button>
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
    button {
    width: 400px;
    height: 75px;
    font-size: 100%;
    margin-left: 20px;
    color:white;
    background-color:#2EA169;
    font-weight: bold;
    }
    .login{
        align-content: center;
    }
    h3{
        margin-left:150px
    }
</style>
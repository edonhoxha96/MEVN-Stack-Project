<template>
    <div class="login"><h3>Login</h3>
    <form @submit.prevent="loginAdmin()">
            <div><input type="text" placeholder="email" v-model="currentAdmin.email" required></div>
            <div><input type="password" placeholder="password" v-model="currentAdmin.password" required></div>
            <button type="submit">Login</button>
    </form>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name:'LoginAdmin',
    data(){
        return{
            currentAdmin:{
                email:'',
                password:''
                },
            admin:{}
        }
    },
    methods:{
       async loginAdmin(){
            
                // console.log(this.currentAdmin)
                await axios.get(`http://localhost:3000/emall/api/currentAdmin`,
                {
                    params: {
                        email: `${this.currentAdmin.email}`,
                        password: `${this.currentAdmin.password}`
                }
                }).then(response => {
                this.admin = response.data
                console.log('Response: ' + response.message)
                }).catch(err => {
                    console.log('Error' + err.message)
                })

            console.log('This admin is logging in: ' + this.admin.firstName)
            this.$store.dispatch('loginAdmin', this.admin)
            if(this.admin != null){
            this.$router.push('adminPage')
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
        margin-left:500px;
    }
    h3{
        margin-left:150px
    }
</style>
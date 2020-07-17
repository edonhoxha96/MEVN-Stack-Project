<template>
    <div class="container">
        <div class="buton1">
         
                <router-link class="nav-link" to="/AddUser">
                  <button class="button1">Register here</button>
                </router-link>
    </div>
    <div class="buton2">
                <router-link class="nav-link" to="/Userlogin">
                  <button class="button2">Login here</button>
                </router-link>
        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
body{
display: flex;
justify-content: center;
align-self: center;
min-height: 100vh;
background: #222;
}
.buton1 {
background: #333;
display: grid;
font-size: 50px;
place-items: center;
margin-right: -5px;
height: 300px;


}
.buton1 a {
    background-color: rgb(38, 48, 38);
    width: 100%;
    height: 100%;
    color: rgb(145, 143, 143);
    transition: 1s ease;
    padding-top: 100px;
    
}
.buton1 a:hover {
    background-color: rgb(127, 133, 119);
    width: 100%;
    height: 100%;
    color: white;
   -webkit-transform: scale(1.2);
-ms-transform: scale(1.2);
transform: scale(1.2);
transition: 1s ease;
}
.buton2 {
background: #009ad5;
display: grid;
font-size: 50px;
place-items: center;
margin-left: -5px;


}
.buton2 a {
    background-color: #009ad5;
    width: 100%;
    height: 100%;
    transition: 1s ease;
    padding-top: 100px;

}
.buton2 a:hover {
    background-color: #55bce3;
    width: 100%;
    height: 100%;
    color: white;
       -webkit-transform: scale(1.2);
-ms-transform: scale(1.2);
transform: scale(1.2);
transition: 1s ease;
    
    
}
.container{
	position: relative;
	max-width: 100%;
	display: grid;
	grid-template-columns: repeat(2, minmax(300px, 1fr));
	grid-template-rows: minmax(100px, auto);
	margin: 40px 50px 150px 10px;
	grid-auto-flow: dense;
	grid-gap: 10px;
}

</style>
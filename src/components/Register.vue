<template>
  <div class="container">
    <img src="../assets/avatar2.png" class="avatar2" />
    <h1 class="mb-5">Register</h1>
    <form @submit="onSubmit" class="onsubmit">
      <div class="form-group">
        <!-- <label>Emri</label> -->
        <input
          class="form-control"
          type="text"
          placeholder="Emri"
          v-model="costumer.firstName"
          required
        />
      </div>
      <div class="form-group">
        <!-- <label>Mbiemri</label> -->
        <input
          class="form-control"
          type="text"
          placeholder="Mbiemri"
          v-model="costumer.lastName"
          required
        />
      </div>
      <div class="form-group">
        <!-- <label>Email</label> -->
        <input
          class="form-control"
          type="text"
          placeholder="Email"
          v-model="costumer.email"
          required
        />
      </div>
      <div class="form-group">
        <!-- <label>Password</label> -->
        <input
          class="form-control"
          type="password"
          placeholder="Password"
          v-model="costumer.password"
          required
        />
      </div>
      <div class="form-group">
        <!-- <label>Adresa</label> -->
        <input
          class="form-control"
          type="text"
          placeholder="Adresa"
          v-model="costumer.address"
          required
        />
      </div>
      <div class="form-group">
        <!-- <label>Telefoni</label> -->
        
        <input 
        class="form-control"
        type="text" 
        placeholder="Telefoni"
        v-model="costumer.phone" />
      </div>
      <div class="form-group">
        <!-- <label>Bank Nr:</label> -->
        <input
          class="form-control"
          type="text"
          placeholder="Bank Nr:"
          v-model="costumer.bank"
          required
        />
      </div>
      <div class="button">
        <input
          type="submit"
          id="submit"
          class="btn btn-secondary btn-block"
          value="Create"
        />
      </div>
      <div class="loginbutton">

        <h4>Do you have an account?</h4>
            <h4>Login here:
                <router-link class="nav-link" to="/login">
                  <a>Click</a>
                </router-link>
        </h4>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Register",
  components: {},
  data() {
    return {
      costumer: {},
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      axios
        .post(`http://localhost:3000/emall/api/costumers`, this.costumer)
        .then(function(response) {
          console.log(response);
        });
    },
  },
};
</script>

<style scoped>
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

</style>

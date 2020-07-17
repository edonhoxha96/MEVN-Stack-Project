<template>
  <div>
    <div class="container">
      <h1>Add Store</h1>
      <hr />
      <form @submit="onSubmit" class="addstore">
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            id="title"
            placeholder="Name"
            v-model="store.name"
          />
        </div>
        <div class="fotobutton">
          <span>
            Select photo form your device:
            <file-select v-model="store.logo"></file-select>
            <img v-bind:src="(file-select)" alt="logo" width="500px" height="400px" />
          </span>
        </div>
        <br />

        <input
          type="submit"
          id="submit"
          class="btn btn-secondary btn-block"
          value="Create"
        />
      </form>
      <br />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FileSelect from "./FileSelect";

export default {
  name: "AddStore",
  components: {
    FileSelect,
  },
  data() {
    return {
      store: {},
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      axios
        .post(`http://localhost:3000/emall/api/stores`, this.store)
        .then(function(response) {
          console.log(response);
          location.reload();
        });
    },
  },

};
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
  color: white;
  background-color: #2ea169;
  font-weight: bold;
}
.fotobutton {
  /* float:left; */
  /* margin: 20px 0px 5px -600px; */
  max-width: fit-content;
}
.container {
  align-self: center;
  margin: 50px 100px 10px 50px;
  align-content: center;
  margin-top: 350px;
  margin-bottom: -200px;
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
.addstore {
  max-width: fit-content;
}
h1 {
  margin-left: 150px;
}
</style>

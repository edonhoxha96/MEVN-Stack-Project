<template>
  <div class="container">
    <h1>Add Store</h1>
    <hr />
    <form @submit="onSubmit">
      <div class="form-group">
        <input class="form-control" type="text" id="title" placeholder="Name" v-model="store.name"/>
      </div>
      <div class="selectB">
        <p>My File Selector: <file-select v-model="store.logo" class="select-button"></file-select></p>
      </div>
      <br/>
      <input type="submit" id="submit" class="btn btn-secondary btn-block" value="Create">
    </form>
    <br/>  
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
  background-color: #009ad5;
  font-weight: bold;
}
#submit:hover {
  background-color: #55bce3;
}
.fotobutton {
  max-width: fit-content;
}
.backbutton {
  float: left;
  margin: 0px 10px 0px 0px; 
}
.selectB {
  margin: 0px 1500px 10px 0px;
}
.container {
  align-self: center;

  padding: 70px;
}
.addstore {
  max-width: fit-content;
}
h1 {
  margin-left: 150px;
}
</style>

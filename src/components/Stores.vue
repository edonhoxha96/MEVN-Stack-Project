<template>
  <div class="container">
    <h1>List of stores</h1>
    <div class="storesList">
      <div class="loop" v-for="store in stores" :key="store.StoreId">
        <div class="store">
          <button class="btn btn-secondary storeName">{{store.name}}</button>
          <!-- **************************USE GRID for buttons************************** -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import FileSelect from "./FileSelect";

export default {
  name: "Store",
  data() {
    return {
      stores: []
    };
  },
  created() {
    axios.get(`http://localhost:3000/emall/api/stores`).then(response => {
      this.stores = response.data;
    });
  }
};
</script>

<style scoped>
.storesList {
  /* display: flex; */
  width: 700px;
}
/* .store {
  height: 35px;
  width: 150px;
  margin: 0 15px;
  border-radius: 3px;
  color: white;
  background-color: #544f4f;
  align-content: flex-start;
} */
.storeName {
  padding-top: 5px;
}
</style>
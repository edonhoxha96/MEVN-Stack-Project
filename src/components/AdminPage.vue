      <!-- <div>
        <div>
          <ul>
            <li>
              <button @click="logout">LogOut</button>
            </li>
            <li>
              <router-link :to="{path: '/addStore'}">Add a Store</router-link>
            </li>
            <li>
              <router-link :to="{path: '/addUser'}">Add a StoreKeeper</router-link>
            </li>
          </ul>
        </div>

        <div v-for="store in stores" :key="store.id">
          <h3>{{store.name}}</h3>
          <div v-if="store.logo != null">
            <img :src="getPath(store.logo)" alt="logo" width="500px" height="400px" />
          </div>
        </div>
      </div> -->
<template>
  <v-container class="main">
    <div class="sidepanel">
      <v-card height="400" class="overflow-hidden">
        <v-navigation-drawer
          v-model="drawer"
          :color="color"
          :expand-on-hover="expandOnHover"
          :mini-variant="miniVariant"
          :right="right"
          :permanent="permanent"
          absolute
          dark
        >
          <v-list dense nav class="py-0">
            <v-list-item two-line :class="miniVariant && 'px-0'">
              <v-list-item-avatar>
                <img src="https://randomuser.me/api/portraits/men/81.jpg" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{user.firstName}}</v-list-item-title>
                <v-list-item-subtitle>Admin</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item v-for="item in items" :key="item.title" router :to="item.route">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <template v-slot:append>
            <div class="pa-2">
              <v-btn block @click="logout">Logout</v-btn>
            </div>
          </template>
        </v-navigation-drawer>
        <!-- <div>Here go all stores, admin can view stores and storekeeper</div> -->
        <div class="storesList">
          <div class="loop" v-for="store in stores" :key="store.StoreId">
            <div class="store">
              <div class="storeName">{{store.name}}</div>
            </div>
          </div>
        </div>
      </v-card>
    </div>
    <div class="store1">
      <div class="wrapper">
        <nav class="main-nav">
          <ul>
            <li v-for="store in stores" :key="store.StoreId"><a href="#">{{store.name}}</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </v-container>
</template>
<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "AdminPage",
  data() {
    return {
      stores: [],
      // From vuetify admin page
      drawer: true,
      items: [{title: "View Stores", icon: "mdi-storefront-outline",route: "/stores"},
              {title: "Add new store", icon: "mdi-folder-plus-outline",route: "/addStore"},
              {title: "Add store keeper", icon: "mdi-account-plus-outline", route: "/addUser"}
            ],
      color: "primary",
      colors: ["primary", "blue", "success", "red", "teal"],
      right: false,
      permanent: true,
      miniVariant: false,
      expandOnHover: false,
      background: false
    };
  },
  computed: {
    ...mapState(["user"])
  },
  mounted() {
    this.$store.dispatch("loadCurrentUser");
  },
  created() {
    axios.get(`http://localhost:3000/emall/api/stores`).then(response => {
      this.stores = response.data;
    });
  },

  methods: {
    getPath(picturepath) {
      if (picturepath == null) {
        return;
      }
      return require(`../assets/${picturepath}`);
    },
    logout() {
      this.$store.dispatch("logoutUser");
      this.$router.push("userLogin");
    }
  }
};
</script>

<style scoped>
.main{
  display: flex;
}
.sidepanel{
  width: 329px;
}
.store1{
  width: 100%;
  margin-left: 20px;
}
.wrapper{
  display: grid;
  grid-gap: 20px;
}

/* Navigation  */
.main-nav ul {
  display: grid;
  grid-gap: 20px;
  padding: 0;
  list-style: none;
  grid-template-columns: repeat(4, 1fr);
}

.main-nav a {
  background: #ddd;
  display: block;
  text-decoration: none;
  padding: 0.8rem;
  text-align: center;
  color: #333;
  text-transform: uppercase;
  font-size: 1.1rem;
  box-shadow: 0 1px 5px rgba(104, 104, 104, 0.8);
}

.main-nav a:hover {
  background: #333;
  color: #fff;
}
</style>

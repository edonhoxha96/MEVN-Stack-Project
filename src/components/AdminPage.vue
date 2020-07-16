<!-- <template> 
  <div>
    <h1>Hello {{user.firstName}}</h1>
    <div><ul>
      <li><button @click="logout">LogOut</button></li>
      <li><router-link :to="{path: '/addStore'}">Add a Store</router-link></li>
      <li><router-link :to="{path: '/addUser'}">Add a StoreKeeper</router-link></li>
    </ul></div>
    
    <div v-for="store in stores" :key= "store.id">
      <h3>{{store.name}}</h3>
      <div v-if="store.logo != null">
      <img :src="getPath(store.logo)" alt="logo" width="500px" height="400px">
      </div>
    </div>
  </div>
</template> -->
<template>
  <v-container>
    <v-row justify="space-around">
      <v-col cols="12">
        <v-select v-model="color" :items="colors" label="Color"></v-select>
      </v-col>

      <v-switch v-model="drawer" class="ma-2" label="v-model"></v-switch>

      <v-switch v-model="permanent" class="ma-2" label="Permanent"></v-switch>

      <v-switch v-model="miniVariant" class="ma-2" label="Mini variant"></v-switch>

      <v-switch v-model="expandOnHover" class="ma-2" label="Expand on hover"></v-switch>

      <v-switch v-model="background" class="ma-2" label="Background"></v-switch>

      <v-switch v-model="right" class="ma-2" label="Right"></v-switch>
    </v-row>

    <v-card height="400" class="overflow-hidden">
      <v-navigation-drawer
        v-model="drawer"
        :color="color"
        :expand-on-hover="expandOnHover"
        :mini-variant="miniVariant"
        :right="right"
        :permanent="permanent"
        :src="bg"
        absolute
        dark
      >
        <v-list dense nav class="py-0">
          <v-list-item two-line :class="miniVariant && 'px-0'">
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/men/81.jpg" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Application</v-list-item-title>
              <v-list-item-subtitle>Subtext</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
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
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" }
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
    ...mapState(["user"]),
    bg() {
      return this.background
        ? "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        : undefined;
    }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  background-color: grey;
}
</style>

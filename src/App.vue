<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer absolute v-model="drawer" temporary>
        <!-- -->
        <span>drawer</span>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
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

      <v-app-bar app>
        <h1>app bar</h1>
      </v-app-bar>

      <!-- Sizes your content based upon application components -->
      <v-main>
        <!-- Provides the application the proper gutter -->
        <v-container fluid class="fill-height">
          <span>Container</span>
          <v-row align="center" justify="center">
            <v-btn color="pink" dark @click.stop="drawer = !drawer">
              Toggle
            </v-btn>
          </v-row>
          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-main>

      <v-footer app>
        <!-- -->
        <span>footer</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Vuetify from "vuetify/lib";
export default {
  name: "App",
  vuetify: new Vuetify(),
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" }
      ]
    };
  }
  // components: {
  //   HelloWorld
  // }
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

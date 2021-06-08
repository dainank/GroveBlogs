<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation';
export default {
  name: "app",
  components: {Navigation},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");  // font

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; // reset on app
  font-family: "Quicksand", sans-serif;
}

.app {  // flex styling setup
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {  // resolution container
  max-width: 1440px;
  margin: 0 auto;
}

.link { // helper link styling
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}
</style>

<template>
  <div id="app">
    <video src="./assets/bg-video.mp4" autoplay loop playsinline muted></video>
    <Navbar></Navbar>
    <Home></Home>
    <!-- <router-view></router-view> -->
    <!-- <select
      name="Countries"
      aria-label="Default select example"
      id=""
      v-model="selectedCountry"
    >
      <option value="empty" disabled selected>Choose a country</option>
      <option
        :value="country.id"
        v-for="country in getCountryNames"
        :key="country.id"
      >
        {{ country.name }}
      </option>
    </select>
    {{ getCapitalCity }}
    {{ getRegion }} -->
  </div>
</template>

<script>
import { getData } from "./API.js";
import Navbar from "./components/Navbar";
import Home from "./views/Home";

export default {
  components: {
    Navbar,
    Home,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap");
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: "Balsamiq Sans", cursive;
  background-color: black;
}
video{
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>

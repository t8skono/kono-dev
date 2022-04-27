<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import { StarportCarrier } from "vue-starport";
</script>

<template>
  <RouterView />
  <StarportCarrier />
  <!-- <StarportCarrier />
  <p @click="clickButton">Page1へ遷移</p> -->
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
</template>

<style lang="scss">
@import "./assets/main.scss";
</style>

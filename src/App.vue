<template>
  <main>
    <img :src="AppBarImg" alt="app-bar" class="phone-header" />
    <ArrowsHeader />
    <NavigationHeader />
    <div class="router-wrapper">
      <router-view></router-view>
    </div>
  </main>
</template>

<script setup>
import AppBarImg from "./assets/images/app-bar.png";
import ArrowsHeader from "./components/ArrowsHeader.vue";
import NavigationHeader from "./components/NavigationHeader.vue";
</script>

<style scoped>
main {
  background: rgba(19, 19, 19, 1);
  max-height: 1280px;
  max-width: 720px;
  height: 80vh;
  width: 45vh;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  direction: rtl;
}

.router-wrapper {
  height: 94%;
  width: 100%;
  overflow: hidden;
  border-radius: 0 0 10px 10px;
}

.phone-header {
  width: 100%;
  border-radius: 10px 10px 0 0;
  height: 2.4%;
  padding-top: 1.6%;
}
</style>

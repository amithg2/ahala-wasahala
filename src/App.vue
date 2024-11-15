<template>
  <main>
    <Loading v-if="isLoading" />
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
import Loading from "./components/baseComponents/Loading.vue";
import { computed } from "vue";

import { useAppStore } from "./store/appStore";
const appStore = useAppStore();

const isLoading = computed(() => appStore.getIsLoading);
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
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;
}

.router-wrapper {
  height: 75%;
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

<template>
  <div class="fill-page">
    <h1>Video</h1>
    <div class="center-element">
      <Button class="start-button" :onClick="buttonClicked" text="התחל >>" />
    </div>
  </div>
</template>

<script setup>
import Button from "../components/baseComponents/Button.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const buttonClicked = () => {
  router.push("/questions");
};
</script>

<style scoped>
.start-button {
  width: 80%;
}
</style>

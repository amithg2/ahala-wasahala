<template>
  <div class="fill-page center-element">
    <Button class="start-button" :onClick="buttonClicked" text="התחל >>" />
  </div>
</template>

<script setup>
import Button from "../components/baseComponents/Button.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const buttonClicked = () => {
  router.push("/video");
};
</script>

<style scoped>
.start-button {
  width: 80%;
}
</style>

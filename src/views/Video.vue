<template>
  <div class="fill-page">
    <div class="iframe-wrapper center-element">
      <iframe
      width="90%"
      height="80%"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=WgiGJhj1ewtB6tMI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
    
    <div class="start-button-wrapper">
      <Button :onClick="buttonClicked" text="התחל >>" />
    </div>
  </div>
</template>

<script setup>
import Button from "../components/baseComponents/Button.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const buttonClicked = () => {
  router.push("/questions/1");
};
</script>

<style scoped>
.iframe-wrapper {
  width: 100%;
  height: 60%;
}
.start-button-wrapper {
  width: 80%;
  margin: 0 auto;
}
</style>

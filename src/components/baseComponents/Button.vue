<template>
  <button @click="props.onClick">
    {{ props.text }}
  </button>
</template>

<script setup>
const props = defineProps(["text", "onClick"]);
</script>

<style scoped>
button {
  width: 100%;
  height: 50px;
  background: linear-gradient(206.69deg, #a6fff7 -61.23%, #008a7f 88.25%);
  text-align: center;
  border-radius: 60px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover,
button:active {
  background: linear-gradient(206.69deg, #008a7f -61.23%, #a6fff7 88.25%);
}
</style>

<template>
  <div class="loading wrapper">
    <div class="loading-content">
      <img src="../../assets/images/loading.gif" alt="loading" />
      <p>טוען...</p>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  opacity: 0.9;
  color: #000;
  font-size: 20px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s;
  overflow: hidden;
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.loading-content img {
  width: 100px;
  height: 100px;
}
</style>

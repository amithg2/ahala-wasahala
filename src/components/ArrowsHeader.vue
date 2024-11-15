<template>
  <div class="arrows-header-wrapper">
    <div v-if="isShowButtons" class="arrows-wrapper">
      <img
        @click="backClicked"
        src="../assets/icons/chevron-right.svg"
        alt="arrow right"
      />
      <img
        @click="continueClicked"
        :class="['continue', appStore.selectedCurAnswerId && 'continue-bg']"
        src="../assets/icons/chevrons-left.svg"
        alt="arrow left"
      />
    </div>

    <img v-else src="../assets/images/logo.png" alt="logo" class="logo" />
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";
import { useAppStore } from "../store/appStore";

const appStore = useAppStore();
const route = useRoute();
const router = useRouter();
const isShowButtons = computed(() => route.path.includes("/questions") && appStore.getCurQuestion?.id < 5);

const backClicked = () => {
  appStore.setSelectedCurAnswerId(null);
  appStore.setCurQuestion(null);

  router.back();
};

const continueClicked = () => {
  appStore.setSelectedCurAnswerId(null);
  router.push(`/questions/${appStore.curQuestion.id + 1}`);
};
</script>

<style scoped>
.arrows-header-wrapper {
  padding: 0 3%;
  height: 7%;
}
.logo {
  height: 100%;
}

.arrows-wrapper {
  display: flex;
  justify-content: space-between;
  width: 90%;
  align-items: center;
  margin: 0 auto;
  height: 100%;
}

.continue {
  padding: 10px;
  border-radius: 50%;
}

.continue-bg {
  background: linear-gradient(206.69deg, #a6fff7 -61.23%, #008a7f 88.25%);
  cursor: pointer;
}
</style>

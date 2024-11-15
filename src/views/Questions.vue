<template>
  <div v-if="question" class="question-wrapper">
    <div>
      <p class="question">{{ question.question }}</p>

      <ul>
        <li
          class="answer"
          v-for="(answer, num) in question.options"
          :key="answer.aId"
          @click="appStore.setSelectedCurAnswerId(answer.aId)"
          :class="[
            answer.aId === appStore.getselectedCurAnswerId && 'selected',
          ]"
        >
          <span>
            {{ num + 1 }}.
            {{ answer.ans }}
          </span>

          <div
            v-show="answer.aId !== appStore.getselectedCurAnswerId"
            class="radio"
          ></div>
          <img
            v-show="answer.aId === appStore.getselectedCurAnswerId"
            src="../assets/icons/v-icon.svg"
            alt="v-icon"
            class="v-icon"
          />
        </li>
      </ul>
    </div>
    <Button v-if="isShowNextButton" text="הבא >>" :onClick="continueClicked" />
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { useAppStore } from "../store/appStore";
import { computed, onBeforeMount, watch } from "vue";

import Button from "../components/baseComponents/Button.vue";

const route = useRoute();
const router = useRouter();
const appStore = useAppStore();

const question = computed(() => appStore.getCurQuestion);
const isShowNextButton = computed(() => appStore.getCurQuestion?.id === 5);

watch(
  () => route.params.id,
  async (newId) => {
    appStore.setCurQuestion(null);
    await appStore.getQuestionById(+newId);
  }
);

onBeforeMount(async () => {
  appStore.setCurQuestion(null);
  const questionId = +route.params.id;
  await appStore.getQuestionById(questionId);
});

const continueClicked = () => {
  router.push(`/puzzle`);
};
</script>

<style scoped>
.question-wrapper {
  padding: 3% 5%;
  height: 95%;

  display: flex;

  flex-direction: column;
  justify-content: space-between;
}

.question {
  font-family: Heebo;
  font-size: 22px;
  font-weight: 500;
  text-align: right;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  margin-bottom: 2%;
}

ul {
  padding: 0;
}

.answer {
  height: 40px;
  margin: 14px 0;
  padding: 10px;
  list-style: none;
  background: rgba(217, 217, 217, 0.1);
  border-radius: 6px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.radio {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #000;
  margin-left: 23px;
}

.selected {
  outline: 2px solid rgba(69, 170, 162, 1);
  color: rgba(69, 170, 162, 1);
}

.v-icon {
  width: 60px;
  height: 60px;
}
</style>

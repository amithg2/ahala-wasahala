<template>
  <div v-if="question" class="question-wrapper">
    <p class="question">{{ question.question }}</p>

    <ul>
      <li
        class="answer"
        v-for="(answer, num) in question.options"
        :key="answer.id"
        @click="appStore.setSelectedCurAnswerId(answer.aId)"
        :class="[answer.aId === appStore.getselectedCurAnswerId && 'selected']"
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
</template>

<script setup>
import { useRoute } from "vue-router";
import { useAppStore } from "../store/appStore";
import { computed, onBeforeMount, watch } from "vue";

const route = useRoute();
const question = computed(() => appStore.getCurQuestion);
const appStore = useAppStore();

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
</script>

<style scoped>
.question-wrapper {
  padding: 3% 5%;
  height: 60%;
}

.question {
  font-family: Heebo;
  font-size: 24px;
  font-weight: 500;
  text-align: right;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  margin-bottom: 32px;
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
  font-size: 20px;
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

<template>
  <div class="navigation-header-wrapper center-element">
    <div class="navigation-inner">
      <div class="circle-wrapper">
        <div
          class="circle center-element"
          :class="[step >= 1 && 'active-video']"
        >
          <img
            class="icon"
            src="../assets/images/navigation-header/finger-click.png"
            alt="video-icon"
          />
        </div>
        <span class="circle-text">סרטון יומי</span>
      </div>

      <div class="circle-wrapper">
        <div :class="[step >= 2 && 'active-question']">
          <div class="circle center-element">
            <img
              class="icon"
              src="../assets/images/navigation-header/pencil.png"
              alt="pencil-icon"
            />
          </div>
        </div>
        <span class="circle-text">תרגול</span>
      </div>

      <div class="circle-wrapper">
        <div :class="[step === 3 && 'active-puzzle']">
          <div class="circle center-element">
            <img
              class="icon"
              src="../assets/images/navigation-header/question-mark.png"
              alt="question-mark-icon"
            />
          </div>
        </div>
        <span class="circle-text">משחק זיכרון</span>
      </div>

      <div
        class="line-1"
        :class="[step >= 1 && 'line-1-step-1', step >= 2 && 'line-1-step-2']"
      ></div>
      <div
        class="line-2"
        :class="[step >= 2 && 'line-2-step-2', step >= 3 && 'line-2-step-3']"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const step = computed(() => {
  if (route.name === "Home") return 0;
  else if (route.name === "Video") return 1;
  else if (route.name === "Question") return 2;
  else if (route.name === "Puzzle") return 3;
  return 3;
});
</script>

<style scoped>
.navigation-header-wrapper {
  padding: 0 3%;
  height: 10%;
  margin-top: 4%;
}

.navigation-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  gap: 50px;
  z-index: 1;
  position: relative;
}

.circle-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgb(31, 31, 31);
}

.circle-text {
  font-family: Heebo;
  font-size: 16px;
  font-weight: 300;
  line-height: 23.5px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  margin-top: 8px;
}

.icon {
  width: 60%;
}

.active-video {
  border: 2px solid rgba(247, 31, 78, 1);
}

.active-question {
  border-radius: 50%;
  padding: 2px;
  position: relative;
  background: linear-gradient(206.69deg, #a6fff7 -61.23%, #008a7f 88.25%);
}

.active-puzzle {
  border-radius: 50%;
  padding: 2px;
  position: relative;
  background: linear-gradient(
    340.13deg,
    rgba(255, 92, 0, 0.4) -144.78%,
    rgba(251, 132, 0, 0.86) -19.3%,
    #fa9000 80.63%
  );
}

.line-1 {
  position: absolute;
  top: 31%;
  right: 18%;
  width: 25%;
  height: 4px;
  background: rgb(31, 31, 31);
  z-index: -1;
}

.line-1-step-1 {
  background: linear-gradient(132.95deg, #262626 39.61%, #f71f4e 87.09%);
}

.line-1-step-2 {
  background: linear-gradient(132.95deg, #45b0a6 39.61%, #f71f4e 87.09%);
}

.line-2 {
  position: absolute;
  top: 31%;
  left: 21%;
  width: 25%;
  height: 4px;
  background: rgb(31, 31, 31);
  z-index: -1;
}

.line-2-step-2 {
  background: linear-gradient(132.95deg, #262626 39.61%, #45b0a6 87.09%);
}

.line-2-step-3 {
  background: linear-gradient(132.95deg, #fa9000 39.61%, #45b0a6 87.09%);
}
</style>

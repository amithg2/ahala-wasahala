<template>
  <div class="navigation-header-wrapper center-element">
    <div class="navigation-inner">
      <div class="circle-wrapper">
        <div class="circle center-element">
          <img
            class="icon"
            src="../assets/images/navigation-header/finger-click.png"
            alt="video-icon"
          />
        </div>
        <span class="circle-text">סרטון יומי</span>
      </div>

      <div class="circle-wrapper">
        <div class="circle center-element">
          <img
            class="icon"
            src="../assets/images/navigation-header/pencil.png"
            alt="pencil-icon"
          />
        </div>
        <span class="circle-text">תרגול</span>
      </div>

      <div class="circle-wrapper">
        <div class="circle center-element">
          <img
            class="icon"
            src="../assets/images/navigation-header/question-mark.png"
            alt="question-mark-icon"
          />
        </div>
        <span class="circle-text">משחק זיכרון</span>
      </div>
    </div>
  </div>
</template>

<script scoped></script>

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
}

.icon {
  width: 60%;
}
</style>

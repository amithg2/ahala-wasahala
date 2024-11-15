import { defineStore } from "pinia";
import { isGoodAnswer } from "../questions";
import { getQuestionById } from "../questions";

export const useAppStore = defineStore("app", {
  state: () => ({
    curQuestion: null,
    selectedCurAnswerId: null,
    selectedAnswers: {},
  }),

  actions: {
    setCurQuestion(question) {
      this.curQuestion = question;
    },

    getQuestionById(id) {
      //Like api request
      const state = this;
      return new Promise((resolve) => {
        setTimeout(() => {
          const question = getQuestionById(id);
          state.setCurQuestion(question);
          if(state.selectedAnswers[question.id]) state.selectedCurAnswerId = state.selectedAnswers[question.id];
      
          resolve(question);
        }, 300);
      });
    },

    setSelectedCurAnswerId(answerId) {
      this.selectedCurAnswerId = answerId;
      const question = this.curQuestion;
      if (answerId) this.selectedAnswers[question.id] = answerId;
    },

    checkRightAnswer(qId, answer) {
      //Like api request
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(isGoodAnswer(qId, answer));
        }, 300);
      });
    },
  },

  getters: {
    getCurQuestion: (state) => state.curQuestion,
    getselectedCurAnswerId: (state) => state.selectedCurAnswerId,
  },
});

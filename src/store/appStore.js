import { defineStore } from "pinia";
import { isGoodAnswer } from "../questions";
import { getQuestionById } from "../questions";

export const useAppStore = defineStore("app", {
  state: () => ({
    curQuestion: null,
    selectedAnswerId: null,
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
          console.log(question);
          state.setCurQuestion(question);
          resolve(question);
        }, 1000);
      });
    },

    setSelectedAnswerId(answerId) {
      this.selectedAnswerId = answerId;
    },
    checkRightAnswer(qId, answer) {
      //Like api request
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(isGoodAnswer(qId, answer));
        }, 1000);
      });
    },
  },

  getters: {
    getCurQuestion: (state) => state.curQuestion,
    getSelectedAnswerId: (state) => state.selectedAnswerId, 
  },
});

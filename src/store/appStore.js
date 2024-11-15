import { defineStore } from "pinia";
import { getQuestionById } from "../questions";

export const useAppStore = defineStore("app", {
  state: () => ({
    isLoading: false,
    curQuestion: null,
    selectedCurAnswerId: null,
    selectedAnswers: {},
  }),

  actions: {
    setIsLoading(loading) {
      this.isLoading = loading;
    },
    setCurQuestion(question) {
      this.curQuestion = question;
    },

    getQuestionById(id) {
      //Like api request
      const state = this;
      this.isLoading = true;
      return new Promise((resolve) => {
        setTimeout(() => {
          const question = getQuestionById(id);
          state.setCurQuestion(question);
          if (state.selectedAnswers[question.id])
            state.selectedCurAnswerId = state.selectedAnswers[question.id];

          resolve(question);
          state.isLoading = false;
        }, 1000);
      });
    },

    setSelectedCurAnswerId(answerId) {
      this.selectedCurAnswerId = answerId;
      const question = this.curQuestion;
      if (answerId) this.selectedAnswers[question.id] = answerId;
    },
  },

  getters: {
    getCurQuestion: (state) => state.curQuestion,
    getselectedCurAnswerId: (state) => state.selectedCurAnswerId,
    getIsLoading: (state) => state.isLoading,
  },
});

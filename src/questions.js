const questions = [
  {
    id: 1,
    question: "עד כמה אתה אוהב ללמוד ערבית עם אַהְלַא וּסַהְלַא?",
    options: [
      {
        ans: "אני אוהב ללמוד ערבית",
        aId: "a1-1",
      },

      {
        ans: "לא אוהב ללמוד בכלל",
        aId: "a1-2",
      },

      {
        ans: "סבבה, דווקא זורם לי",
        aId: "a1-3",
      },

      {
        ans: "נהנה ממש משיעורי ערבית",
        aId: "a1-4",
      },
    ],
  },

  {
    id: 2,
    question: "מה היה מקצועו של יוחנן הסנדלר?",
    options: [
      {
        ans: "עזוב, דבר איתי משהו בספורט",
        aId: "a2-1",
      },

      {
        ans: "סנדלר",
        aId: "a2-2",
      },

      {
        ans: "חלוץ קדמי",
        aId: "a2-3",
      },

      {
        ans: "כל התשובות נכונות",
        aId: "a2-4",
      },
    ],
  },

  {
    id: 3,
    question: "באיזה שנה עברית התקיימו מאורעות תרפ״ט?",
    options: [
      {
        ans: "2012",
        aId: "a3-1",
      },

      {
        ans: "1948",
        aId: "a3-2",
      },

      {
        ans: "מה זה קודים כאילו?",
        aId: "a3-3",
      },

      {
        ans: "התקלת אותנו חזק",
        aId: "a3-4",
      },
    ],
  },

  {
    id: 4,
    question: "איך אומרים באנגלית צנון",
    options: [
      {
        ans: "כאבג׳ה",
        aId: "a3-1",
      },

      {
        ans: "ציינון",
        aId: "a3-2",
      },

      {
        ans: "ג׳אפרסק",
        aId: "a3-3",
      },

      {
        ans: "תפוחניישן",
        aId: "a3-4",
      },
    ],
  },

  {
    id: 5,
    question: "כאן תופיע שאלה אחרונה",
    options: [
      {
        ans: "אני אוהב ללמוד ערבית",
        aId: "a5-1",
      },

      {
        ans: "לא אוהב ללמוד בכלל",
        aId: "a5-2",
      },

      {
        ans: "סבבה, דווקא זורם לי",
        aId: "a5-3",
      },

      {
        ans: "נהנה ממש משיעורי ערבית",
        aId: "a5-4",
      },
    ],
  },
];

export const getQuestionById = (id) => {
  return questions.find((q) => q.id === id);
};

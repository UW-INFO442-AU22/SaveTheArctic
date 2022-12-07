import React, { createContext, useReducer } from "react";
import questions from "../data";
import { shuffleAnswers } from "../helpers";

let today = new Date();
let day = (today.getDate());
if (day == 20 || day == 30)
  day = 10;
if (day > 10)
  day = day % 10;

let question = questions.filter(
  function (obj) {
    return obj.id == day;
  }
)
// console.log(question);
// console.log(questions)

const initialState = {
  question,
  currentQuestionIndex: 0,
  currentAnswer: "",
  answers: shuffleAnswers(question[0]),
  showResults: false,
  correctAnswersCount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_ANSWER": {
      const correctAnswersCount =
        action.payload ===
        state.question.correctAnswer
          ? state.correctAnswersCount + 1
          : state.correctAnswersCount;
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswersCount,
      };
    }
    case "NEXT_QUESTION": {
      const showResults =
        state.currentQuestionIndex === 0;
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const answers = showResults
        ? []
        : shuffleAnswers(state.questions[currentQuestionIndex]);
      return {
        ...state,
        currentAnswer: "",
        showResults,
        currentQuestionIndex,
        answers,
      };
    }
    case "SEE_RESULTS": {
      const showResults =
        state.currentQuestionIndex === 1;
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const answers = showResults
        ? []
        : shuffleAnswers(state.questions[currentQuestionIndex]);
      return {
        ...state,
        currentAnswer: "",
        showResults,
        currentQuestionIndex,
        answers,
      };
    }
    case "RESTART": {
      return initialState;
    }
    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return <QuizContext.Provider value={value} >{children}</QuizContext.Provider>;
};
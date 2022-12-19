import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '..'

export const selectQuestions = (s: RootState) => s.questions
export const selectQuestion = createSelector(
  [(s: RootState) => s.questions, (s: RootState, idx: number) => idx],
  (questions, idx) => questions[idx]
)

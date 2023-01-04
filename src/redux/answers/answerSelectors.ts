import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '..'

export const selectAnswersLength = (s: RootState) => s.answers.answerArr.length
export const selectAnswers = (s: RootState) => s.answers
export const selectAnswersArr = createSelector([selectAnswers], (s) => s.answerArr)

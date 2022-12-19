import { RootState } from '..'

export const selectAnswersLength = (s: RootState) => s.answers.answerArr.length
export const selectAnswers = (s: RootState) => s.answers

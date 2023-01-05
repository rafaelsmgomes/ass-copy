import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'

const initialState: { answerArr: ScoreType[]; answered: number } = {
  answerArr: [
    {
      label: 'Risk Visibility & Materiality',
      score: 0,
      answerIdx: 0,
    },
    {
      label: 'Supplier Onboarding & Engagement',
      score: 0,
      answerIdx: 0,
    },
    {
      label: 'Data Depth',
      score: 0,
      answerIdx: 0,
    },
    {
      label: 'Stakeholder Engagement',
      score: 0,
      answerIdx: 0,
    },
    {
      label: 'Unified Data & Reporting',
      score: 0,
      answerIdx: 0,
    },
    {
      label: 'Risk Management & Mitigation',
      score: 0,
      answerIdx: 0,
    },
  ],
  answered: 0,
}

export type ScoreType = {
  score: number
  label: string
  answerIdx: number
}

const answerSlices = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<{ score: number; idx: number; label: string; answerIdx: number }>) => {
      const {
        payload: { score, idx, label, answerIdx },
      } = action
      let minScore = score
      if (score < 15) minScore = 10

      state.answerArr[idx] = { score: minScore, label, answerIdx }
      if (idx > state.answered) state.answered = idx
      console.log(current(state))
    },
    updateAnswers: (state, action: PayloadAction<{ answerScores: number[] }>) => {
      const { answerScores } = action.payload
      state.answerArr.map((el, i) => (el.score = answerScores[i]))
      console.log(current(state))
    },
  },
})

export default answerSlices

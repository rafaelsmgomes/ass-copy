import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'

const initialState: { answerArr: ScoreType[]; answered: number } = {
  answerArr: [
    {
      label: 'Risk Visibility & Materiality',
      score: 0,
    },
    {
      label: 'Supplier Onboarding & Engagement',
      score: 0,
    },
    {
      label: 'Data Depth',
      score: 0,
    },
    {
      label: 'Stakeholder Engagement',
      score: 0,
    },
    {
      label: 'Unified Data & Reporting',
      score: 0,
    },
    {
      label: 'Risk Management & Mitigation',
      score: 0,
    },
  ],
  answered: 0,
}

export type ScoreType = { score: number; label: string }

const answerSlices = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<{ score: number; idx: number; label: string }>) => {
      const {
        payload: { score, idx, label },
      } = action
      let minScore = score
      if (score < 15) minScore = 10

      state.answerArr[idx] = { score: minScore, label }
      if (idx > state.answered) state.answered = idx
    },
  },
})

export default answerSlices

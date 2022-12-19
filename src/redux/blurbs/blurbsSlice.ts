import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'

const initialState: { label: string; blurb: string }[] = [
  {
    label: 'Risk Visibility & Materiality',
    blurb:
      'Ensure you comply with evolving regulations and meet market demands by focusing on the risks most important to your business.',
  },
  {
    label: 'Supplier Onboarding & Engagement',
    blurb: 'Improve supplier fatigue and response rates with centralized supplier onboarding and engagement.',
  },
  {
    label: 'Data Depth',
    blurb: 'Go deeper into the supply chain to track suppliers, parts, and products.',
  },
  {
    label: 'Stakeholder Engagement',
    blurb: 'Establish leadership support and team collaboration to move the needle.',
  },
  {
    label: 'Unified Data & Reporting',
    blurb: 'Get a more holistic view of risk to build defensible supply chain sustainability reports.',
  },
  {
    label: 'Risk Management & Mitigation',
    blurb: 'Go beyond reactive compliance to proactive risk prevention across all supply chain programs.',
  },
]

const blurbsSlice = createSlice({
  name: 'blurbs',
  initialState,
  reducers: {},
})

export default blurbsSlice

export const selectBlurbs = (s: RootState) => s.blurbs

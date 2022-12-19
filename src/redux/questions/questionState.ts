export type QuestionModel = { question: string; answers: string[]; type: string }

export const initialState: QuestionModel[] = [
  {
    question: 'Do you deeply understand all the regulations and risks affecting your business?',
    answers: [
      'No',
      'Somewhat, but not in depth.',
      'Yes, but I struggle to anticipate evolving regulations.',
      'Yes, with some ability to anticipate upcoming regulations.',
      'Yes, I have complete insig ht into upcoming regulations to adapt quickly.',
    ],
    type: 'Risk Visibility & Materiality',
  },
  {
    question: 'Does your organization have a centralized process to onboard and engage suppliers?',
    answers: [
      'I have no idea how we onboard suppliers.',
      'No, supplier processes are disconnected across several teams.',
      'Somewhat, supplier processes are mostly centralized across teams, but manual.',
      'Yes, we have a centralized in-house process.',
      'Yes, we use a vendor to support supplier processes based on industry best practices.',
    ],
    type: 'Supplier Onboarding & Engagement',
  },
  {
    question: 'Can you measure supply chain risks across your entire supply chain (i.e. beyond Tier 1 suppliers)?',
    answers: [
      'No',
      'Somewhat, we only have visibility into some Tier 2 suppliers.',
      'Yes, we have visibility into our complete supply chain',
    ],
    type: 'Data Depth',
  },
  {
    question: 'Are your supply chain sustainability programs supported across your business?',
    answers: [
      'No.',
      'Somewhat, but it varies across individuals and teams.',
      'Mostly, but there is room for improvement.',
      'Yes, support and collaboration come from all levels of the organization.',
      'Yes, our whole organization rallies behind our programs.',
    ],
    type: 'Stakeholder Engagement',
  },
  {
    question: 'Do you have a connected view of all supplier data for defensible reporting?',
    answers: [
      'No, data and reporting are entirely siloed.',
      'Somewhat, data is siloed, with minimal reporting visibility.',
      'Mostly, our top-level data and reporting are connected; but lacking supplier level insights.',
      'Yes, our top-level and supplier data and reporting are connected across programs and teams.',
      'Yes, ou r top-, supplier-, and part-level data is connected and updated in real-time for complete and defensible reporting.',
    ],
    type: 'Unified Data & Reporting',
  },
  {
    type: 'Risk Management & Mitigation',
    question: 'Are you able to quickly flag supplier risks and recommend actions to improve?',
    answers: [
      'No, we cannot manage supplier risk.',
      'We can manually flag risks, but do not recommend actions to improve.',
      'Somewhat, we can flag risks and sometimes recommend actions for supplier improvements, but it is a manual, long process.',
      'Yes, we can identify supplier risk in real-time and deliver recommendations to improve.',
      'Yes, we have a system to automatically identify supplier risks, deliver recommendations to improve, and track improvements throughout the year.',
    ],
  },
]

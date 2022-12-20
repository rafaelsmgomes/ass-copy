import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'

const initialState: { label: string; blurb: string }[] = [
  {
    label: 'Risk Visibility & Materiality',
    blurb:
      'Businesses must know which regulations (and standards) are most material to them, manage emerging pressures from customers and investors, protect their reputation, and maintain market access. Sophisticated supply chain sustainability management vendors should provide materiality guidance to help you determine which product, trade, and ESG risks to prioritize. To ensure comprehensive risk visibility, you must continuously track supplier data with self-reported surveys and ongoing monitoring.',
  },
  {
    label: 'Supplier Onboarding & Engagement',
    blurb:
      'Connecting with your suppliers and ensuring product and ESG requirements are understood is the first step towards a positive supplier experience and sustainable relationship. When set by industry standards and best practices, a formalized supplier onboarding and engagement process extends far beyond a code of conduct and can improve supplier fatigue and response rates. Yet, creating and managing supplier onboarding and engagement processes in-house puts strain on your employees and confuses your suppliers as regulation and market changes force you to update procedures constantly. Instead, working with a supply chain sustainability management vendor with whom your suppliers are familiar takes a load off your team. In addition, it ensures more consistent supplier engagements based on industry best practices. ',
  },
  {
    label: 'Data Depth',
    blurb:
      'Supply chain data is often shallow (i.e., limited data from some key suppliers). However, when managed correctly, it can identify hidden risks, going beyond Tier 1 into your “parts of parts”—for example, uncovering a human rights violation linked to a supplier contributing to your sub-assembly. As your supply chain sustainability matures, you must continually go deeper into the supply chain to track suppliers, parts, and products to (ultimately) create accurate Digital Product Passports (in the EU) and meet or exceed requirements such as TSCA and Prop 65 (in the U.S.).',
  },
  {
    label: 'Stakeholder Engagement',
    blurb: `Stakeholders' engagement ranges from individual alignment to department collaboration (e.g., Sustainability and Procurement) to C-Suite involvement. Companies that lead in supply chain sustainability management have leadership support and team collaboration across all levels of the organization.`,
  },
  {
    label: 'Unified Data & Reporting',
    blurb: `Unified data & reporting in supply chains are critical to achieving deep sustainability. Without centralized data fueling your programs, data is only visible in silos. Centralized and unified data enables a more holistic view of risk across your entire organization's supply chain, from product compliance to ESG and trade compliance, to build complete and defensible supply chain sustainability reports to protect revenue.`,
  },
  {
    label: 'Risk Management & Mitigation',
    blurb: `The earlier you identify supply chain risks, the better you can manage and correct them by working with your suppliers. You’ll need to implement systems to educate suppliers, track their progress, and drive continuous improvements when risks are detected. To grow beyond reactive product compliance (i.e., scrambling to ask suppliers for documentation after you receive a request) to proactive risk prevention across all your supply chain programs, you must bring your suppliers with you on the journey to supply chain sustainability.`,
  },
]

const reportSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {},
})

export default reportSlice

export const selectReports = (s: RootState) => s.reports

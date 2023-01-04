import { ReactElement } from 'react'

type ReportsSliceBlurbsType = {
  title: string
  sup: string
  paragraphs: ReactElement[]
}

export type ReportsSliceType = {
  low: ReportsSliceBlurbsType
  med: ReportsSliceBlurbsType
  average: ReportsSliceBlurbsType
  high: ReportsSliceBlurbsType
  top: ReportsSliceBlurbsType
}

export const initialState: ReportsSliceType = {
  low: {
    sup: 'You’re on your way with',
    title: 'Supply Chain Compliance Planning',
    paragraphs: [
      <p className='report-copy'>
        You are in scope of several risks and regulations impacting your business growth. It can feel overwhelming if
        you need help knowing where to begin. Luckily, this maturity model can help you kickstart your conversations to
        drive real progress.
      </p>,
      <p className='report-copy'>
        To get started, determine if your business has direct legal risk from regulations covering your products, parts,
        and sub-assemblies. Then create a system to stay aware of new developments (legislative, customer-driven) that
        may impact your business.
      </p>,
      <p className='report-copy'>
        <a
          href='https://click.assent.com/guide-assent-compliance-platform-and-product-suite'
          target={'_blank'}
          className='font-bold text-primary-blue underline'
        >
          Learn more about your results
        </a>{' '}
        and what you can do to improve your maturity today.
      </p>,
    ],
  },
  med: {
    sup: 'You’ve achieved ',
    title: 'Basic Compliance',
    paragraphs: [
      <p className='report-copy'>
        You are in scope of several risks and regulations impacting your business growth. You are progressing, but have
        blind spots.
      </p>,
      <p className='report-copy'>
        To improve results, bring stakeholders and functions together to drive coordination and unified data. Develop a
        plan to identify gaps and share your progress with senior management.
      </p>,
      <p className='report-copy'>
        <a
          href='https://click.assent.com/guide-assent-compliance-platform-and-product-suite'
          target={'_blank'}
          className='font-bold text-primary-blue underline'
        >
          Learn more about your results
        </a>{' '}
        and what you can do to improve your maturity today.
      </p>,
    ],
  },
  average: {
    sup: 'You’ve established a ',
    title: 'Foundation for Sustainability',
    paragraphs: [
      <p className='report-copy'>
        You are on the right path to supply chain sustainability. Still, you are in scope of several risks & regulations
        impacting your ability to create a resilient supply chain and protect your organization from changing market and
        customer demands. A robust product compliance program is a strong foundation.
      </p>,
      <p className='report-copy'>
        However, you’ll still need to take the necessary steps to progress along your journey, like expanding your scope
        and supplier engagements to capture risks across additional topics such as ESG-related metrics. In addition, you
        likely still need to standardize data across divisions to drive deeper visibility into your supply chain.
      </p>,
      <p className='report-copy'>
        <a
          href='https://click.assent.com/guide-assent-compliance-platform-and-product-suite'
          target={'_blank'}
          className='font-bold text-primary-blue underline'
        >
          Learn more about your results
        </a>{' '}
        and what you can do to improve your maturity today.
      </p>,
    ],
  },
  high: {
    sup: 'Good news!',
    title: 'You’ve achieved Strong Sustainability',
    paragraphs: [
      <p className='report-copy'>
        However, there is still work to be done. Based on your results, you likely have defensible reports backed by
        solid supply chain transparency. You can still increase your competitive edge and enhance supply chain
        resilience with more advanced capabilities.
      </p>,
      <p className='report-copy'>
        To take your program to the next level and drive deeper visibility throughout your supply chain, continue
        growing relationships with your suppliers and their suppliers and develop educational materials and training to
        help underperforming suppliers improve. Driving continuous improvement with your supplier can be challenging,
        but luckily you aren’t alone.
      </p>,
      <p className='report-copy'>
        <a
          href='https://click.assent.com/guide-assent-compliance-platform-and-product-suite'
          target={'_blank'}
          className='font-bold text-primary-blue underline'
        >
          Learn more about your results
        </a>{' '}
        and what you can do to improve your maturity today.
      </p>,
    ],
  },
  top: {
    sup: 'Good news!',
    title: 'You’ve achieved Deep Sustainability',
    paragraphs: [
      <p className='report-copy'>
        However, there is still work to be done. Supply chain disruption is the 'new normal', causing risk and limiting
        your growth.
      </p>,
      <p className='reports-copy'>
        Based on your results, your organization is industry-leading, with deep supply chain sustainability management
        as a core differentiator and competitive advantage.
      </p>,
      <p className='report-copy'>
        Yet, what you legally sell today may be illegal tomorrow, so you need to stay ahead of emerging regulations and
        constinuously educate suppliers to exceed demands and meet evolving requirements.
      </p>,
      <p className='report-copy'>
        <a
          href='https://click.assent.com/guide-assent-compliance-platform-and-product-suite'
          target={'_blank'}
          className='font-bold text-primary-blue underline'
        >
          Are your supply chains resilient enough to sustain?
        </a>
      </p>,
    ],
  },
}

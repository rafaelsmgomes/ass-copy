import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Grid from '../../components/UI/Grid'
import homeImg from '../../assets/images/home-image.jpg'
import vectorGroup from '../../assets/svgs/vector-group.svg'
import vectorDown from '../../assets/svgs/vector-down.svg'
import vectorUp from '../../assets/svgs/vector-up.svg'
import { ButtonLg } from '../../components/UI/Button/Button'

import './Homepage.scss'

const Homepage = (props: any) => {
  const navigate = useNavigate()
  const ref = useRef<HTMLDivElement>(null)
  const [isMore, setIsMore] = useState(false)
  const renderParagraphs = (
    <>
      {isMore ? (
        <>
          <p className='base-copy'>
            Deep visibility into your supply chain risk is critical to protecting your revenue. Yet, this is challenging
            because supply chains were not built with sustainability in mind. In addition, having limited control over
            what happens outside your company’s four walls makes it difficult to know where to start and benchmark your
            company’s efforts versus your competition. Still, progress must be made.
          </p>
          <p className='base-copy'>
            Assent’s Maturity Model is based on a deep understanding of the challenges facing large and small complex
            manufacturers, like Industrial Equipment, Medical Technology, Electronics, etc. It has been developed
            through hundreds of enterprise relationships and conversations between regulatory subject matter experts and
            top executives spanning Product Compliance, Sustainability, Procurement, and others.
          </p>
          <p className='base-copy'>
            This assessment reflects the outcome of those discussions and the critical capabilities businesses must
            adopt to deliver a defensible and complete supply chain sustainability management solution.
          </p>
          <p className='base-copy'>
            <button onClick={() => setIsMore(false)} className='font-bold text-primary-blue underline'>
              Less info -
            </button>
          </p>
        </>
      ) : (
        <>
          <p className='base-copy'>
            Supply chain sustainability encompasses all issues related to the environment, human health, and human
            rights within the supply chain, from green house gas emissions to harmful substances and ensuring products
            are manufactured responsibly, without forced labor
          </p>

          <p className='base-copy'>
            You can only ensure the necessary supply chain resilience to avoid disruption and stay ahead of the
            competition with a defensible supply chain sustainability management program unified across product and
            trade compliance and ESG.
          </p>
          <p className='base-copy'>
            Use this Self-Assessment to discover where you are on your journey to supply chain sustainability, identify
            gaps, and determine the next steps.{' '}
          </p>
          <p className='base-copy'>
            <button onClick={() => setIsMore(true)} className='font-bold text-primary-blue underline'>
              More info +
            </button>
          </p>
        </>
      )}
    </>
  )

  return (
    <div className='max-h-auto relative min-h-[calc(100vh-72px)] pt-[50px] pb-24 tb:pt-0'>
      <img src={vectorGroup} alt='' className='absolute bottom-0 right-0' />
      <Grid className='relative pt-[100px] tb:m-0 tb:pt-2.5'>
        <div className='absolute top-0 left-0 w-3/4 object-cover tb:h-[385px] tb:w-full '>
          <img
            src={vectorDown}
            alt=''
            className='absolute -right-16 -top-8 h-[127px] w-[107px] object-contain tb:hidden'
          />
          <img
            src={vectorUp}
            alt=''
            className='absolute -left-16 -bottom-8 h-[127px] w-[107px] object-contain tb:hidden'
          />
          <img
            src={homeImg}
            alt=''
            className='md: relative aspect-[20/9] w-full object-cover tb:aspect-auto tb:h-full'
          />
        </div>
        <div className='home-box'>
          <p className='mb-1 text-sm font-bold text-primary-green tb:text-lg'>Maturity Assessment</p>
          <h1 className='mb-[18px] text-[50px] font-bold leading-[58px] text-primary-blue tb:text-3xl'>
            Your Journey to Supply Chain Sustainability
          </h1>
          <div className='mb-5' ref={ref}>
            {renderParagraphs}
          </div>
          <ButtonLg className='' onClick={() => navigate('/questions')}>
            Get Started
          </ButtonLg>
        </div>
      </Grid>
    </div>
  )
}

export default Homepage

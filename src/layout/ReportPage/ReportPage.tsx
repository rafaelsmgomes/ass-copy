import { ArrowLink, ButtonLg } from '../../components/UI/Button/Button'
import Grid from '../../components/UI/Grid'

import { ReactComponent as SustainabilityScale } from '../../assets/svgs/sustainability-scale.svg'
import { ReactComponent as Zero } from '../../assets/svgs/0.svg'
import { ReactComponent as One } from '../../assets/svgs/1.svg'
import { ReactComponent as Two } from '../../assets/svgs/2.svg'
import { ReactComponent as Three } from '../../assets/svgs/3.svg'
import { ReactComponent as Four } from '../../assets/svgs/4.svg'

import { ReactComponent as ArrowL } from '../../assets/svgs/comp-arrow-L.svg'
import { ReactComponent as ArrowR } from '../../assets/svgs/comp-arrow-R.svg'
import { ReactComponent as ComText } from '../../assets/svgs/comp_Compliance-text.svg'

import vectorsImg from '../../assets/svgs/vectors-sml.svg'
import vectorsLeft from '../../assets/svgs/vector-cta-left.svg'
import vectorsRight from '../../assets/svgs/vector-cta-right.svg'

import './ReportPage.scss'
import ReportGraph from '../../components/ReportGraph/ReportGraph'
import { createMyContext } from '../../utils/create-context'
import { CSSProperties, Dispatch, SetStateAction, useLayoutEffect, useRef, useState } from 'react'
import ReportDots from '../../components/ReportGraph/ReportDots'
import { useAppSelector } from '../../redux'
import { selectBigBlurbs } from '../../redux/bigBlurbs/bigBlurbsSlice'
import { selectAnswersArr } from '../../redux/answers/answerSelectors'
import { ReportsSliceType } from '../../redux/reports/reportsState'
import { selectReports } from '../../redux/reports/reportsSlice'

type ReportSlidesType = {
  slide: number
  setSlide: Dispatch<SetStateAction<number>>
}

const [useContext, ReportSlidesProvider] = createMyContext<ReportSlidesType>()
export const useReportSlide = useContext

const ReportPage = () => {
  const [slide, setSlide] = useState(0)
  const blurbs = useAppSelector(selectBigBlurbs)
  const answersArr = useAppSelector(selectAnswersArr)
  const score = answersArr.reduce((acc, cur) => (acc += cur.score), 0) / answersArr.length
  const reportsBlurbs = useAppSelector(selectReports)

  let [low, med, average, high, top] = [false, false, false, false, false]
  let scoreKey: keyof ReportsSliceType = 'low'
  // let score = 77
  if (score <= 34) {
    low = true
    scoreKey = 'low'
  } else if (score > 34 && score <= 63) {
    med = true
    scoreKey = 'med'
  } else if (score > 63 && score <= 85) {
    average = true
    scoreKey = 'average'
  } else if (score > 85 && score <= 95) {
    high = true
    scoreKey = 'high'
  } else if (score > 99) {
    top = true
    scoreKey = 'top'
  }

  const ref = useRef<HTMLDivElement>(null)
  const [divHeight, setDivHeight] = useState(0)
  useLayoutEffect(() => {
    if (!ref.current) return
    const childArr = Array.from(ref.current.childNodes) as HTMLElement[]
    childArr.forEach((el) => {
      const elHeight = el.getBoundingClientRect().height
      setDivHeight((cur) => (elHeight > cur ? elHeight : cur))
    })
  }, [])

  return (
    <ReportSlidesProvider value={{ slide, setSlide }}>
      <div className='pt-12 pb-28 tb:pt-0'>
        <div className='py-4 tb:mb-6 tb:bg-primary-blue'>
          <Grid>
            <p className='font-body text-sm font-bold text-neutral-charcoal tb:text-white'>
              Your Supply Chain Sustainability Journey Report
            </p>
          </Grid>
        </div>
        <Grid>
          <h1 className='mb-9'>
            <span className='block text-3xl font-bold text-primary-green tb:text-xl'>
              {reportsBlurbs[scoreKey].sup}
            </span>
            <span className='mb:leading-none block text-[50px] font-bold leading-[50px] text-primary-blue tb:text-[35px] md:text-[25px]'>
              {reportsBlurbs[scoreKey].title}
            </span>
          </h1>
          <div className='mb-4 flex w-full justify-between'>
            <div className='mb-6 w-full'>
              <div className='mb-8 h-[278px] md:h-[220px]'>
                <div className='mb-4 flex w-full justify-between '>
                  <div
                    className={`score-card  bg-[#bababa] ${low ? 'score' : ''} `}
                    style={{ '--score': `${score}%` } as CSSProperties}
                  >
                    <div className='relative h-full w-full'>
                      <p>Supply Chain Compliance Planning</p>
                      <Zero className='fill-[#9d9d9d]' />
                    </div>
                  </div>
                  <div
                    className={`score-card bg-[#a5a5a5] ${med ? 'score' : ''}`}
                    style={{ '--score': `${score}%` } as CSSProperties}
                  >
                    <div className='relative h-full w-full'>
                      <p>Basic Compliance</p>
                      <One className='fill-[#7e7e7e]' />
                    </div>
                  </div>
                  <div
                    className={`score-card bg-[#838383] ${average ? 'score' : ''}`}
                    style={{ '--score': `${score}%` } as CSSProperties}
                  >
                    <div className='relative h-full w-full'>
                      <p>Foundation for Sustainability</p>
                      <Two className='fill-[#6a6a6a]' />
                    </div>
                  </div>
                  <div
                    className={`score-card bg-[#6c6c6c] ${high ? 'score' : ''}`}
                    style={{ '--score': `${score}%` } as CSSProperties}
                  >
                    <div className='relative h-full w-full'>
                      <p>Strong Sustainability</p>
                      <Three className='fill-[#4e4e4e]' />
                    </div>
                  </div>
                  <div
                    className={`score-card bg-[#4e4e4e] ${top ? 'score' : ''}`}
                    style={{ '--score': `${score}%` } as CSSProperties}
                  >
                    <div className='relative h-full w-full'>
                      <p>Deep Sustainability</p>
                      <Four className='fill-[#333333]' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='relative flex items-center'>
                <ArrowL className='h-[17px] w-[14px] shrink-0' />
                <div className='grow-1 mr-4 block h-[3px] w-full bg-dark-grey-blue' />
                <ComText className='w-[100px] shrink-0 grow-0' />
                <div className='grow-1 ml-4 block h-[3px] w-full bg-dark-grey-blue' />
                <ArrowR className='h-[17px] w-[14px] shrink-0' />
                <p className='absolute top-5 right-0 text-neutral-charcoal text-opacity-80 '>Deep</p>
                <p className='absolute top-5 left-0 text-neutral-charcoal text-opacity-80 '>Shallow</p>
              </div>
            </div>
            <SustainabilityScale className='ml-3 shrink-0' />
          </div>
        </Grid>
        <Grid className='mb-[50px]'>
          <div className='flex gap-12 tb:flex-col tb:gap-6'>
            <div className='w-full'>{reportsBlurbs[scoreKey].paragraphs}</div>
            <div className='tb:grid-rows-auto w-[534px] shrink-0 tb:grid tb:w-full tb:grid-cols-2 tb:gap-2.5'>
              <div className='report-box report-bar mb-5 tb:mb-0'>
                <p className='report-box-title'>Book a Demo</p>
                <p className='report-box-copy'>
                  Let us be your partner on your path to supply chain sustainability. See why Assent’s platform is the
                  number one choice of the world’s most sustainable businesses.
                </p>
                <ButtonLg>Book a Demo</ButtonLg>
              </div>
              <div className='report-box'>
                <p className='report-box-title'>Share Your Results</p>
                <p className='report-box-copy'>Copy, bookmark, and share your results with your team.</p>
                <ArrowLink>Email link</ArrowLink>
              </div>
            </div>
          </div>
        </Grid>
        <div className='rep-graph--container relative'>
          <img src={vectorsImg} alt='' className='absolute bottom-0 left-0 z-10 object-contain' />
          <Grid>
            <div className='flex w-full gap-4 tb:flex-col-reverse'>
              <div className='w-1/2 shrink-0 tb:w-full'>
                <h2 className='mb-8 text-[40px] font-bold text-white tb:hidden'>
                  Supply Chain Sustainability Breakdown
                </h2>
                <ReportDots />
                <div
                  className='spider-blurb relative w-full '
                  ref={ref}
                  style={{ '--divHeight': divHeight } as CSSProperties}
                >
                  {blurbs.map(({ blurb, label }, i) => (
                    <div
                      key={i}
                      className={`absolute top-0 left-0 transition-opacity duration-300 ease-in-out${
                        slide === i ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <p className='mb-1 font-nunito text-sm font-bold text-secondary-gold'>{label}</p>
                      <p className='font-nunito text-sm leading-[1.29] text-white'>{blurb}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className='w-1/2 shrink-0 tb:w-full'>
                <h2 className='mb-8 hidden text-center text-[30px] font-bold text-white tb:block'>
                  Supply Chain Sustainability Breakdown
                </h2>
                <ReportGraph />
              </div>
            </div>
          </Grid>
        </div>
        <div className='pt-7 pb-14'>
          <Grid>
            <p className='mb-4 text-[40px] font-bold text-primary-blue'>Resources</p>
            <p className='report-copy w-[712px]'>
              Keep your journey going! The Assent Supply Chain Sustainability Maturity Model is designed to help
              business leaders understand critical capabilities and illuminate the steps on the journey to deep supply
              chain sustainability.
            </p>
            <div className='grid auto-rows-auto grid-cols-2 gap-2.5'>
              <div className='report-box bar-blue justify-self-stretch'>
                <p className='report-box-title'>The Assent Solution Guide</p>
                <p className='report-box-copy'>
                  Understand how Assent’s unique approach to deep supply chain sustainability will reduce risks,
                  decrease cost and increase revenue for your company.
                </p>
                <ArrowLink
                  href='https://click.assent.com/guide-assent-compliance-platform-and-product-suite'
                  target={'_blank'}
                  className='mt-auto'
                >
                  Read the Guide
                </ArrowLink>
              </div>
              <div className='report-box bar-blue'>
                <p className='report-box-title'>The Assent Supply Chain Sustainability Platform</p>
                <p className='report-box-copy mb-auto'>
                  The Assent platform helps complex manufacturers a defensible system of record for all their supply
                  chain sustainability due diligence data from product and trade compliance to ESG.
                </p>
                <ArrowLink href='http://www.assent.com/' target={'_blank'} className='bottom-0'>
                  Explore Assent
                </ArrowLink>
              </div>
            </div>
          </Grid>
        </div>
        <div className='cta-gradient overflow-hidden py-14'>
          <img src={vectorsLeft} alt='' className='absolute top-1 left-0' />
          <img src={vectorsRight} alt='' className='absolute top-1 right-0' />
          <Grid>
            <div className='mx-auto flex max-w-[790px] flex-col items-center'>
              <p className='mb-2.5 text-[41px] font-bold leading-[1.3] text-white'>Ready to take the next step?</p>
              <p className='mb-4 text-center font-nunito text-[20px] leading-[1.5] text-white'>
                Whether you’re interested in learning more or need specific details, we’re here to help.
              </p>
              <ButtonLg className='bg-white stroke-dark-grey-blue text-dark-grey-blue hover:bg-white'>
                Talk to an Expert
              </ButtonLg>
            </div>
          </Grid>
        </div>
      </div>
    </ReportSlidesProvider>
  )
}

export default ReportPage

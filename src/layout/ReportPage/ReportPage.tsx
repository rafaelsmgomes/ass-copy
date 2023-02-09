import { ArrowLink, ButtonLg } from '../../components/UI/Button/Button'
import Grid from '../../components/UI/Grid'
import gsap from 'gsap'
import Modal from 'react-modal'

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
import vectorsBg from '../../assets/svgs/bg-triangles-blue.svg'

import './ReportPage.scss'
import ReportGraph from '../../components/ReportGraph/ReportGraph'
import { createMyContext } from '../../utils/create-context'
import { CSSProperties, Dispatch, SetStateAction, useEffect, useLayoutEffect, useRef, useState } from 'react'
import ReportDots from '../../components/ReportGraph/ReportDots'
import { useAppDispatch, useAppSelector } from '../../redux'
import { selectBigBlurbs } from '../../redux/bigBlurbs/bigBlurbsSlice'
import { selectAnswersArr } from '../../redux/answers/answerSelectors'
import { ReportsSliceType } from '../../redux/reports/reportsState'
import { selectReports } from '../../redux/reports/reportsSlice'
import Legend from '../../components/SpiderGraph/Legend/Legend'
import { useLocation, useSearchParams } from 'react-router-dom'
import answerSlices from '../../redux/answers/answersSlice'
import BookDemo from '../../components/BookDemo/BookDemo'
import { useWindowWidth } from '../../hooks/useWindowWidth'

type ReportSlidesType = {
  slide: number
  setSlide: Dispatch<SetStateAction<number>>
}

const [useContext, ReportSlidesProvider] = createMyContext<ReportSlidesType>()
export const useReportSlide = useContext

const customStyles: Modal.Styles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0 , .4)',
    zIndex: 1000,
  },
}

const ReportPage = () => {
  const [modalIsOpen, setmodalIsOpen] = useState(false)
  const [slide, setSlide] = useState(0)

  const blurbs = useAppSelector(selectBigBlurbs)
  const answersArr = useAppSelector(selectAnswersArr)
  const score = answersArr.reduce((acc, cur) => (acc += cur.score), 0) / answersArr.length

  const reportsBlurbs = useAppSelector(selectReports)
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const answersScores: number[] = []
  searchParams.forEach((el) => {
    answersScores.push(parseInt(el))
  })
  const dispatch = useAppDispatch()

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
  } else if (score > 85 && score <= 99) {
    high = true
    scoreKey = 'high'
  } else if (score > 99) {
    top = true
    scoreKey = 'top'
  }
  const windowWidth = useWindowWidth()
  const ref = useRef<HTMLDivElement>(null)
  const [divHeight, setDivHeight] = useState(0)
  useLayoutEffect(() => {
    if (!ref.current) return
    const childArr = Array.from(ref.current.childNodes) as HTMLElement[]
    childArr.forEach((el) => {
      const elHeight = el.getBoundingClientRect().height + 60
      setDivHeight((cur) => (elHeight > cur ? elHeight : cur))
    })
  }, [windowWidth])

  const gsapRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    const ctx = gsap.context(() => {
      gsap.from(gsapRef.current!.children, { delay: 0.5, stagger: 0.2, opacity: 0, y: -20 })
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    // console.log(location)
    if (location.search) {
      dispatch(answerSlices.actions.updateAnswers({ answerScores: answersScores }))
    }
  }, [])

  return (
    <ReportSlidesProvider value={{ slide, setSlide }}>
      <div className='pt-2 pb-28 tb:pt-0'>
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
            <span className='mb:leading-none block text-[50px] font-bold leading-[50px] text-primary-blue tb:text-[35px] tb:leading-8 md:text-[25px]'>
              {reportsBlurbs[scoreKey].title}
            </span>
          </h1>
          <div className='mb-4 flex w-full items-start justify-between'>
            <div className='mb-6 w-full'>
              <div className='mb-8 h-[278px] md:h-[220px]'>
                <div className='mb-4 flex w-full justify-between ' ref={gsapRef}>
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
                <ComText className='w-[100px] shrink-0 grow-0 md:w-[80px]' />
                <div className='grow-1 ml-4 block h-[3px] w-full bg-dark-grey-blue' />
                <ArrowR className='h-[17px] w-[14px] shrink-0' />
                <p className='absolute top-5 right-0 text-neutral-charcoal text-opacity-80 md:text-xs '>Deep</p>
                <p className='absolute top-5 left-0 text-neutral-charcoal text-opacity-80  md:text-xs'>Shallow</p>
              </div>
            </div>
            <SustainabilityScale className='ml-3 shrink-0 sm:ml-1 sm:w-[100px] sm:-translate-y-8' />
          </div>
        </Grid>
        <Grid className='relative mb-[50px]'>
          <img src={vectorsBg} alt='' className='absolute top-1/4 left-1/2 -translate-x-1/2' />
          <div className='flex gap-12 tb:flex-col tb:gap-0'>
            <div className='mb-6 w-full'>{reportsBlurbs[scoreKey].paragraphs}</div>
            <div className='tb:grid-rows-auto w-[534px] shrink-0 tb:grid tb:w-full tb:grid-cols-2 tb:gap-2.5 md:grid-cols-1'>
              <div className='report-box report-bar mb-5 tb:mb-0'>
                <p className='report-box-title'>Book a Demo</p>
                <p className='report-box-copy'>
                  Let us be your partner on your path to supply chain sustainability. See why Assent’s platform is the
                  number one choice of the world’s most sustainable businesses.
                </p>
                <ButtonLg onClick={() => setmodalIsOpen(true)}>Book a Demo</ButtonLg>
              </div>
              <div className='report-box'>
                <p className='report-box-title'>Share Your Results</p>
                <p className='report-box-copy'>Copy, bookmark, and share your results with your team.</p>
                {/* FIXME - update with URL */}
                <ArrowLink href='mailto:?subject=Check%20out%20our%20Supply%20Chain%20Sustainability%20Report%20from%20Assent&body=Hi%2C%20I%20just%20took%20Assent%E2%80%99s%20Supply%20Chain%20Sustainability%20Maturity%20self-assessment%20to%20better%20understand%20our%20sustainability%20journey%20within%20our%20organization.%20The%20model%20showcases%20how%20we%20rank%20and%20outlines%20focus%20areas%20to%20further%20strengthen%20our%20supply%20chain.%20Take%20a%20look%20at%20our%20results%3A%20%20%5BRESULTS%20PAGE%20LINK%5D.%20You%20can%20also%20take%20the%20assessment%20yourself%20and%20we%20can%20compare%20answers%3A%20%5BTOOL%20HOME%20PAGE%20LINK%5D.'>
                  Email link
                </ArrowLink>
              </div>
            </div>
          </div>
        </Grid>
        <div className='rep-graph--container relative'>
          <img src={vectorsImg} alt='' className='absolute bottom-0 left-0 z-10 object-contain tb:hidden' />
          <Grid>
            <div className='flex w-full gap-4 tb:flex-col-reverse'>
              <div className='relative z-10 w-1/2 shrink-0 tb:w-full'>
                <h2 className='mb-8 text-[40px] font-bold text-white tb:hidden '>
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
                      className={`absolute top-0 left-0 font-nunito transition-opacity duration-300 ease-in-out ${
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
                <h2 className='mb-8 hidden text-center text-[25px] font-bold text-white tb:block'>
                  Supply Chain Sustainability Breakdown
                </h2>
                <ReportGraph />
              </div>
            </div>
          </Grid>
          <Legend visible className='legend-reports' />
        </div>
        <div className='pt-7 pb-14'>
          <Grid>
            <p className='mb-4 text-[40px] font-bold text-primary-blue'>Resources</p>
            <p className='report-copy w-[712px] tb:w-full'>
              Keep your journey going! The Assent Supply Chain Sustainability Maturity Model is designed to help
              business leaders understand critical capabilities and illuminate the steps on the journey to deep supply
              chain sustainability.
            </p>
            <div className='grid auto-rows-auto grid-cols-2 gap-2.5 md:grid-cols-1'>
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
                <ArrowLink href='https://www.assent.com/capabilities/' target={'_blank'} className='bottom-0'>
                  Explore Assent
                </ArrowLink>
              </div>
            </div>
          </Grid>
        </div>
        <div className='cta-gradient overflow-hidden py-14'>
          <img src={vectorsLeft} alt='' className='absolute top-1 left-0' />
          <img src={vectorsRight} alt='' className='absolute top-1 right-0 md:hidden' />
          <Grid>
            <div className='mx-auto flex max-w-[790px] flex-col items-center'>
              <p className='mb-2.5 text-center text-[41px] font-bold leading-[1.3] text-white md:text-[25px]'>
                Ready to take the next step?
              </p>
              <p className='mb-4 text-center font-nunito text-[20px] leading-[1.5] text-white md:text-lg'>
                Whether you’re interested in learning more or need specific details, we’re here to help.
              </p>
              <ButtonLg
                className='bg-white stroke-dark-grey-blue text-dark-grey-blue transition-all duration-100 hover:bg-white hover:bg-opacity-50 hover:stroke-white hover:text-white'
                onClick={() => setmodalIsOpen(true)}
              >
                Talk to an Expert
              </ButtonLg>
            </div>
          </Grid>
        </div>
      </div>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={() => setmodalIsOpen(false)}
        className='book-content'
      >
        <BookDemo setModalIsOpen={setmodalIsOpen} />
      </Modal>
    </ReportSlidesProvider>
  )
}

export default ReportPage

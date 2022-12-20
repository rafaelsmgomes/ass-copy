import { ButtonLg } from '../../components/UI/Button/Button'
import Grid from '../../components/UI/Grid'

import { ReactComponent as SustainabilityScale } from '../../assets/svgs/sustainability-scale.svg'
import { ReactComponent as Zero } from '../../assets/svgs/0.svg'
import { ReactComponent as One } from '../../assets/svgs/1.svg'
import { ReactComponent as Two } from '../../assets/svgs/2.svg'
import { ReactComponent as Three } from '../../assets/svgs/3.svg'
import { ReactComponent as Four } from '../../assets/svgs/4.svg'
import vectorsImg from '../../assets/svgs/vectors-sml.svg'
import vectorsLeft from '../../assets/svgs/vector-cta-left.svg'
import vectorsRight from '../../assets/svgs/vector-cta-right.svg'

import './ReportPage.scss'
import ReportGraph from '../../components/ReportGraph/ReportGraph'
import { createMyContext } from '../../utils/create-context'
import { Dispatch, SetStateAction, useState } from 'react'
import ReportDots from '../../components/ReportGraph/ReportDots'
import { useAppSelector } from '../../redux'
import { selectReports } from '../../redux/reports/reportSlice'

type ReportSlidesType = {
  slide: number
  setSlide: Dispatch<SetStateAction<number>>
}

const [useContext, ReportSlidesProvider] = createMyContext<ReportSlidesType>()
export const useReportSlide = useContext

const ReportPage = () => {
  const [slide, setSlide] = useState(0)
  const blurbs = useAppSelector(selectReports)

  return (
    <ReportSlidesProvider value={{ slide, setSlide }}>
      <div className='pt-12 pb-28'>
        <Grid>
          <p className='text-sm font-bold text-neutral-charcoal '>Your Supply Chain Sustainability Journey Report</p>
          <h1 className='mb-9'>
            <span className='block text-3xl font-bold text-primary-blue'>You’re on your way with</span>
            <span className='block text-[50px] font-bold leading-[50px] text-primary-green'>
              Supply Chain Compliance Planning
            </span>
          </h1>
          <div className='mb-4 flex w-full justify-between'>
            <div className='w-full'>
              <div className='flex w-full justify-between'>
                <div className='score-card bg-[#bababa]'>
                  <p>Supply Chain Compliance Planning</p>
                  <Zero className='fill-[#9d9d9d]' />
                </div>
                <div className='score-card bg-[#a5a5a5]'>
                  <p>Basic Compliance</p>
                  <One className='fill-[#7e7e7e]' />
                </div>
                <div className='score-card bg-[#838383]'>
                  <p>Foundation for Sustainability</p>
                  <Two className='fill-[#6a6a6a]' />
                </div>
                <div className='score-card bg-[#6c6c6c]'>
                  <p>Strong Sustainability</p>
                  <Three className='fill-[#4e4e4e]' />
                </div>
                <div className='score-card bg-[#4e4e4e]'>
                  <p>Deep Sustainability</p>
                  <Four className='fill-[#333333]' />
                </div>
              </div>
            </div>
            <SustainabilityScale className='ml-3 shrink-0' />
          </div>
        </Grid>
        <Grid className='mb-[50px]'>
          <div className='flex gap-12'>
            <div className='w-full'>
              <p className='report-copy'>
                However, there is still work to be done. Based on your results, you likely have defensible reports
                backed by solid supply chain transparency. You can still increase your competitive edge and enhance
                supply chain resilience with more advanced capabilities.
              </p>
              <p className='report-copy'>
                To take your program to the next level and drive deeper visibility throughout your supply chain,
                continue growing relationships with your suppliers and their suppliers and develop educational materials
                and training to help underperforming suppliers improve. Driving continuous improvement with your
                supplier can be challenging, but luckily you aren’t alone.{' '}
              </p>
              <p className='report-copy'>
                <a href='' target={'_blank'} className='font-bold text-primary-blue underline'>
                  Learn more about your results
                </a>{' '}
                and what you can do to improve your maturity today.
              </p>
            </div>
            <div className='w-[534px] shrink-0'>
              <div className='report-box report-bar mb-5'>
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
              </div>
            </div>
          </div>
        </Grid>
        <div className='rep-graph--container relative'>
          <img src={vectorsImg} alt='' className='absolute bottom-0 left-0 z-10 object-contain' />
          <Grid>
            <div className='flex w-full gap-4'>
              <div className='w-1/2 shrink-0'>
                <h2 className='mb-8 text-[40px] font-bold text-white'>Sustainability Breakdown</h2>
                <ReportDots />
                <div className='relative w-full'>
                  {blurbs.map(({ blurb, label }, i) => (
                    <div
                      className={`absolute top-0 left-0 transition-opacity duration-300 ease-in-out ${
                        slide === i ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <p className='mb-1 font-nunito text-sm font-bold text-secondary-gold'>{label}</p>
                      <p className='font-nunito text-sm leading-[1.29] text-white'>{blurb}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className='w-1/2 shrink-0'>
                <ReportGraph />
              </div>
            </div>
          </Grid>
        </div>
        <div className='pt-7 pb-14'>
          <Grid>
            <p className='mb-4 text-[40px] font-bold text-primary-blue'>Resources</p>
            <p className='report-copy w-[712px]'>
              The Assent Supply Chain Sustainability Maturity Model for Complex Manufacturing is designed to help
              business leaders understand all of those issues, and illuminate the steps on the journey.
            </p>
            <div className='grid auto-rows-auto grid-cols-2 gap-2.5'>
              <div className='report-box bar-blue justify-self-stretch'>
                <p className='report-box-title'>The Assent Solution Guide</p>
                <p className='report-box-copy'>
                  Understand how Assent’s unique approach to deep supply chain sustainability will decrease risks and
                  increase revenue for your company.
                </p>
              </div>
              <div className='report-box bar-blue'>
                <p className='report-box-title'>The Assent Supply Chain Sustainability Platform</p>
                <p className='report-box-copy'>
                  The Assent platform helps complex manufacturing track and improve their supply chain data. From
                  product compliance to ESG, we monitor suppliers, products and parts so you know your products are
                  safe, compliant, and sustainable.
                </p>
              </div>
            </div>
          </Grid>
        </div>
        <div className='cta-gradient overflow-hidden py-14'>
          <img src={vectorsLeft} alt='' className='absolute top-1 left-0' />
          <img src={vectorsRight} alt='' className='absolute top-1 right-0' />
          <Grid>
            <div className='mx-auto flex max-w-[742px] flex-col items-center'>
              <p className='mb-2.5 text-[41px] font-bold leading-[1.3] text-white'>Ready to take the next step?</p>
              <p className='mb-2 text-center font-nunito text-[20px] leading-[1.5] text-white'>
                Whether you’re interested in learning more or need specific details, we’re here to help with your Supply
                Chain transformation.
              </p>
            </div>
          </Grid>
        </div>
      </div>
    </ReportSlidesProvider>
  )
}

export default ReportPage

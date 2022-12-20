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

  return (
    <div className='relative min-h-[calc(100vh-86px)] pt-[50px] pb-24'>
      <img src={vectorGroup} alt='' className='absolute bottom-0 right-0' />
      <Grid>
        <div className='relative'>
          <div className='absolute top-0 left-0 w-3/4'>
            <img src={vectorDown} alt='' className='absolute -right-16 -top-8 h-[127px] w-[107px] object-contain' />
            <img src={vectorUp} alt='' className='absolute -left-16 -bottom-8 h-[127px] w-[107px] object-contain' />
            <img src={homeImg} alt='' className='relative aspect-[20/9] w-full object-cover' />
          </div>
          <div className='home-box'>
            <p className='mb-1 text-sm font-bold text-primary-green'>Maturity Assessment</p>
            <h1 className='mb-[18px] text-[50px] font-bold leading-[58px] text-primary-blue'>
              Your Journey to Supply Chain Sustainability
            </h1>
            <p className='base-copy'>
              Deep visibility into your supply chain risk is critical to protecting your revenue. Yet, this is
              challenging because supply chains were not built with sustainability in mind. In addition, having limited
              control over what happens outside your company’s four walls makes it difficult to know where to start and
              benchmark your company’s efforts versus your competition. Still, progress must be made.
            </p>
            <p className='base-copy'>
              You can only ensure the necessary supply chain resilience to avoid disruption and stay ahead of the
              competition with a defensible supply chain sustainability management program unified across product
              compliance and ESG.
            </p>
            <p className='base-copy'>
              Use this Self-Assessment to discover where you are on your journey to supply chain sustainability,
              identify gaps, and determine the next steps.{' '}
              <a href='' className='font-bold text-primary-blue underline'>
                More info +
              </a>
            </p>
            <ButtonLg onClick={() => navigate('/questions')}>Get Started</ButtonLg>
          </div>
        </div>
      </Grid>
    </div>
  )
}

export default Homepage

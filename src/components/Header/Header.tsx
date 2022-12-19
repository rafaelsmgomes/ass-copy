import './Header.scss'
import { ReactComponent as Logo } from '../../assets/svgs/assent-logo.svg'
import Grid from '../UI/Grid'
import { Link } from 'react-router-dom'
import { ButtonSml } from '../UI/Button/Button'
import { useAppContext } from '../../App'

const Header = () => {
  const { setPage } = useAppContext()
  return (
    <div className='w-full bg-white py-5 shadow-md'>
      <Grid>
        <div className='flex items-center justify-between'>
          <div className='flex items-baseline gap-5'>
            <Link to='/'>
              <Logo className='w-[124px] object-contain' />
            </Link>
            <p className='mb-2 text-[14px] font-bold text-primary-blue'>
              Supply Chain Sustainability <span className='text-primary-green'>| Maturity Assessment</span>
            </p>
          </div>
          <ButtonSml as='a' href='/'>
            Book a demo
          </ButtonSml>
        </div>
      </Grid>
    </div>
  )
}

export default Header

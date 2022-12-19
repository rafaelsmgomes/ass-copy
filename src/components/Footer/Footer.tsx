import { ReactComponent as Linkedin } from '../../assets/svgs/linked-in-24.svg'
import { ReactComponent as Twitter } from '../../assets/svgs/twitter-24.svg'
import { ReactComponent as Facebook } from '../../assets/svgs/facebook-24.svg'

import Grid from '../UI/Grid'

export type FooterProps = {}

const Footer = (props: FooterProps) => {
  return (
    <div className='absolute bottom-0 w-full bg-dark-grey-blue py-5'>
      <Grid>
        <div className='flex w-full items-center justify-between'>
          <p className='font-nunito text-sm text-white'>© 2023 Assent Inc.</p>
          <div className='flex items-center gap-5'>
            <button>
              <Linkedin />
            </button>
            <button>
              <Twitter />
            </button>
            <button>
              <Facebook />
            </button>
          </div>
        </div>
      </Grid>
    </div>
  )
}

export default Footer

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
          <div className='flex items-center space-x-5'>
            {/* FIXME - update with actual URL of tool */}
            <a
              href='http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fassent.com&title='
              target={'_blank'}
            >
              <Linkedin />
            </a>
            {/* FIXME - update with actual URL of tool */}
            <a href='https://twitter.com/intent/tweet?url=https%3A%2F%2Fassent.com&text=' target={'_blank'}>
              <Twitter />
            </a>
            {/* FIXME - update with actual URL of tool */}
            <a href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fassent.com' target='_blank'>
              <Facebook />
            </a>
          </div>
        </div>
      </Grid>
    </div>
  )
}

export default Footer

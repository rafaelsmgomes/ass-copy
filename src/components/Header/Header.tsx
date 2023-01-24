import { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'

import './Header.scss'
import { ReactComponent as Logo } from '../../assets/svgs/assent-logo.svg'
import Grid from '../UI/Grid'
import { ButtonSml } from '../UI/Button/Button'
import BookDemo from '../BookDemo/BookDemo'

const customStyles: Modal.Styles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0 , .4)',
  },
}

Modal.setAppElement('#modal')

// TODO - create Modal for Book a Demo CTA

const Header = () => {
  const [modalIsOpen, setmodalIsOpen] = useState(false)

  return (
    <>
      <div className='w-full bg-white py-5 shadow-md'>
        <Grid>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-5'>
              <Link to='/'>
                <Logo className='w-[124px] object-contain' />
              </Link>
              <p className='mt-2.5 text-[14px] font-bold text-primary-blue tb:hidden'>
                Supply Chain Sustainability <span className='text-primary-green'>| Maturity Assessment</span>
              </p>
            </div>
            <ButtonSml onClick={() => setmodalIsOpen(true)}>Book a Demo</ButtonSml>
          </div>
        </Grid>
      </div>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={() => setmodalIsOpen(false)}
        className='book-content'
      >
        <BookDemo setModalIsOpen={setmodalIsOpen} />
      </Modal>
    </>
  )
}

export default Header

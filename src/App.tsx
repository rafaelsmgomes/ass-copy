import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Homepage from './layout/Homepage/Homepage'
import Grid from './components/UI/Grid'
import { SlidesProvider } from './slider/hooks/useSlider'
import Slider from './slider/Slider'
import { createMyContext } from './utils/create-context'

type PageType = 'landing' | 'questions' | 'report'
const [useContext, AppContextProvider] = createMyContext<{
  page: PageType
  setPage: React.Dispatch<React.SetStateAction<PageType>>
}>()
export const useAppContext = useContext

function App() {
  return (
    <div className='App relative'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App

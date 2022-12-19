import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'
import Grid from './components/UI/Grid'
import { SlidesProvider } from './slider/hooks/useSlider'
import Slider from './slider/Slider'
import { createMyContext } from './utils/create-context'

type PageType = 'landing' | 'questions' | 'results'
const [useContext, AppContextProvider] = createMyContext<{
  page: PageType
  setPage: React.Dispatch<React.SetStateAction<PageType>>
}>()
export const useAppContext = useContext

function App() {
  const [page, setPage] = useState<PageType>('landing')
  return (
    <div className='App'>
      <AppContextProvider value={{ page, setPage }}>
        <Header />
        <Outlet />
      </AppContextProvider>
      <Footer />
    </div>
  )
}

export default App

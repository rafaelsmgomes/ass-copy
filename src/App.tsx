import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

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

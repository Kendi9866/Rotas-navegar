
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Menu from './Components/Menu'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

export default function App() {
  return(
    <header className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/sobre' element={ <Sobre/> }/>
          <Route path='/contato' element={ <Contato/> }/>
        </Routes>
      </BrowserRouter>
    </header>
  )
}
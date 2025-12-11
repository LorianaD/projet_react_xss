import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Secure from './pages/Secure'
import Vulnerable from './pages/Vulnerable'
import MainLayout from './components/Layout/MainLayout'
import Exo1 from './pages/Exo1'
import Calculator from './pages/Calculator'
import Exo3 from './pages/Exo3'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={ < MainLayout /> }>
            <Route path='/' element={ < Home /> }/>
            <Route path='/secure' element={ < Secure /> }/>
            <Route path='/vunerable' element={< Vulnerable />}/>
            <Route path='/exo1' element={< Exo1 />}></Route>
            <Route path='/calculator' element={< Calculator />}></Route>
            <Route path='/exo3' element={< Exo3 />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Secure from './pages/Secure'
import Vulnerable from './pages/Vulnerable'
import MainLayout from './components/Layout/MainLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={ < MainLayout /> }>
            <Route path='/' element={ < Home /> }/>
            <Route path='/secure' element={ < Secure /> }/>
            <Route path='/vunerable' element={< Vulnerable />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

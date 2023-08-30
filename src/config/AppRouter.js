import Home from '../screens/Home'
import About from '../screens/About'
import Login from '../screens/Login'
import { SignUp } from '../screens/SignUp'
import Location from '../screens/Location'
import { Detail } from '../screens/Detail'
import { Feature } from '../screens/Feature'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/feature' element={< Feature />} />
            <Route path='/location' element={< Location />} />
            <Route path='/about' element={< About/>} />
            <Route path='/detail' element={<Detail/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/login' element={<Login/>} />
        </Routes>
    </Router>
  )
}

export default AppRouter
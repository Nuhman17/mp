import './App.css'
import './bootstrap.min.css'
import Header from './components/Header'
import Landing from './pages/Landing'
import Footer from './components/Footer'
import Home from './pages/Home'
import History from './pages/History'
import {Routes,Route} from 'react-router-dom'


function App() {

  return (
    <>
    <Header/>
  <Routes>
<Route path='/'element={<Landing/>}/>
<Route path='/home'element={<Home/>}/>
<Route path='/his'element={<History/>}/>

  </Routes>
  <Footer/>
   
  
    
    </>
  )
}

export default App

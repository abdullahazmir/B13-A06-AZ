
import './App.css'
import ActiveUsers from './components/ActiveUsers/ActiveUsers'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import GetStarted from './components/GetStarted/GetStarted'
import NavBar from './components/NavBar/NavBar'
import Products from './components/Products/Products'
import Transparent from './components/Transparent/Transparent'

function App() {
  

  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <ActiveUsers></ActiveUsers>
    <Products></Products>
    <GetStarted></GetStarted>

    <Transparent></Transparent>
    <Footer></Footer>
    </>
  )
}

export default App

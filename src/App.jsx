
import { useState } from 'react'
import './App.css'
import ActiveUsers from './components/ActiveUsers/ActiveUsers'
import Banner from './components/Banner/Banner'
import Carts from './components/Carts/Carts'
import Footer from './components/Footer/Footer'
import GetStarted from './components/GetStarted/GetStarted'
import NavBar from './components/NavBar/NavBar'
import Products from './components/Products/Products'
import Transparent from './components/Transparent/Transparent'
import { ToastContainer } from 'react-toastify'

const getProducts = async () => {
  const res = await fetch('/Data.json')
  return res.json()
}
const productsRes = getProducts()


function App() {
  const [activeTab, setActiveTab] = useState("products");

  const [carts, setCarts]= useState([])
  console.log(carts)



  return (
    <>
      <NavBar carts={carts}></NavBar>
      <Banner></Banner>
      <ActiveUsers></ActiveUsers>

      <div className='max-w-7xl mx-auto'>
        <div className='text-center py-10'>
          <h1 className='text-3xl font-semibold pb-3'>Premium Digital Tools</h1>
          <p>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
        </div>


        {/* name of each tab group should be unique */}
        <div className="tabs tabs-box justify-center bg-transparent ">
          <input 
            type="radio"
            name="my_tabs_1"
            className="tab rounded-full w-40 "
            aria-label="Products"
            onClick={() => setActiveTab("products")}
            defaultChecked
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-full w-40"
            aria-label={`cart (${carts.length})`}
            // aria-label={`Cart (${carts.length})`}
            onClick={() => setActiveTab("cart")}
          />
        </div>


      </div>



      {
        activeTab === 'products' && <Products productsRes={productsRes} carts={carts} setCarts={setCarts}></Products>
      }

      {
        activeTab === 'cart' && <Carts carts={carts} setCarts={setCarts} ></Carts>
      }
      <GetStarted></GetStarted>

      <Transparent></Transparent>
      
      <Footer></Footer>
     
    </>
  )
}

export default App

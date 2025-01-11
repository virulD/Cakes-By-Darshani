// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/products'
import NavBar from './components/NavBar/NavBar'
const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='product/:productId' element={ <Products/>} />
      </Routes>
    </div>
  )
}

export default App
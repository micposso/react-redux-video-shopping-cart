import { useState } from 'react'
import Navbar from './components/NavBar'
import BasketProducts from './components/BasketProducts'

function App() {

  return (
    <>
     <Navbar />
      <h1 className="text-center text-3xl font-medium mt-2 py-4">Redux Store</h1>
      <BasketProducts />
    </>
  )
}

export default App

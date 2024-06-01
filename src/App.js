import React, { useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import { useDispatch } from 'react-redux'
import { fetchAllCategories } from './store/categorySlice'

function App() {

  let dispatch = useDispatch()

  useEffect(() => {
    
    dispatch(fetchAllCategories())

  }, [])
  

  return <>

    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/products'>Products</Link></li>
      <li><Link to='/cart'>Cart</Link></li>
    </ul>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>

  </>
}

export default App
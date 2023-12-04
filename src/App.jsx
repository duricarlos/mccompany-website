
import './App.css'

import HomePage from './HomePage'
import ShopPage from './ShopPage'
import ProductPage from './ProductPage'

import { Route, Routes } from 'react-router-dom'

export default function App() {
  document.body.classList.add('text-mc-secondary');

  return (
    <>
      <main className='max-h-screen'>

        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path='en' element={<HomePage currentLang='en' currentPath='/' />}></Route>
          <Route path='es' element={<HomePage currentLang='es' currentPath='/' />}></Route>
          <Route path="/shop" element={<ShopPage />} />
          <Route path='/shop/en' element={<ShopPage currentLang='en' currentPath='/shop/' />}></Route>
          <Route path='/shop/es' element={<ShopPage currentLang='es' currentPath='/shop/' />}></Route>
          <Route path="/product/:productId" element={<ProductPage />} />

        </Routes>
      </main>
    </>
  )
}



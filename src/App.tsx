import React,{useEffect, useState} from 'react'
import Shop from './Shop'
import MyCart from './MyCart'
import { Routes, Route } from 'react-router-dom'


const App:React.FC = () => {

  const [cartItems, setCartItems] = useState<{item:object}[]>([])

  const handleClick = (item: any) => {
    setCartItems(cartItems=>[...cartItems,item])
    console.log(cartItems)
  }

  const handleCartChange = (item: any) =>{
    setCartItems(item)
  }

  useEffect(()=>{
    console.log(cartItems)  
  })

  return (
    <Routes>
      <Route path="/" element={<Shop handleClick={handleClick} />}  />
      <Route path="cart" element={<MyCart handleCartChange={handleCartChange} cart={cartItems} />}  />
    </Routes> 
  )
}

export default App
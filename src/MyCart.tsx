import React,{useEffect,useState} from 'react'

interface CartItems {
    cart: any,
    handleCartChange: any
}

const MyCart:React.FC<CartItems> = ({cart, handleCartChange}) => {
  

  const handleRemove = (item:any) => {
    let result = cart.filter((product:any) => {return product.id != item.id})
      handleCartChange(result)
  }


  return (
    <div>
      <>
       <div className="flexer">
            {cart.map((item:any)=>{
              return(
                <div className="data" key={item.id}>
                  <img src={item.image} className="image" />
                  <div className="flex-modify"> 
                    <h1>{item.name}</h1>
                    <button onClick={()=>handleRemove(item)}>
                      Remove Item
                    </button>
                  </div>
                </div>
              )
            })}
        </div>
      </>
    </div>
  )
}

export default MyCart
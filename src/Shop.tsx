import React from 'react'
import Data from './Data.json'
import { Link } from 'react-router-dom';

interface Clicker {
  handleClick: (params: any) => any
}

const Shop:React.FC<Clicker> = ({handleClick}) => { 
  return (
    <div>
      <Link to='/cart'>
        <button className="cartbtn">Cart</button>
      </Link>
      
      <div className="flexer">
        {Data.map((item)=>{
          return(
            <div className="data" key={item.id}>
              <img src={item.image} className="image" />
              <div className="flex-modify"> 
                <h1>{item.name}</h1>
                <div>
                     <button onClick={()=>{handleClick(item)}}>Add to  Cart</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Shop
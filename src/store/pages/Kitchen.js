import React from 'react'
import Navbar from '../component/Navbar'
import { kitchenData } from '../data/kitchen'
import { Link } from 'react-router-dom'
const Kitchen = () => {
    return (
        <>
        <Navbar/>
        <div className='page'>
          {
            kitchenData.map((item)=>{
                return(
                    <>
                    <div className='pag'>
                        <Link to={`/kitchen/${item.id}`}>
                        
                        <img src={item.image} />
                        </Link>
                        <div className='pagdata'>
                       {item.category},{item.model},{item.price}
                    </div>
                    </div>
                    
                    </>
                )
            })
          }
           
        </div></>
      )
}

export default Kitchen

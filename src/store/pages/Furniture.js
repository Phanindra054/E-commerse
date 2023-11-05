import React from 'react'
import Navbar from '../component/Navbar'
import { furnitureData } from '../data/furniture'
import { Link } from 'react-router-dom'
const Furniture = () => {
    return (
        <>
        <Navbar/>
        <div className='page'>
          {
            furnitureData.map((item)=>{
                return(
                    <>
                    <div className='pag'>
                        <Link to={`/furniture/${item.id}`}>
                        
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

export default Furniture

import React from 'react'
import Navbar from '../component/Navbar'
import { fridgeData } from '../data/fridge'
import { Link } from 'react-router-dom'
const Fridge = () => {
    return (
        <>
        <Navbar/>
        <div className='page'>
          {
            fridgeData.map((item)=>{
                return(
                    <>
                    <div className='pag'>
                        <Link to={`/fridge/${item.id}`}>
                        
                        <img src={item.image} />
                        </Link>
                        <div className='pagdata'>
                       {item.company},{item.model},{item.price}
                    </div>
                    </div>
                    
                    </>
                )
            })
          }
           
        </div></>
      )
}

export default Fridge

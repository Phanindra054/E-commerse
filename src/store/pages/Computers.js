import React from 'react'
import Navbar from '../component/Navbar'
import { computerData } from '../data/computers'
import { Link } from 'react-router-dom'
const Computers = () => {
   return (
    <>
    <Navbar/>
    <div className='page'>
      {
        computerData.map((item)=>{
            return(
                <>
                <div className='pag'>
                    <Link to={`/computers/${item.id}`}>
                    
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

export default Computers

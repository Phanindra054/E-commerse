import React from 'react'
import Navbar from '../component/Navbar'
import { menData } from '../data/men'
import { Link } from 'react-router-dom'
const Men = () => {
    return (
        <>
        <Navbar/>
        <div className='page'>
          {
            menData.map((item)=>{
                return(
                    <>
                    <div className='pag'>
                        <Link to={`/men/${item.id}`}>
                        
                        <img className='men' src={item.image} />
                        
                        </Link>
                        <div  className='pagdata'>
                       {item.type},{item.model},{item.price}
                    </div>
                    </div>
                    
                    </>
                )
            })
          }
           
        </div></>
      )
}

export default Men

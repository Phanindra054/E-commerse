import React from 'react'
import Navbar from '../component/Navbar'
import { Link } from 'react-router-dom'
import { acData } from '../data/ac'
const Ac = () => {
  return (
    <>
    <Navbar/>
    <div className='page'>
      {
        acData.map((item)=>{
            return(
                <>
                <div className='pag'>
                    <Link to={`/ac/${item.id}`}>
                        <img className='ximg' src={item.image} />
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

export default Ac

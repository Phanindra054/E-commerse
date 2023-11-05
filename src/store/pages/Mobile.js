import React from 'react'
import Navbar from '../component/Navbar'
import { mobileData } from '../data/mobiles'
import { Link } from 'react-router-dom'
const Mobile = () => {
    return (
        <>
        <Navbar/>
        <div className='page'>
          {
            mobileData.map((item)=>{
                return(
                    <>
                    <div className='pag'>
                        <Link to={`/mobile/${item.id}`}>
                        
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

export default Mobile

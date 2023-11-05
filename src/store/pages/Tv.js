import React from 'react'
import Navbar from '../component/Navbar'
import { tvData } from '../data/tv'
import { Link } from 'react-router-dom'
const Tv = () => {
    return (
        <>
        <Navbar/>
        <div className='page'>
          {
            tvData.map((item)=>{
                return(
                    <>
                    <div className='pag'>
                    <Link to={`/tv/${item.id}`}>
                        
                        <img src={item.image} />
                        
                        </Link>
                        <div className='pagdata'>
                       {item.brand},{item.model},{item.price}
                    </div>
                    </div>
                    
                    </>
                )
            })
          }
           
        </div></>
      )
}

export default Tv

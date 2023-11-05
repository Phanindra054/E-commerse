import React from 'react'
import Navbar from '../component/Navbar'
import { watchData } from '../data/watch'
import { Link } from 'react-router-dom'
const Watch = () => {
    return (
        <>
        <Navbar/>
        <div className='page'>
          {
            watchData.map((item)=>{
                return(
                    <>
                    <div className='pag'>
                        <Link to={`/watch/${item.id}`}>
                         
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

export default Watch

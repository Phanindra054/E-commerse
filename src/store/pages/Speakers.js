import React from 'react'
import Navbar from '../component/Navbar'
import { speakerData } from '../data/speaker'
import { Link } from 'react-router-dom'
const Speakers = () => {
    return (
        <>
        <Navbar/>
        <div className='page'>
          {
            speakerData.map((item)=>{
                return(
                    <>
                    <div className='pag'>
                        <Link to={`/speakers/${item.id}`}>
                        
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

export default Speakers

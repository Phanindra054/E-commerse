import React from 'react'
import Navbar from '../component/Navbar'
import { womanData } from '../data/woman'
import { Link } from 'react-router-dom'
const Women = () => {
    return (
        <>
        <Navbar/>
        <div className='page'>
          {
            womanData.map((item)=>{
                return(
                    <>
                    <div className='pag'>
                       <Link to={`/women/${item.id}`}>
                       
                       <img className="men" src={item.image} />
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

export default Women

import React from 'react'
import {furnitureData} from '../data/furniture'
import { Link } from 'react-router-dom'
const Furniture = () => {
    const Firstfive = furnitureData.slice(0,5)
    return (
      <>
      <Link to={`/furniture`}>
      <div className='name'>Furniture</div></Link>
      <div className='section'>
         {
           Firstfive.map((item)=>{
              return(
                     <div className='box'>
                      <Link to={`/furniture/${item.id}`}>
                     <img className='img' src={item.image} alt=""/></Link>
                     </div>
              )
           })
         }
      </div>
      </>
    )
}

export default Furniture

import React from 'react'
import {menData} from '../data/men'
import { Link } from 'react-router-dom'
const Men = () => {
    const Firstfive = menData.slice(0,5)
    return (
      <>
      <Link to={`/men`}>
      <div className='name'>Mens-Wear</div></Link>
      <div className='section'>
         {
           Firstfive.map((item)=>{
              return(
                     <div className='box'>
                      <Link to={`/men/${item.id}`}>
                     <img className='img' src={item.image} alt=""/></Link>
                     </div>
              )
           })
         }
      </div>
      </>
    )
}

export default Men

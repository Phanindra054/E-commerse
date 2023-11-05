import React from 'react'
import {fridgeData} from '../data/fridge'
import { Link } from 'react-router-dom'
const Fridge = () => {
    const Firstfive = fridgeData.slice(0,5)
    return (
      <>
      <Link to={`/fridge`}>
      <div className='name'>Fridge</div></Link>
      <div className='section'>
         {
           Firstfive.map((item)=>{
              return(
                     <div className='box'>
                     <Link to={`/fridge/${item.id}`}>
                     <img className='img' src={item.image} alt=""/></Link>
                     </div>
              )
           })
         }
      </div>
      </>
    )
}

export default Fridge

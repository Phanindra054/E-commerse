import React from 'react'
import {kitchenData} from '../data/kitchen'
import { Link } from 'react-router-dom'
const Kitchen = () => {
    const Firstfive = kitchenData.slice(0,5)
    return (
      <>
      <Link to={`/kitchen`}>
      <div className='name'>Kitchen</div></Link>
      <div className='section'>
         {
           Firstfive.map((item)=>{
              return(
                     <div className='box'>
                      <Link to={`/kitchen/${item.id}`}>
                     <img className='img' src={item.image} alt=""/></Link>
                     </div>
              )
           })
         }
      </div>
      </>
    )
}

export default Kitchen

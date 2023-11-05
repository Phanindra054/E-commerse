import React from 'react'
import {watchData} from '../data/watch'
import { Link } from 'react-router-dom'
const Watch = () => {
    const Firstfive = watchData.slice(0,5)
    return (
      <>
      <Link to={`/watch`}>
      <div className='name'>Watches</div></Link>
      <div className='section'>
         {
           Firstfive.map((item)=>{
              return(
                     <div className='box'>
                      <Link to={`/watch/${item.id}`}>
                     <img className='img' src={item.image} alt=""/></Link>
                     </div>
              )
           })
         }
      </div>
      </>
    )
}

export default Watch

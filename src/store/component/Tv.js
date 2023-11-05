import React from 'react'
import {tvData} from '../data/tv'
import { Link } from 'react-router-dom'
const Tv = () => {
    const Firstfive = tvData.slice(0,5)
    return (
      <>
      <Link to={`/tv`}>
      <div className='name'>Televison</div></Link>
      <div className='section'>
         {
           Firstfive.map((item)=>{
              return(
                     <div className='box'>
                      <Link to={`/tv/${item.id}`}>
                     <img className='img' src={item.image} alt=""/></Link>
                     </div>
              )
           })
         }
      </div>
      </>
    )
}

export default Tv

import React from 'react'
import {acData} from '../data/ac'
import { Link } from 'react-router-dom'
const Ac = () => {
    const Firstfive = acData.slice(0,5)
    return (
      <>
      <Link to={`/ac`}>
      <div className='name'>Ac's</div></Link>
      <div className='section'>
         {
           Firstfive.map((item)=>{
              return(
                     <div className='box'>
                      <Link to={`/ac/${item.id}`}>
                      <img className='img' src={item.image} alt=""/>
                      </Link>
                     </div>
              )
           })
         }
      </div>
      </>
    )
}

export default Ac


import React from 'react'
import {mobileData} from '../data/mobiles'
import { Link } from 'react-router-dom'
const Mobile = () => {
    const Firstfive = mobileData.slice(0,5)
  return (
    <>
    <Link to={`/mobile`}>
      <div className='name'>Mobiles</div></Link>
    <div className='section'>
       {
         Firstfive.map((item)=>{
            return(
                   <div className='box'>
                    <Link to={`/mobile/${item.id}`}>
                     <img className='img' src={item.image} alt=""/></Link>
                   </div>
            )
         })
       }
    </div>
    </>
  )
}

export default Mobile

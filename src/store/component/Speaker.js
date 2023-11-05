import React from 'react'
import {speakerData} from '../data/speaker'
import { Link } from 'react-router-dom'
const Speaker = () => {
    const Firstfive = speakerData.slice(0,5)
    return (
      <>
      <Link to={`/speakers`}>
      <div className='name'>Speakers</div></Link>
      <div className='section'>
         {
           Firstfive.map((item)=>{
              return(
                     <div className='box'>
                      <Link to={`/speakers`}>
                     <img className='img' src={item.image} alt=""/></Link>
                     </div>
              )
           })
         }
      </div>
      </>
    )
}

export default Speaker

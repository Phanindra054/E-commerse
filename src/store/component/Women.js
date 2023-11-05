import React from 'react'
import {womanData} from '../data/woman'
import { Link } from 'react-router-dom'
const Women = () => {
    const Firstfive = womanData.slice(0,5)
    return (
      <>
      <Link to={`/women`}>
      <div className='name'>Women-Wear</div></Link>
      <div className='section'>
         {
           Firstfive.map((item)=>{
              return(
                     <div className='box'>
                      <Link to={`/women/${item.id}`}>
                     <img className='img' src={item.image} alt=""/></Link>
                     </div>
              )
           })
         }
      </div>
      </>
    )
}

export default Women

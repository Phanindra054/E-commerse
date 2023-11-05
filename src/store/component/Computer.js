import React from 'react'
import {computerData} from '../data/computers'
import { Link } from 'react-router-dom'
const Computer = () => {
    const Firstfive = computerData.slice(0,5)
    return (
       <>
       <Link to={`/computers`}>
      <div className='name'>Computer</div></Link>
        <div className='section'>
           {
             Firstfive.map((item)=>{
                return(
                       <div className='box'>
                        <Link to={`/computers/${item.id}`}>
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

export default Computer


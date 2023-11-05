import React from 'react'
import { speakerData } from '../data/speaker'
import { useParams } from 'react-router-dom'
import Navbar from '../component/Navbar'
import { useCart } from '../context/Usecontext'
const Speaker1 = () => {
    const {id} = useParams()
    const {addData,data}= useCart()
    const dat= speakerData.find((x) => x.id === id)
  return (
    <>
    <Navbar/>
    <div className='ParaMain'>
        <img className='ParaImg' src={dat.image} alt="Image"/>
       <div className='Paradata'>
            <h1>{dat.company}</h1>
            <h2>{dat.model}</h2>
            <h2>{dat.product}</h2>
            <h2>{dat.price}</h2>
            <h2>{dat.description}</h2>
       </div>
       <div>
      <button onClick={()=>addData(dat)}  className='ParaBtn'>Add to Cart</button>
    </div>
    </div>
    
    </>
  )
}

export default Speaker1

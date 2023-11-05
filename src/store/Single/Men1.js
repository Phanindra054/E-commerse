import React from 'react'
import { menData } from '../data/men'
import { useParams } from 'react-router-dom'
import Navbar from '../component/Navbar'
import { useCart } from '../context/Usecontext'
const Men1 = () => {
    const {id} = useParams()
    const dat= menData.find((x) => x.id === id)
    const {addData,data}= useCart()
  return (
    <>
    <Navbar/>
    <div className='ParaMain'>
        <img className='ParaImg' src={dat.image} />
       <div className='Paradata'>
            <h1>{dat.brand}</h1>
            <h2>{dat.model}</h2>
            <h2>{dat.product}</h2>
            <h2>{dat.price}</h2>
            <h2>{dat.description}</h2>
       </div>
       <div>
      <button onClick={()=>addData(dat)} className='ParaBtn'>Add to Cart</button>
    </div>
    </div>
    
    </>
  )
}

export default Men1

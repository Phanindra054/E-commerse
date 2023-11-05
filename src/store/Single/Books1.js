import React from 'react'
import { booksData } from '../data/books'
import { useParams } from 'react-router-dom'
import Navbar from '../component/Navbar'
import { useCart } from '../context/Usecontext'
const Books1 = () => {
    const {id} = useParams()
    const dat = booksData.find((x) => x.id === id)
    const {data,addData} =useCart()
  return (
    <>
    <Navbar/>
    <div className='ParaMain'>
        <img className='ParaImg' src={dat.image}/>
       <div className='Paradata'>
            <h1>{dat.author}</h1>
            <h2>{dat.title}</h2>
            <h2>{dat.category}</h2>
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

export default Books1

import React from 'react'
import Navbar from '../component/Navbar'
import { useCart } from '../context/Usecontext'
const Usercart = () => {
    const {data,addData,removeData} = useCart()
    
  return (
    <>
    <Navbar/>
    <div>
       {
          data.map((item)=>{
             return(
                <div className='cart1'>

<>
                
                <div >
                    <img className='cartimg' src={item.image} />
                    
                </div>
                <div className='cartdata'>
                    <h2>{item.product}</h2>
                    <h2>{item.price}</h2>
                    <h2>
                        {item.model}
                    </h2>
                </div>
                <div className='abtn'>
                    <button className='removebtn' onClick={()=>removeData(item)}>Remove</button>
                </div>
                </>

                </div>
             )

          })

       }
    </div>
    </>
  )
}

export default Usercart

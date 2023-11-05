import React from 'react'
import Navbar from '../component/Navbar'

const Signup = () => {
  return (
    <>
    <Navbar/>
    <div  className='yy'>
        <>
        
           <div className='signup'>

           <input className='xx' type="input" placeholder='FirstNane' />
        <br/><input className='xx' type="input" placeholder='FirstNane' /><br/>
        <input className='xx' type="email" placeholder='Email'/><br/>
        <input className='xx' type="password" placeholder='Password'/><br/>
        <input className='xx' type="password" placeholder='Confirm Password' /><br/>
        <button className='sbtn'>Sign Up</button>
           </div>
        </>
    </div>
    </>
  )
}

export default Signup

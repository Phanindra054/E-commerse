import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar'
const Signin = () => {
  
  const [val,setVal]= useState({
    email:'',
    password:'',
  });
  const {email,password} =val
  const chang= e=>{
    setVal({...val,[e.target.name]:[e.target.value]})
  }
  const click=e=>{
    e.preventDefault()
    console.log(val)
  }
  return (
    <>
    <Navbar/>
    <div className='yy'>
        <>
         <div className='signin'>
             <input className='xx'  type="email" value={email} placeholder='Enter your email' onChange={chang} /><br/>
              <input className='xx'  type="password" value={password} placeholder='Password' onChange={chang} /><br/>
            <h2>Dont Have a Account</h2>
            <Link to={`/signup`}>
             <h2>SignUp</h2>
            </Link>
            <button onClick={click} className='sbtn'>Sign In</button>
         </div>
        
        </>
    </div>
    </>
  )
}

export default Signin

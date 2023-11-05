import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/Usecontext'


const Navbar = () => {
  const {data} =useCart()
const [val,setVal]=useState()
const chang =e=>{
  setVal(e.target.value)
}

  return (
    <>
    <div>
      <div className='navbar'>

        <div className='Title'>
            <Link to={`/`}>
            <h1 className='Mainname'>E-Cart</h1></Link>
        </div>

        <div className='search'>
            <input className='search1' value={val} onChange={chang} type="search"/>
            <Link to={`/${val}`}>
            <button className='search2'>Serach</button></Link>
        </div>

        <div className='user'>
        

        <div className='data'>
            <Link to={`/signin`}>
            SignUp/SignIn</Link>
        </div>

        <div className='cart'>
            <Link to={`/cart`}>
               Cart
            </Link>
            <span className='len'>
              {data.length}
            </span>
        </div>

        
        </div>

      </div>
    </div>
    <div className='menu'>
        <ul>
          <Link to={'/ac'}>
          <li>Ac</li>
          </Link>
          <Link to={'/books'}>
          <li>Books</li>
          </Link>
          <Link to={'/computers'}>
          <li>Computers</li>
          </Link>
          <Link to={'/fridge'}>
          <li>Fridge</li>
          </Link>
          <Link to={'/furniture'}>
          <li>Furniture</li>
          </Link>
          <Link to={'/kitchen'}>
          <li>Kitchen</li>
          </Link>
          <Link to={'/men'}>
          
          <li>Men</li>
          </Link>
          <Link to={'/mobile'}>
          <li>Mobiles</li>
          </Link>
          <Link to={'/speakers'}>
          <li>Speakers</li>
          </Link>
          <Link to={'/tv'}>
          <li>TV</li>
          </Link>
          <Link to={'/watch'}>
          <li>Watch</li>
          </Link>
          <Link to={'/women'}>
          <li>Women</li>
          </Link>
        </ul>
    </div>
   </> 
  )
}

export default Navbar

import React from 'react'
import Navbar from '../component/Navbar'
import {booksData} from '../data/books'
import { Link } from 'react-router-dom'
const Books = () => {
    return (
        <>
        <Navbar/>
        <div className='page'>
          {
            booksData.map((item)=>{
                return(
                    <>
                    <div className='pag'>
                        <Link to={`/books/${item.id}`}>
                        <img src={item.image} />
                        </Link>
                        <div className='pagdata'>
                       {item.title},{item.category},{item.price}
                    </div>
                    </div>
                    
                    </>
                )
            })
          }
           
        </div></>
      )
}

export default Books

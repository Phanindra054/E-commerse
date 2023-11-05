import React from 'react'
import LandingPage from './store/pages/LandingPage'
import { Routes,Route } from 'react-router-dom'
import Ac from './store/pages/Ac'
import Books from './store/pages/Books'
import Computers from './store/pages/Computers'
import Fridge from './store/pages/Fridge'
import Furniture from './store/pages/Furniture'
import Kitchen from './store/pages/Kitchen'
import Men from './store/pages/Men'
import Mobile from './store/pages/Mobile'
import Speakers from './store/pages/Speakers'
import Tv from './store/pages/Tv'
import Watch from './store/pages/Watch'
import Women from './store/pages/Women'
import Ac1 from './store/Single/Ac1'
import Books1 from './store/Single/Books1'
import Computer1 from './store/Single/Computer1'
import Fridge1 from './store/Single/Fridge1'
import Furniture1 from './store/Single/Furniture1'
import Kitchen1 from './store/Single/Kitchen1'
import Men1 from './store/Single/Men1'
import Mobil1 from './store/Single/Mobil1'
import Speaker1 from './store/Single/Speaker1'
import Tv1 from './store/Single/Tv1'
import Watch1 from './store/Single/Watch1'
import Women1 from './store/Single/Women1'
import Usercart from './store/Single/Usercart'
import Signin from './store/pages/Signin'
import Signup from './store/pages/Signup'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <LandingPage/> } />
        <Route path='/ac' element={ <Ac/> } />
        <Route path='/books' element={ <Books/> } />
        <Route path='/computers' element={ <Computers/>} />
        <Route path='/fridge' element={<Fridge/>} />
        <Route path='/furniture' element={<Furniture/>} />
        <Route path='/kitchen' element={<Kitchen/>} />
        <Route path='/men' element={<Men/>}/>
        <Route path='/mobile' element={<Mobile/>} />
        <Route path='/speakers' element={<Speakers/>} />
        <Route  path='/tv' element ={<Tv/>} />
        <Route path='/watch' element={<Watch/>} />
        <Route path='/women' element={<Women/>} />
        <Route path='/ac/:id' element={<Ac1/>} />
        <Route path='/books/:id' element={<Books1/>} />
        <Route path='/computers/:id' element={<Computer1/>} />
        <Route path='/fridge/:id' element={<Fridge1/>} />
        <Route path='/furniture/:id' element={<Furniture1/>} />
        <Route path='/kitchen/:id' element={<Kitchen1/>} />
        <Route path='/men/:id' element={<Men1/>}/>
        <Route path='/mobile/:id' element={<Mobil1/>} />
         {/* <Route path='/speakers/:id' element={<Speaker1/>} /> */}
        <Route path='/tv/:id' element={<Tv1/>} />
        <Route path='/watch/:id' element={<Watch1/>} />
        <Route path='/women/:id' element={<Women1/>} />
        <Route path='/cart' element={<Usercart/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </div>
  )
}

export default App


import React from 'react'
import logo from "./Images/logo3.png"
import './Navbar.css'
import { useState } from 'react'
import Modal from './Modal'

export default function Navbar() {

  const[modal,setModal]=useState(false);

  return (
    <div className='nav'>
   
   <li>Home</li>  
    <li>About US</li>
    <li>Contact Us</li>
    
    <button onClick={()=>setModal(true)}>Log In</button>
    
    {modal && <Modal closeModal={setModal}/>}
          
    </div>
  )
}

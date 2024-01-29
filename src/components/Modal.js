

import React, { useState } from 'react'
import './Modal.css'
import { useNavigate } from 'react-router-dom'

export default function Modal({closeModal}) {

    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate=useNavigate()

    async function handleSubmit(e){
        e.preventDefault()
        try{
            const body = { email, password };
            const response = await fetch("http://localhost:5000/login", { // Added 'http://' to the URL
                method: "POST",
                headers: { "Content-Type": "application/json" }, // Fixed the header name
                body: JSON.stringify(body)
            });
            const responseData=await response.json();
            const booleanValue=JSON.parse(responseData)
            console.log(typeof(booleanValue))
            if(booleanValue){
                alert("Log in Sucesfully")
                closeModal(false)
                navigate('/main',{state:{email}})
            }
            else{
                alert("User doesn't exist with this id")
                closeModal(false)
                navigate('/')
            }
            
        }
        catch(err){
            console.log(err)
        }
    }

  return (
    <div className='modalBackground'>
      

      <div className='modalContainer'>
        <div className='titleCloseBtn'>
        <button onClick={()=>closeModal(false)}>X</button>
        </div>
        
        <div className='title'>
        <h1>Login</h1>
    

        </div>
        <div className='body'>
            <div className='input-group'>
            <label >Email</label>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email' />
            </div>
           
            <div className='input-group'>
            <label >Password</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Your Password'/>
            </div>
        </div>
        
        <div className='footer2'>
            <button onClick={()=>closeModal(false)}s id='cancelBtn'>Cancel</button>
            <button onClick={handleSubmit}>Continue</button>
        </div>
        

      </div>


    </div>
  )
}

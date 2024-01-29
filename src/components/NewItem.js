

import React, { useState } from 'react'
import './NewItem.css'

export default function NewItem(props) {

    const[itemName,setItemName]=useState('')
    const[itemCount,setItemCount]=useState('')
    const[description,setDescription]=useState('')
    const email=props.email
    const dataArray = [
        {  product: 'a' },
        {  product: 'b' },
        {  product: 'c' },
        {  product: 'd' },
        {  product: 'e' },
        {  product: 'f' },
        {  product: 'g' },
        {  product: 'h' }
      ];
      
      console.log(dataArray);


      function Check(itemName){

        for(let i=0;i<dataArray.length;i++){
            if(dataArray[i].product==itemName){
                console.log("true")
                handleSubmit();
                return true;
            }
        }
        console.log("false")
        alert("Cannot Add this data")
        return false;

      }
      
    async function handleSubmit(){
        console.log(props.email)
        try{
            const body={email,itemName,itemCount,description}
            const response=await fetch("http://localhost:5000/addData",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(body)
            });
            alert("Added Sucessfully")
            console.log(response)
            if(response.ok){
                const responseData = await response.json();
                console.log(responseData)
                
            }

        }
        catch(err){
            console.log(err)
        }
        props.setChange(p=>!p)
          
        props.close();
    }

  return (
    <div className='outerBox'>
        <div className='innerBox'>
            <button className='cross' onClick={()=>props.close(false)}>X</button>
        <h1 className='heading'>Add Item</h1>
        <div className='add'>
        <div>
        <label >Product</label>
        <input type="text" placeholder='Enter the name of the product'value={itemName} onChange={(e)=>setItemName(e.target.value)} />
        </div>
        <div>
        <label >Quantity</label>
        <input type="number" placeholder='Enter its Quantity'value={itemCount} onChange={(e)=>setItemCount(e.target.value)}/>
        </div>
        <div>
            <label >Description</label>
            <input type="text" placeholder='Enter the description' value={description} onChange={(e)=>setDescription(e.target.value)}  />
        </div>
        </div>
        <div className='footer1'>


            {/* <button onClick={()=>Check(itemName)}>Check</button>
             */}
             
            <button onClick={()=>Check(itemName) && handleSubmit}>Add</button>
            <button onClick={()=>props.close(false)}>Close</button>

        </div>
        </div>
      
    </div>
  )
}

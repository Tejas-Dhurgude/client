
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Main.css'
import NewItem from './NewItem';

export default function Main() {
    const location = useLocation();
    const state = location.state; // Access the state passed from the Modal component
    const[info,setInfo]=useState([])
    const[addItem,setAddItem]=useState(false)
    const[change,setChange]=useState(false)
    
    console.log(state);
    console.log(`localhost:5000/getData/${state.email}`)

    

    function newItem(){
      setAddItem(true)
    }

    async function handleIncreament(id){
      // e.preventDefault()
      try{
        const response=await fetch(
          `http://localhost:5000/updateInfoAdd/${id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            
          }
        )
        if (response.ok) {
          // Update the item count locally in the info array
          const updatedInfo = info.map(item => {
            if (item._id === id) {
              // Increment the itemCount
              return { ...item, itemCount: item.itemCount + 1 };
            }
            return item;
          });
    
          // Update the state with the updated info array
          setInfo(updatedInfo);
        } else {
          console.log('Increment failed');
        }
      }
      catch(err){
        console.log(err)
      }
      
    }

    async function handleDelete(id){

      try{
        const deleteItem=await fetch(`http://localhost:5000/infoDelete/${id}`,{
          method:"DELETE"
        })
        setInfo(info.filter(prev=>info._id!=id))
        setChange(p=>!p)
          
      }
      catch(err){
        console.log(err)
      }
    }


    async function handleDecreament(id){
      // e.preventDefault()
      try{
        const response=await fetch(
          `http://localhost:5000/updateInfoSubstract/${id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            
          }
        )
        if (response.ok) {
          // Update the item count locally in the info array
          const updatedInfo = info.map(item => {
            if (item._id === id) {
              // Increment the itemCount
              return { ...item, itemCount: item.itemCount - 1 };
            }
            return item;
          });
    
          // Update the state with the updated info array
          setInfo(updatedInfo);
          
        } else {
          console.log('Increment failed');
        }
      }
      catch(err){
        console.log(err)
      }
      
    }

    const showInfo = async () => {
      try {
          const response = await fetch(`http://localhost:5000/getData/${state.email}`); // Add http://
          const jsonData = await response.json();
          setInfo(jsonData)
          
          console.log(jsonData);
      } catch (err) {
          console.log(err);
      }
  };
  
    useEffect(()=>{
      showInfo()
    },[change]);
const[query,setQuery]=useState('')
    return (
        <div>
          {/* <div className="search">
            <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)}/>
          </div>
           */}
            <center>
                <h1 className='title1'>Stock Anaysis</h1>
            </center>
            <table>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Product:</th>
                  <th>Count:</th>
                  <th>Increament</th>
                  <th>Decreament</th>
                  <th>Delete</th>
                </tr>
              </thead>
            <tbody>
              {
                // info.filter((p)=>p.itemName.toLowerCase().includes("a"))
                // info
                //   .filter((item) => query !== "" ? item.itemName.toLowerCase().includes(query.toLowerCase()) : true)

              
                info.map(d=>(
                  <tr key={d._id}>
                    <td>{d.description}</td>
                    <td>{d.itemName}</td>
                    <td>{d.itemCount}</td>
                    <td><button className='incre-btn' onClick={()=>handleIncreament(d._id)}>+</button></td>
                    <td><button className='decre-btn' onClick={()=>handleDecreament(d._id)}>-</button></td>
                    <td><button className='del-btn'onClick={()=>handleDelete(d._id)}>Delete</button></td>
                  </tr>
                ))
              }
              
            </tbody>
            </table>
            <button className="footer" onClick={newItem}>
              Add Item
            </button>
            {addItem && <NewItem close={setAddItem} email={state.email} setAddItem={setAddItem} addItem={addItem} setChange={setChange}/>}
        </div>

    );
}

import React, {useState, forwardRef, useImperativeHandle} from 'react'
import "./navbar.css"


const Navbar = (props, ref) => {
  useImperativeHandle(ref, ()=>{
    return {accessWord:()=>{return search }}
  })
  
 const[search, setSearch]=useState("")

 
  return (
    <>
    <div className='nav'>
        <ul>
            <li className='logo'>PICKY PIE DICTIONARY</li>
        </ul>
        <input onChange={(e)=>{setSearch(e.target.value)}} className='input' type="text" required placeholder='word'/>
    </div>
    
    </>
  )
}

export default forwardRef(Navbar)
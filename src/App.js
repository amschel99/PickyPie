import React, {useRef, useEffect, createContext } from 'react'
import "./index.css"
import Navbar from './navbar/Navbar'
import Display from "./display/Display"

export const AppContext= createContext()

const App = () => {
 
   const API_KEY = process.env.REACT_APP_API_KEY  
   const word=useRef(null)
   const [stateWord, setStateWord]=React.useState("")
   const[ definition, setDefinition]=React.useState("")
   const[ synonyms, setSynonyms]=React.useState([])
   const[type, setType]=React.useState("")
   const[error, setError]=React.useState(false)
   const[err, setErr]=React.useState("")
   useEffect( ()=>{

    const fethData= async ()=>{
      try{
const response= await fetch(`https://www.dictionaryapi.com/api/v3/references/ithesaurus/json/${stateWord}?key=${API_KEY}`)
       const data= await response.json()
       if(!response){
         return <h6>We cannot find the word, try another one</h6>
       }
      setDefinition(data[0].shortdef[0])
    setSynonyms(data[0].meta.syns[0])
    setType(data[0].fl)
    
      }
      catch(err){
setError(true)
setErr(err)
      }
       
    }
      fethData()
   
   
   },[stateWord])
  
  
  console.log(type,definition, synonyms)
  return (
   <>
    
    <AppContext.Provider value={{type, stateWord,definition,synonyms,error}}>
      <button onClick={()=>{ setStateWord(word.current.accessWord() )
    
   
} 

}>Search</button>
        <Navbar ref={word} />
    


<Display/>
    </AppContext.Provider>
    </>
  )
}

export default App
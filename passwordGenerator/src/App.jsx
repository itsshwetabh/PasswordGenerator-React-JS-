import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import './App.css'
function App(){

  const [Value,setValue] = useState(5)
  const [isNumber, setisNumber] = useState(false)
  const [SpecialChar, setSpecialChar] = useState(false)
  const [Password, setPassword] = useState("")
  function generatePassword(){
      let s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      if(isNumber)
      s+="0123456789"
      if(SpecialChar)
      s+="~!@#$%^&*()_+"
      let pass=""
      for(let i=0; i<Value;i++)
      pass+=s[Math.floor(Math.random()*s.length)]
      
      setPassword(pass)


  }
  useEffect(()=>{
    generatePassword()
  },[Value,isNumber,SpecialChar])
  return(
    <>
    <h1>Welcome to the Password Generator</h1>
    <h2 style={{textAlign:"center"}}>{Password}</h2>

    <div className='content'>
    <div>
    <input type="range" min={5} max={30} onChange={(e)=>{setValue(e.target.value)} } defaultValue={Value}/>({Value})
    
    </div>
    <div>
    <input id="specialchar" type="checkbox" onChange={()=>{
      setSpecialChar(!SpecialChar)
    }}/>
    <label for="specialchar">specialChar</label>
    </div>

    <div>
    <input id="number" type="checkbox" onChange={()=>{
      setisNumber(!isNumber)
    }}/>
    <label for="number">Number</label>
    </div>
    
    
    </div>
    
    </>
    
  )
}
export default App;
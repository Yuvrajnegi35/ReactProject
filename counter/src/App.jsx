import { useState } from 'react'
import './App.css'

function App() {
 const [counter,setcounter]=useState(0);
 
const addvalue= () =>setcounter((counter) => counter+1);

  const removevalue=() =>{

    if(counter>0) {
    setcounter((counter) =>counter-1);
    } else {
      setcounter(() => 0);
    }
  }

  return (
    <>
    <h1 className='font-bold'>Counter</h1>
    <h2 className='text-3xl font-bold m-10' >count= {counter}</h2>
    <button className='m-10 p-1.5 gap-4 w-[150px]'  onClickCapture={addvalue}>Add Value</button>
    <button className='m-10 p-1.5 gap-4 w-[150px]' onClick={removevalue}>remove Value</button>
    </>
  )
}

export default App

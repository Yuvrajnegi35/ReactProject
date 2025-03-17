import { useState } from "react"



function App() {
 
const [color,setColor]=useState("black")

  return (
  
     <div className="h-[100vh] w-[100vw] flex justify-center items-end pb-20 gap-8" style={{backgroundColor: color}}>
  
     <button className="border-2 w-[80px] rounded-2xl bg-blue-500 text-white" onClick={() => setColor("blue")} >Blue</button>
     <button className="border-2 w-[80px] rounded-2xl bg-violet-500 text-white"onClick={() => setColor("violet")} >Voilet</button>
     <button className="border-2 w-[80px] rounded-2xl bg-green-500 text-white" onClick={() => setColor("green")}>Green</button>
     <button className="border-2 w-[80px] rounded-2xl bg-red-500 text-white" onClick={() => setColor("red")} >Red</button>
     <button className="border-2 w-[80px] rounded-2xl bg-sky-400 text-white"  onClick={() => setColor("skyblue")}>SkyBlue</button>
     <button className="border-2 w-[80px] rounded-2xl bg-pink-400 text-white" onClick={() => setColor("pink")}>Pink</button>
     <button className="border-2 w-[90px] rounded-2xl bg-orange-400 text-white" onClick={() => setColor("orange")}>Orange</button>
     <button className="border-2 w-[80px] rounded-2xl bg-purple-500 text-white" onClick={() => setColor("purple")}>Purple</button>
     <button className="border-2 w-[80px] rounded-2xl bg-gray-500 text-white" onClick={() => setColor("gray")}>Gray</button>
     <button className="border-2 w-[80px] rounded-2xl bg-yellow-400 text-white" onClick={() => setColor("yellow")}>Yellow</button>
     <button className="border-2 w-[80px] rounded-2xl bg-rose-600 text-white" onClick={() => setColor("#E11D48")}>Rose</button>
 
     
     </div>
     


  )
}

export default App

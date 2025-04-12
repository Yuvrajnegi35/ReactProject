import { useState, useCallback,useEffect,useRef } from 'react'


function App() {
  const [length,setLength] =useState(8)
  const [numberallowed,setNumberallowed]=useState(false)
  const [charallowed,setCharallowed]=useState(false)
  const [password, setPassword] = useState("")
  
  const passref=useRef(null)
  const passwordgenrator=useCallback(()=> {

    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed) str+="0123456789";
    if(charallowed) str+="!@~#$%^&*()_+=:<>?:"

    for(let i=0;i<=length;i++) {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char);
    }

    setPassword(pass)
  },[length,numberallowed,charallowed,setPassword] )

  const copyPasswordToClipboard = useCallback(() => {
    passref.current?.select();
    passref.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  

  useEffect(() =>{
    passwordgenrator()
  },[length,numberallowed,charallowed,passwordgenrator])

  return (
    <>
      <div className='w-[100vw] h-[100vh] bg-black flex items-center justify-center'>

        <div className='w-[500px] bg-gray-500 h-[250px] '>
          <h1 className='text-3xl font-bold text-white text-center'>Password Genrator</h1>

          <div >
            <input
              type="text"
              value={password}
              className="outline-none w-[430px] py-1 px-3 m-1 bg-white rounded-xl"
              placeholder="Password"
              readOnly
              ref={passref}

            />
            <button
              onClick={copyPasswordToClipboard}
              className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0 rounded-xl hover:bg-purple-400'
            >copy</button>

          </div>

          <div className='flex text-xl gap-x-2 mt-10 text-white'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={15}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberallowed}
          id="numberInput"
          onChange={() => {
              setNumberallowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charallowed}
              id="characterInput"
              onChange={() => {
                  setCharallowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
      </div>
        </div>

      </div>
    </>
  )
}

export default App

import React from 'react'
import useTheme from '../context/theme'

function Themebtn() {
    const {themeMode,lightTheme,darkTheme}=useTheme()
     const onChangeBtn= (e) =>{
         const btnstatus= e.currentTarget.checked
         if(btnstatus) {
            darkTheme()
         } else{
            lightTheme()
         }
     }
  return (
    <label className="relative inline-flex items-center cursor-pointer">
    <input
        type="checkbox"
        value=""
        
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode=== "dark"}
    />
    <div ><img src="https://cdn-icons-png.flaticon.com/512/12301/12301351.png" alt="icon" className='h-[40px]'/></div>

</label>
  )
}

export default Themebtn
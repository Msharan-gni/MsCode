import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'

const Nav = () => {
 
  
  let [isHover,setHover]=useState(false)
  let [isHover1,setHover1]=useState(false)


  
    //  let visible=useSelector((state)=>{ return state.change.value})
   let visible=useSelector(state=>state.change.value)
     
    //  console.log(visible);
     

        



  let handleHover=()=>{
    setHover(true)
  }
   let handleLeave=()=>{
    setHover(false)
  }

  let handleHover1=()=>{
    setHover1(true)
  }
   let handleLeave1=()=>{
    setHover1(false)
  }


    
  return (
    <div className='h-[100px]' >
    <div  className='flex flex-col list-none justify-center items-center h-[60px] bg-[#f1f1f1] w-[100%]'>
        <div className='flex list-none justify-between w-[70%] h-[30px]'>
           

           <li > <NavLink to="/">Logo</NavLink></li>
           <li><NavLink to="/adminReg">Home</NavLink></li>


           <ol onMouseOver={handleHover} onMouseLeave={handleLeave} className='w-[60px] '>Register
                <div className='flex flex-col   w-[150px] h-[90px] ml-0' style={{display:isHover?'block':'none'}}>
                
                <div className=' list-none  flex flex-col justify-center items-center  w-[180px] h-[150px]  '>
                           <div className='w-[82%] h-[80%] bg-[#333333] text-[#c5c5c5] rounded '>
                             <li className='ml-4 mt-6'><NavLink to="/adminReg">AdminRegister</NavLink></li>
                             <li className='ml-4 mt-2'><NavLink to="/studentReg">StudentRegister</NavLink></li> 
                         </div>
                   </div>
                 </div>
          
          
          
           </ol>





           <ol onMouseOver={handleHover1} onMouseLeave={handleLeave1} className='w-[60px]'  style={{display:visible?'block':'none'}}  ><NavLink to="/adminReg" >Login</NavLink>
                                <div className='flex flex-col   w-[150px] h-[90px] ml-0' style={{display:isHover1?'block':'none'}}>
                
                <div className=' list-none  flex flex-col justify-center items-center  w-[180px] h-[150px] '>
                           <div className='w-[82%] h-[80%] bg-[#333333] text-[#c5c5c5] rounded '>
                             <li className='ml-4 mt-6'><NavLink to="/adminLogin">AdminLogin</NavLink></li>
                             <li className='ml-4 mt-2'><NavLink to="/studLogin">StudentLogin</NavLink></li> 
                         </div>
                   </div>
                 </div>



           </ol>
                     


             
            



     
        </div>
         
        </div>
        
        
            

               
 


             



    </div>
  )
}

export default Nav

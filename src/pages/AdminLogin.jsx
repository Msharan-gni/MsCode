import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const AdminLogin = () => {


    let navigate=useNavigate();
    let [adminLog,setData]=useState({
           
            email:"",
            password:""
    
    
    
         })
    
    
         let handleLogin=(e)=>{

              e.preventDefault();
            let data=fetch("http://localhost:8080/adminLogin",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(adminLog)
        
        
                })
        
            // console.log(data);
            data.then((response)=>{
                
                return response.json();
    
    
            }).then(result=>{console.log(result);
    
                localStorage.setItem("fname",result.data.fname);
                              navigate("/adminCourses")
()
            })
               
            
    
         }
    
    
  return (
    <div className='flex flex-col justify-center items-center h-[500px]'>
    <div className='flex flex-col '>
        <p className='text-center '>AdminLogin</p>
<form action="" onSubmit={handleLogin} className='flex flex-col mt-4 '>

<input type="text" required name='email' onChange={e=>{setData({...adminLog,[e.target.name]:e.target.value})}}  className='w-[300px] h-[35px] bg-[#f1f1f1] rounded'    placeholder='enter email' />
<input type="text" required name='password'  onChange={e=>{setData({...adminLog,[e.target.name]:e.target.value})}}  className='w-[300px]  h-[35px] mt-6 bg-[#f1f1f1] rounded'    placeholder='enter password' />
<button className='w-[300px] mt-7 bg-[#444444] text-white h-[35px] rounded' >Login</button> 




</form>
</div>






      
    </div>
  )
}

export default AdminLogin




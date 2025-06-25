
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminRegister = () => {
  
          let navigate=useNavigate();

      let handleLogin=()=>{

         navigate("/adminLogin")


      }






    let [admin,setAdmin]=useState(
          {
              fname:"",
              lname:"",
              email:"",
              password:"",
              address:"",
              mobileNumber:""
          }
        );

        let handleSubmit=(e)=>{
            e.preventDefault();
    
      
              let data=fetch("http://localhost:8080/saveAdmin",{
              method:"POST",
              headers:{
                  "Content-Type":"application/json"
              },
              body:JSON.stringify(admin)
      
      
              })
      
          console.log(data);

         
          
          
      
         }








  return (
    <div>AdminRegister
      


      <form action="" onSubmit={handleSubmit} className='flex flex-col p-[10px] m-auto w[300px]'>


            <input type="text" required name='fname' value={admin.fname}  onChange={e=>{setAdmin({...admin,[e.target.name]:e.target.value})}} placeholder='enter first name'  className='w-[300px] h-[40px] mt-[10px] rounded border-2'/>
            <input type="text" required name='lname' value={admin.lname} onChange={e=>{setAdmin({...admin,[e.target.name]:e.target.value})}} placeholder='enter last name'  className='w-[300px] h-[40px] mt-[10px] rounded border-2'/>
            <input type="email" required  name='email' value={admin.email} onChange={e=>{setAdmin({...admin,[e.target.name]:e.target.value})}} placeholder='enter email'  className='w-[300px] h-[40px] mt-[10px] rounded border-2'/>
            <input type="password" required name='password' value={admin.password} onChange={e=>{setAdmin({...admin,[e.target.name]:e.target.value})}} placeholder='enter password' className='w-[300px] h-[40px] mt-[10px] rounded border-2'  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"     />
            <input type="text" required name='address' value={admin.address} onChange={e=>{setAdmin({...admin,[e.target.name]:e.target.value})}} placeholder='enter adress' className='w-[300px] h-[40px] mt-[10px] rounded border-2'/>
            <input type="tel" required name='mobileNumber' value={admin.mobileNumber} onChange={e=>{setAdmin({...admin,[e.target.name]:e.target.value})}} placeholder='enter phone' className='w-[300px] h-[40px] mt-[10px] rounded border-2'/>

            <button className='w-[300px]  mt-[10px] rounded bg-[#444444] text-white h-[40px]'>Submit</button>

            <button className='w-[300px]  mt-[10px] rounded bg-[#444444] text-white h-[40px] text-[15px]' onClick={handleLogin}>Already Having an Account ?</button>











    </form>








    </div>
  )
}

export default AdminRegister

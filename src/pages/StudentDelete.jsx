import React, { useState } from 'react'

const StudentDelete = () => {


      let id=localStorage.getItem("id");
      let fname=localStorage.getItem("fname");
      let lname=localStorage.getItem("lname");
      let email=localStorage.getItem("email");
      let address=localStorage.getItem("address");
      let password=localStorage.getItem("password");
      let mobileNumber=localStorage.getItem("mobileNumber");
  
  
       
       
       
       
          let handleDelete=(e)=>{

             e.preventDefault();
                  

              
       
       
          }
  
  
    return (
      <div><br />
          
            <div className='flex flex-col list-none w-[550px] justify-center items-center'>

            <div >
              
              <div className='flex justify-between  '><li className='w-[150px]'>Id</li><li className='w-[350px]'>{id}</li></div>
              <div className='flex justify-between '><li className='w-[150px]'>fname</li> <li className='w-[350px]' >{fname}</li></div>
              <div className='flex justify-between '><li className='w-[150px]'>lname</li> <li className='w-[350px]'>{lname}</li></div>
              <div className='flex justify-between  '><li className='w-[150px]'>email</li> <li className='w-[350px]'>{email}</li></div>
              <div className='flex justify-between '><li className='w-[150px]'>address</li> <li className='w-[350px]'>{address}</li></div>
              <div className='flex justify-between  '><li className='w-[150px]'>password</li> <li className='w-[350px]'>{password}</li></div>
              <div className='flex justify-between  '><li className='w-[150px]'>mobileNumber</li> <li className='w-[350px]'>{mobileNumber}</li></div>
              
              <div className='flex justify-between mt-2'>
                
              <li className='w-[350px]'><button className='bg-[#444444] text-white' onClick={handleDelete}>Delete</button>  </li>  
              

              </div>
                



            </div>





         </div>
        
  
  
      </div>
    )
}

export default StudentDelete


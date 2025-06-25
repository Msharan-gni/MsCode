
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'


const StudentRegister = (props) => {

    // const axios = require('axios');

 
    
    let [state,setState]=useState(
      {
          fname:"",
          lname:"",
          email:"",
          password:"",
          address:"",
          mobileNumber:""
      }
    );
    
    let navigate=useNavigate();
    let location=useLocation();

   let handleSubmit=(e)=>{
      e.preventDefault();
    //  console.log(state);

        let x=fetch("http://localhost:8080/save",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(state)


        })

    console.log(x);
    alert("Registered");

   }
   
   let handleSubmit1=(e)=>{
    
       e.preventDefault();
       const data=  axios.post('http://localhost:8080/save',state)
       console.log(data);
       

   }








   let handleLogin=(e)=>{
    
     e.preventDefault();
     navigate("/studLogin")

   }


  return (
    <div>StudentRegister


        <form action="" onSubmit={handleSubmit1} className='flex flex-col p-[10px] m-auto w[300px]'>


    <input type="text" required name='fname' value={state.fname}  onChange={e=>{setState({...state,[e.target.name]:e.target.value})}} placeholder='enter first name'  className='w-[300px] h-[40px] mt-[10px] rounded border-2'/>
    <input type="text" required name='lname' value={state.lname} onChange={e=>{setState({...state,[e.target.name]:e.target.value})}} placeholder='enter last name'  className='w-[300px] h-[40px] mt-[10px] rounded border-2'/>
    <input type="email" required name='email' value={state.email} onChange={e=>{setState({...state,[e.target.name]:e.target.value})}} placeholder='enter email'  className='w-[300px] h-[40px] mt-[10px] rounded border-2'/>
    <input type="password" required name='password' value={state.password} onChange={e=>{setState({...state,[e.target.name]:e.target.value})}} placeholder='enter password' className='w-[300px] h-[40px] mt-[10px] rounded border-2'  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"     />
    <input type="text" required name='address' value={state.address} onChange={e=>{setState({...state,[e.target.name]:e.target.value})}} placeholder='enter adress' className='w-[300px] h-[40px] mt-[10px] rounded border-2'/>
    <input type="tel" required name='mobileNumber' value={state.mobileNumber} onChange={e=>{setState({...state,[e.target.name]:e.target.value})}} placeholder='enter phone' className='w-[300px] h-[40px] mt-[10px] rounded border-2'/>
    
    <button className='w-[300px]  mt-[10px] rounded bg-[#444444] text-white h-[40px]'>SignIn</button>
    <button className='w-[300px]  mt-[10px] rounded bg-[#444444] text-white h-[40px]' onClick={handleLogin}>Login</button>
       









        </form>


      
    </div>
  )
}

export default StudentRegister

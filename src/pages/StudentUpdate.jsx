
import React, { useState } from 'react'

const StudentUpdate = () => {


    let id1=localStorage.getItem("id");
    let fname1=localStorage.getItem("fname");
    let lname1=localStorage.getItem("lname");
    let email1=localStorage.getItem("email");
    let address1=localStorage.getItem("address");
    let password1=localStorage.getItem("password");
    let mobileNumber1=localStorage.getItem("mobileNumber");


     let [state,setState]=useState(
           {
               id:id1,
               fname:fname1,
               lname:lname1,
               email:email1,
               password:password1,
               address:address1,
               mobileNumber:mobileNumber1
           }
         );
     
     
     
        let handleSubmit=(e)=>{
           e.preventDefault();
         //  console.log(state);
     
             let x=fetch("http://localhost:8080/update",{
             method:"PUT",
             headers:{
                 "Content-Type":"application/json"
             },
             body:JSON.stringify(state)
     
     
             })
     
         console.log(x);
         alert("Updated");
     
        }


  return (
    <div>
        

        <form action="" onSubmit={handleSubmit} className='flex flex-col p-[10px] m-auto w[300px]'>


    <input type="text" required name='fname' value={state.fname}  onChange={e=>{setState({...state,[e.target.name]:e.target.value})}} placeholder='enter first name'  className='w-[300px] h-[40px] mt-[10px] rounded border-2'/>
    <input type="text" required name='lname' value={state.lname} onChange={e=>{setState({...state,[e.target.name]:e.target.value})}} placeholder='enter last name'  className='w-[300px] h-[40px] mt-[10px] rounded border-2'/>
    <input type="email" required name='email' value={state.email} onChange={e=>{setState({...state,[e.target.name]:e.target.value})}} placeholder='enter email'  className='w-[300px] h-[40px] mt-[10px] rounded border-2'/>
    <input type="password" required name='password' value={state.password} onChange={e=>{setState({...state,[e.target.name]:e.target.value})}} placeholder='enter password' className='w-[300px] h-[40px] mt-[10px] rounded border-2'  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"     />
    <input type="text" required name='address' value={state.address} onChange={e=>{setState({...state,[e.target.name]:e.target.value})}} placeholder='enter adress' className='w-[300px] h-[40px] mt-[10px] rounded border-2'/>
    <input type="tel" required name='mobileNumber' value={state.mobileNumber} onChange={e=>{setState({...state,[e.target.name]:e.target.value})}} placeholder='enter phone' className='w-[300px] h-[40px] mt-[10px] rounded border-2'/>
    
    <button className='w-[300px]  mt-[10px] rounded bg-[#444444] text-white h-[40px]'>Update</button>
       









        </form>









    </div>
  )
}

export default StudentUpdate

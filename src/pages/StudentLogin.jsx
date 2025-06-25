
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { visibleOff } from '../redux/global/visibleSlice'

const StudentLogin = (props) => {
      
    //  console.log(props.val);
    //   let x=props.val;

     let [loginData,setData]=useState({
       
        email:"",
        password:""



     })

     let navigate=useNavigate();
     let dispatch=useDispatch()






     let handleLogin=(e)=>{
           e.preventDefault();

        let data=fetch("http://localhost:8080/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(loginData)
    
    
            })
    
           
        // console.log(data);
        data.then((response)=>{
            
            return response.json();


        }).then(result=>{
            
            
            console.log(result);
            localStorage.clear();
            localStorage.setItem("id",result.data.id);
            localStorage.setItem("fname",result.data.fname);
            localStorage.setItem("lname",result.data.lname);
            localStorage.setItem("email",result.data.email);
            localStorage.setItem("address",result.data.address);
            localStorage.setItem("password",result.data.password);
            localStorage.setItem("mobileNumber",result.data.mobileNumber);
           

         
              dispatch(visibleOff())
              navigate("/")
              toast.success("Login Succesfull")
           
          



        })
           
        
           
            
             
              
              



     }






  return (
    <div>




               <div className='flex flex-col justify-center items-center h-[500px] '>
               <div className='flex flex-col justify-center items-center bg-[#f6d7ff] w-[400px] h-[300px] rounded-[12px] shadow-xl ...'>
               <p className='text-center '></p>
              <form action="" onSubmit={handleLogin} className='flex flex-col mt-4 '>

              <input type="text" required name='email' onChange={e=>{setData({...loginData,[e.target.name]:e.target.value})}}  className='w-[300px] h-[42px] bg-[#f1beff] rounded-[12px]'    placeholder='Email' />
              <input type="text" required name='password'  onChange={e=>{setData({...loginData,[e.target.name]:e.target.value})}}  className='w-[300px]  h-[42px] mt-4 bg-[#f1beff] rounded-[12px]'    placeholder='Password' />
              <button className='w-[150px] mt-7 ml-17 bg-[#8300bb] text-[#fea6e5] font-[500] text-[18px] h-[45px] rounded-[25px] shadow-xl ...' >Login</button>   




        </form>
        </div> </div>


    </div>
  )
}

export default StudentLogin

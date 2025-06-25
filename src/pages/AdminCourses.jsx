import axios from 'axios';
import React, { useState } from 'react'

const AdminCourses = () => {


    let [info,setInfo]=useState({

        name:"",
        cost:"",
        duration:""


    });


    let handleInfo=(e)=>{

        e.preventDefault();
    
        setInfo({...info,[e.target.name]:e.target.value})
 
       }
    let handleSubmit=async (e)=>{

         e.preventDefault();
         console.log(info);

         let saveCourse=await axios.post("http://localhost:8080/saveCourse",[info])    
         console.log(saveCourse);
         
         
    }
        
    





  return (
    <div>


        <form action="">
                   
                   <div className='flex flex-col justify-center items-center w-[350px] h-[300px] bg-[#f1f1f1] rounded-[10px]'>
                    <div className='flex flex-col w-[300px] h-[200px] rounded'> 
                  <input type="text" name="name" id=""  placeholder='Enter Course Name' onChange={handleInfo} className='h-[40px] bg-[white] rounded border-[1px]'  />
                  <input type="text" name="cost" id=""  placeholder='Enter cost '  onChange={handleInfo} className='mt-2 h-[40px] bg-[white] rounded  border-[1px]'/>
                  <input type="text" name="duration" id=""  placeholder='Enter duration'  onChange={handleInfo} className='mt-2 h-[40px] bg-[white] rounded  border-[1px]'/>
                  <button onClick={handleSubmit} className='bg-[#333333] text-[white] w-[100px] h-[30px] rounded mt-6'>Add Course</button> 

                  </div>
                  </div>
                   
        </form>








    </div>
  )
}

export default AdminCourses

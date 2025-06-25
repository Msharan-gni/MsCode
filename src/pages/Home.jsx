
import React from 'react'
import Nav from './Nav';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../redux/global/counterSlice';
import StudentDetails from './StudentDetails';
import GetCourses from './GetCourses';
import UploadImage from './UploadImage';


const Home = () => {


       let navigate=useNavigate()
    
      let count=useSelector(state=>state.counter.value)
      let disptch=useDispatch();






    let id=localStorage.getItem("id");
    let fname=localStorage.getItem("fname");
    let lname=localStorage.getItem("lname");
    let email=localStorage.getItem("email");
    let address=localStorage.getItem("address");
    let password=localStorage.getItem("password");
    let mobileNumber=localStorage.getItem("mobileNumber");



    let handleEdit=()=>{
       
       
         navigate("/studUpdate")


    }


    let handleDelete=()=>{
       
      
       navigate("/studDelete")


    }
    
    
  return (


   
    <div> 

        <Nav></Nav>
          

          {/* <h1>{count}</h1> */}
          {/* <button onClick={()=>{disptch(increment())}}>+</button> */}
            
            <StudentDetails/>
            <UploadImage/>
            <br />
            <GetCourses/>

         

      
    </div>
  )
}

export default Home

import { useState } from 'react'
import './App.css'
import StudentRegister from './pages/StudentRegister'
import StudentLogin from './pages/StudentLogin'
import AdminRegister from './pages/AdminRegister'
import AdminLogin from './pages/AdminLogin'
import Home from './pages/Home'
import StudentUpdate from './pages/StudentUpdate'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import StudentDelete from './pages/StudentDelete'
import AdminCourses from './pages/AdminCourses'
import Anime from './pages/Anime'
import AnmStructr from './pages/AnmStructr'


function App() {
  let[visible,setVisible]=useState(true)

  return (
    <>
     
     {/* <StudentRegister/> */}

     {/* <StudentLogin/> */}

     {/* <AdminRegister/> */}


     {/* <AdminLogin/> */}

     {/* <Home/> */}
     {/* <StudentUpdate/> */}

      
       

       {/* <BrowserRouter>
       <ToastContainer/>
       <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/adminReg' element={<AdminRegister/>} />
           <Route path='/studentReg' element={<StudentRegister />}/>
           <Route path='/adminLogin' element={<AdminLogin/>}/>
           <Route path='/studLogin' element={<StudentLogin />}/>
            <Route path='/studUpdate' element={<StudentUpdate />}/>
            <Route path='/studDelete' element={<StudentDelete />}/>
             <Route path='/adminCourses' element={<AdminCourses />}/>




       </Routes>
       
       </BrowserRouter> */}






     {/* <Anime/> */}

     <AnmStructr/>



    </>
  )
}

export default App

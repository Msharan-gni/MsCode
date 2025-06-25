import React, { Fragment, useState } from 'react'
import axios from 'axios';
import RemoveCourses from './RemoveCourses';
const GetCourses = () => {
          
          let sid=localStorage.getItem("id");
          //  let arr=[]
          
          //  let map={}

          //  let[map,setMap]=useState({})

        //  let sid=4;
         let myStyle1={

                backgroundColor:'#444444',
                color:"#e6e6e6"


          }
          let myStyle2={

                backgroundColor:'white',
                color:"#444444"


          }

          let [list] =useState(()=>new Set())



          let[arr,setArr]=useState(new Set())
          let[remv,setRmv]=useState(new Set())
  
         
          
          
           console.log(remv);

          
         


          let[visible,setVisible]=useState([true,false])
          let[allCourses,setCourses]=useState([])

     

         let[alrd,setAded]=useState(new Set()) // you cant change it i.e re asign new  value
       
        //  let[newadedCourses]=useState(()=>adddedCourses)
        
         

           let handleGetCourses= async (e)=>{
             e.preventDefault();
             
             let courses=await axios.get("http://localhost:8080/getAllCourses") // wait for result that may be reject or resolve 
             
             let shwData=await hndleShowCourses()
             console.log(shwData.data);
             let ndt=shwData.data
          
             
              
              setCourses(courses.data);
             
              setAded(new Set([...ndt]));
              console.log(alrd);

             
           }


           let handleAddCourse=async (e,cid)=>{

                   e.preventDefault();
                   
                    !arr.has(cid)?(()=>{
                       
                       !visible[0]&&visible[1]?
                        
                         setRmv(new Set([...remv,cid])):
                         setArr(new Set([...arr,cid])); 


                    })()
                    
                    
                    
                    
                    
                    :(()=>{
                       let dlt=arr
                       dlt.delete(cid)
                       setArr(new Set([...dlt])); 

                    })()
                 


                    


           }
            
            
           


           let handleRemoveCourse= async (e,cid,ind)=>{

                   e.preventDefault();
                    let y=arr
                    y.delete(ind)
                    list.delete(cid)
                    console.log(list);
                     
                    setArr(new Set([...y]));
                     
     
           }

           let handleSubmitAll=async ()=>{
              let nrr=[...arr]
             
              try{
               let save=await axios.post(`http://localhost:8080/saveListOfCorses/${sid}`,nrr);
              }
              catch(err){

                console.log(err);                  
                
              }
              
                setAded(save.data.course)
                
                
              

           }


           let hndleShowCourses=async ()=>{
               
              
              let getData=await axios.get(`http://localhost:8080/fetchCourses/${sid}`);
              return getData;
             
             
           }

          
           
      let hndleAvlbl=()=>{
           setVisible([false,false])
      }
      let  handleEnrld=()=>{
            setVisible([false,true])
        }

        let hndleAll=()=>{
           setVisible([true,false])
      }
  return (
      


    <div className=' flex shadow-xl ...'>
          



         <button onClick={handleGetCourses} className='bg-[#ff003c] text-[#ffe7e7] w-[100px] h-[30px] rounded'>GetCourses</button><br /><br />


         
        
        { 
          
            allCourses.length!=0?


       <div className='flex ' style={ allCourses.length!=0?{display:'inline-block'}:{display:'none'}}>
          <div className='flex justify-between w-[300px]'>
          <button onClick={hndleAll} className='bg-[#444444] text-white w-[40px] h-[30px] rounded-xl'>All</button><br /><br />
          <button onClick={hndleAvlbl} className='bg-[#444444] text-white w-[100px] h-[30px] rounded-xl'>Available</button><br /><br />
          <button onClick={handleEnrld} className='bg-[#444444] text-white w-[90px] h-[30px] rounded-xl'>Enrolled</button><br /><br />
          </div>
        
        
        
        
        
        
        
         

        
          








         
              <div className='flex flex-col justify-center items-center w-[500px]  bg-[#f1f1f1] rounded-[9px]'>
                        <div className='flex flex-col mt-6 w-[80%]'>

                     {
                      
                       allCourses.map((ele,ind)=>{
                           
                             return <Fragment key={ind}>
                                  
                                  <div className='flex flex-col w-[100%] h-[140px]  mt-7 rounded-[10px] shadow-xl/30 ...' style={visible[0]?alrd.has(ele.cid)?myStyle1:myStyle2:visible[1]?alrd.has(ele.cid)?{...myStyle2,display:'inline-block'}:{display:'none'}:alrd.has(ele.cid)?{display:'none'}:{...myStyle2,display:'inline-block'}}>
                                      <div className='flex flex-col justify-center items-center   w-[100%] h-[140px]     rounded-[10px]'>

                                        <div className='flex justify-between w-[80%] h-[70%]  list-none '>
                                           <div className='flex flex-col'>
                                          {/* <li>{ele.cid}</li> */}
                                          <div className='flex justify-between '><li className='w-[90px] font-medium '>Course :</li><li className='w-[90px] '>{ele.name}</li></div>
                                           <div className='flex '><li className='w-[90px] font-medium '>Cost :</li><li className='w-[90px]'>{ele.cost} Rs</li></div>
                                            <div className='flex '><li className='w-[90px] font-medium '>Duration :</li><li className='w-[90px]'>{ele.duration} months</li></div>
                                             <div className='flex '><li className='w-[90px] font-medium '><button className='bg-[#ff003c]'>Details</button> :</li></div>

                                          
                                          
                                      </div>

                                        {/* <li><button className='bg-[blue] text-white w-[100px] rounded' onClick={(e)=>{handleAddCourse(e,ele.cid,ind)}} style={{display:!arr.has(ind)?'none':'block'}}>AddCourse</button></li>
                                        <li><button className='bg-[blue] text-white w-[100px] rounded' onClick={(e)=>{handleRemoveCourse(e,ele.cid,ind)}} style={{display:arr.has(ind)?'block':'none'}}>RemoveCourse</button></li> */}
                                       
                                       
                                       <div>
                                        <li><button className='bg-[#5700da] text-white mt-5  rounded' onClick={(e)=>{handleAddCourse(e,ele.cid)}}>
                                             {
                                              !alrd.has(ele.cid)?
                                              
                                              !arr.has(ele.cid)?
                                              <div className='w-[100px] rounded h-[35px] pt-1 '>AddCourse</div>
                                              :
                                              <div>
                                                <div className='w-[120px]'>RemoveCourse</div>
                                                
                                              </div>
                                              
                                              
                                              :visible[1]||visible[0]? <div className='w-[120px] bg-[#333333] rounded h-[35px] pt-1'>DeleteCourse</div>:''


                                             }
                                        </button></li></div>

                                       
                                         




                                        {/* <li><button className='bg-[red] text-white' onClick={(e)=>{handleRemoveCourse(e,ele.cid)}}>RemoveCourse</button></li> */}

                                  </div>
                                 </div></div>
                             </Fragment>


                       })


              }


               

                
              
                {/* <button onClick={handleRemoveSubmitAll}>RemoveCourses</button> */}
                      
                        {

                           
                            allCourses.length!=0?!visible[1]&&!visible[0]?<button>AddAll</button>:
                            visible[1]&&!visible[0]?<button>Remove</button>:''
                            :''



                        }
                       


            </div>

          </div>
                   
                   


             





    </div>:'' }                 
    </div>
  )
}

export default GetCourses

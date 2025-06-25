
import React, { useState } from 'react'
import axios from 'axios';
const UploadImage = () => {

    // let x=document.getElementById("my_image")
    // console.log(x.value);
    // let img=(x.files[0])


    // let formData=new FormData();
    // formData.append("file",img)
    
    // let y=fetch('http://localhost:8080/uploadimg/2',{
    //   method:"PUT",
    //   body:formData
      
    // })

    // console.log(y);
    /////////////////////////

    let [image,setImage]=useState();
     let [previewImg,setPrvwmage]=useState();

    
    let hndleImageSubmit=(e)=>{

        setImage(e.target.files[0])
        setPrvwmage(URL.createObjectURL(e.target.files[0]))
        
    }

    let handleUpload=async (e)=>{
         
      e.preventDefault();
           
         let formData=new FormData();
         formData.append("file",image)

           let upload=await axios.put('http://localhost:8080/uploadimg/2',formData,{
            headers:{

              'Content-Type': 'multipart/form-data',
            },
            
            

          })

           console.log(upload);


    }


  return (
    <div>

        {/* <div id='profile_pic'  className='m-[auto] rounded-xl'  >
            <img src="" alt="" />


        </div> */}



        <div>
            <form action="">
            <input type="file" onChange={hndleImageSubmit} />
            <img src={previewImg} accept="image/*" alt="" className='w-[100px] h-[100px]' />
             <button onClick={handleUpload}>upload</button>
           </form>

        </div>
      

      



    </div>
  )
}

export default UploadImage

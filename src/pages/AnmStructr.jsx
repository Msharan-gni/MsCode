import { div } from 'motion/react-client'
import { motion } from 'framer-motion';
import React from 'react'

const AnmStructr = () => {
  return (

    <motion.div
     

      initial={{ height:0 }}
      animate={{ height:700 }} // Translates the div 100px right and 50px down
      transition={{ duration: 1.5,repeat: 4, ease: "easeInOut"  }}
      style={{ width: 500, height: 700, background: 'skyblue' }}
    
    
    >
    <div className=''>  <br /> <br /> <br /> <br />
     <div> 
        <div className=' absolute z-1'>
         <div className='bg-[#f1f1f1] w-[320px] h-[500px] ml-76'>
         </div>
      </div> 

      <div className=' absolute z-2 bg-[] w-[350px] h-[400px] ml-20'>
            <div className='w-[120px] h-[30px] bg-[#e1e1e1] rounded'></div> <br />
             <div className='w-[330px] h-[105px] bg-[#e1e1e1] rounded'></div>
                 
                 <br />

              <div className='w-[170px] h-[30px] bg-[#e1e1e1] rounded ml-4'></div> <br />
             <div className='w-[280px] h-[355px] bg-[#e1e1e1] rounded ml-4'></div>



      </div>


    </div></div>
    
    </motion.div>
  )
}

export default AnmStructr

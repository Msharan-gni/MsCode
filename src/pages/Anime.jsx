import React from 'react'
import { motion } from  "motion/react"

const Anime = () => {
    let box={
        width: 100,
        height: 100,
        backgroundColor: "#ff0088",
        borderRadius: 5,



    }


  return (
    <div>
         <motion.div
            style={box}
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
        />
    </div>
  )
}

export default Anime

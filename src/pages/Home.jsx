import React from 'react'
import Popular from '../components/Popular'
import Veggie from '../components/Veggie'
import NonVeggie from '../components/NonVeggie'
import { motion } from 'framer-motion'

function Home() {
  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    >
        <Popular />
        <Veggie />
        <NonVeggie/>
    </motion.div>
  )
}

export default Home
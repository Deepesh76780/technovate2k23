"use client"
import React from 'react'
import { motion } from "framer-motion"

const Title = ({ title }) => {
    return (
        <motion.div className='md:w-[400px] w-[85%] stye border-2 font-cyberway tracking-[0.3em]  shadow-xl rounded-2xl   text-slate-100 text:base lg:text-2xl  display-2 text-center relative max-w-[80rem]  mx-auto font-bold  bg-blackparent p-4 shadow-black '
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={true}
        >
            {title}
        </motion.div>
    )
}

export default Title
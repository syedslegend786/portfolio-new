
"use client"
import React from 'react'
import { motion } from 'framer-motion'
export const Logo = () => {
    return (
        <motion.div
            whileHover={{
                backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
                transition: {
                    repeat: Infinity,
                    duration: 1
                }
            }}
            className='w-14 h-14 rounded-full bg-black text-white font-semibold text-sm cursor-pointer flex items-center justify-center'
        >
            SA
        </motion.div>
    )
}
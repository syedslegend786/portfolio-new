"use client"
import { MotionValue, useScroll } from 'framer-motion'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
interface LilCircleProps {
    scrollProgress: MotionValue<number>
}
export const LilCircle = ({
    scrollProgress
}: LilCircleProps) => {


    return (
        <figure className='stroke-dark absolute left-0'>
            <svg className='rotate-[-90deg]' width={75} viewBox='0 0 100 100'>
                <motion.circle cx={"75"} cy={"50"} r={"20"} className='stroke-primary stroke-1 fill-none'></motion.circle>
                <motion.circle style={{ pathLength: scrollProgress }} cx={"75"} cy={"50"} r={"20"} className='fill-light stroke-[5px] '></motion.circle>
                <motion.circle cx={"75"} cy={"50"} r={"10"} className='fill-primary stroke-1'></motion.circle>
            </svg>
        </figure>
    )
}
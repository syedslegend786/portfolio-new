import { motion, useMotionValue } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'
import CrptoImage from '../../../public/crypto-screener-cover-image.jpg'
const FramerImage = motion(Image)
interface ArticleTileProps {
    title: string
    time: string
}
export const ArticleTile = ({
    time,
    title
}: ArticleTileProps) => {
    const x = useMotionValue(0)
    const y = useMotionValue(-20)
    const imageRef = useRef<HTMLImageElement>(null)
    const handleMouseMove = (e: React.MouseEvent<HTMLHeadElement, MouseEvent>) => {
        console.log(e.pageX)
        if (imageRef.current) {
            console.log('inside style')
            imageRef.current.style.display = "inline-block"
        }
        x.set(e.pageX)
    }
    const handleMouseLeave = (e: React.MouseEvent<HTMLHeadElement, MouseEvent>) => {
        if (imageRef.current) {
            imageRef.current.style.display = "none"
            x.set(0)
            y.set(0)
        }
    }
    console.log(x.get())
    return (
        <motion.li
            initial={{
                y: 200
            }}
            whileInView={{
                y: 0,
                transition: {
                    duration: 0.5
                }
            }}
            className=' group border border-dark border-opacity-50 p-4 rounded-2xl flex items-center justify-between cursor-pointer' >
            <h1 onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className='text-lg font-[500] hover:underline underline-offset-2'>{title}</h1>
            <h1 className='text-sm text-primary'>{time} read</h1>
            <FramerImage
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1,
                    transition: { duration: 1, ease: "easeInOut" }
                }}
                style={{ x: x, y: y }}
                ref={imageRef} src={CrptoImage} alt={''} className='hidden !absolute w-52 h-auto' />
        </motion.li>
    )
}
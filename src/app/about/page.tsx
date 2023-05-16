"use client"
import { AnimatedText } from '@/components/AnimatedText'
import { Experiences } from '@/components/Experiences/Experiences'
import { Skills } from '@/components/Skills/Skills'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { Metadata } from 'next'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
export const metadata: Metadata = {
    title: 'About'
}
const About = () => {
    return (
        <div className='!p-16'>
            <AnimatedText text='Passion Fuels Purpose!' className='w-max mx-auto' />
            <div className='grid grid-cols-8 gap-5 mt-5'>
                <div className='col-span-3'>
                    <h1 className='font-bold text-sm'>Biography</h1>
                    <p className='mt-2 text-xs'>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
`}</p>
                    <br />
                    <p className='text-xs'>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
`}</p>
                </div>
                <div className='col-span-3'>
                    <div className='relative mx-auto w-[70%] aspect-square p-8  border-2 border-dark rounded-2xl bg-light '>
                        <div className='absolute w-[102%] h-[102%] left-1 top-1 -right-3 rounded-2xl bg-dark -z-10' />
                        <div className='relative w-full h-full   rounded-2xl overflow-hidden'>
                            <Image src={"/developer-pic-2.jpg"} alt='' fill className='object-cover rounded-2xl' />
                        </div>
                    </div>
                </div>
                <div className='col-span-2 flex flex-col justify-between'>
                    <Statics
                        description='Statisfied Clients'
                        title={50}
                    />
                    <Statics
                        description='Projects Completed'
                        title={40}
                    />
                    <Statics
                        description='Years Of Experience'
                        title={4}
                    />
                </div>
            </div>
            <Skills />
            <Experiences />
        </div>
    )
}

export default About

interface StaticsProps {
    title: number
    description: string
}
const Statics = ({
    description,
    title
}: StaticsProps) => {
    const titleRef = useRef<HTMLHeadingElement>(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isTitleInView = useInView(titleRef, {
        once: true
    })

    useEffect(() => {
        if (isTitleInView) {
            motionValue.set(title)
        }
    }, [isTitleInView])
    useEffect(() => {
        springValue.on("change", (latestValue: number) => {
            if (titleRef.current) {
                titleRef.current.innerText = (latestValue.toFixed(0)) + "+"
            }
        })
    }, [springValue])
    return (
        <div>
            <h1 ref={titleRef} className='text-center text-dark font-extrabold text-5xl '>0+</h1>
            <h1 className='text-center'>{description}</h1>
        </div>
    )
}
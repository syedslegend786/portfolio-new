import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { LilCircle } from '../Skills/LilCircle'

export const Experiences = () => {
    const targetRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "center start"]
    })
    return (
        <div className='my-56'>
            <motion.h1 className='text-8xl font-extrabold text-center'>Experiences</motion.h1>
            <div ref={targetRef} className='w-[75%] mx-auto relative mt-10'>
                <motion.div
                    style={{
                        scaleY: scrollYProgress
                    }}
                    className='h-full w-[4px] top-0 bg-dark  absolute left-9 origin-top' />
                <ul className=''>
                    <Details
                        address='Mountain View, CA'
                        company='Google'
                        companyLink='https://www.google.com'
                        position='Software Engineer'
                        time='2022-Present'
                        work='Worked on a team responsible for developing new features for Googles'
                    />
                    <Details
                        address='Mountain View, CA'
                        company='Google'
                        companyLink='https://www.google.com'
                        position='Software Engineer'
                        time='2022-Present'
                        work='Worked on a team responsible for developing new features for Googles'
                    />
                    <Details
                        address='Mountain View, CA'
                        company='Google'
                        companyLink='https://www.google.com'
                        position='Software Engineer'
                        time='2022-Present'
                        work='Worked on a team responsible for developing new features for Googles'
                    />
                </ul>
            </div>
        </div>
    )
}

interface DetailsProps {
    position: string,
    company: string,
    companyLink: string
    time: string
    address: string
    work: string
}
const Details = ({
    address,
    company,
    companyLink,
    position,
    time,
    work
}: DetailsProps) => {
    const liRef = useRef<HTMLLIElement>(null)
    const { scrollYProgress } = useScroll({
        target: liRef,
        offset: ["center end", "center center"]
    })
    return (
        <motion.li
            ref={liRef} className=' my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LilCircle scrollProgress={scrollYProgress} />
            <motion.div initial={{ y: 20 }} whileInView={{ y: 0 }} transition={{ duration: 1.5 }}>
                <h1 className='capitalize font-bold text-2xl '>{position}&nbsp;<a
                    className='text-primary capitalize'
                    href={companyLink}>@{company}</a></h1>
                <span className='capitalize font-medium text-dark/75'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full'>{work}</p>
            </motion.div >
        </motion.li>
    )
}
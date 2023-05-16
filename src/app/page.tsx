"use client"
import { AnimatedText } from '@/components'
import Icons from '@/components/Svgs/Icons'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'
export const metadata: Metadata = {
  title: 'Home'
}
const Home = () => {
  return (
    <div>
      <div className='flex '>
        <div className='flex-1'>
          <div className='w-[500px] h-[500px] relative m-auto'>
            <Image src={'/developer-pic.webp'} className='object-contain' fill alt={''} />
          </div>
        </div>
        <div className='flex-1 overflow-hidden flex items-center justify-center gap-y-3 flex-col'>
          <AnimatedText text='Turning Vision Into Reality With Code And Design.' />
          <p className='font-medium text-sm tracking-wider'>{`As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.`}</p>
        </div>
      </div>
      <div>
        {/* <Icons name='WebDevLoader' className=' h-36 w-36 animate-spin absolute left-52 bottom-20' /> */}
      </div>
    </div>
  )
}

export default Home
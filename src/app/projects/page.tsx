"use client"

import { AnimatedText } from '@/components/AnimatedText/AnimatedText'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Icon } from '@iconify/react'
import CryptoImage from '../../../public/crypto-screener-cover-image.jpg'
const Projects = () => {
    return (
        <div className='p-16'>
            <AnimatedText text='Imagination Trump Knowledge!' className='w-max mx-auto' />
            <div className='grid grid-cols-12 gap-24 mt-20'>
                <div className='col-span-12'>
                    <FeatureProject
                        type={'Feature Project'}
                        title={'Crypto Screener Application'}
                        summary={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                        img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiB8giTN9Hj8QAEz4DVdCtqWbfnrKoZSo2nA&usqp=CAU"}
                        link={'/'}
                        github={'/'}
                    />
                </div>
                <div className='col-span-6'>
                    <SimpleProject
                        type={'Feature Project'}
                        title={'Crypto Screener Application'}
                        summary={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                        img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiB8giTN9Hj8QAEz4DVdCtqWbfnrKoZSo2nA&usqp=CAU"}
                        link={'/'}
                        github={'/'}
                    />
                </div>
                <div className='col-span-6'>
                    <SimpleProject
                        type={'Feature Project'}
                        title={'Crypto Screener Application'}
                        summary={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                        img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiB8giTN9Hj8QAEz4DVdCtqWbfnrKoZSo2nA&usqp=CAU"}
                        link={'/'}
                        github={'/'}
                    />
                </div>
                <div className='col-span-12'>
                    <FeatureProject
                        type={'Feature Project'}
                        title={'Crypto Screener Application'}
                        summary={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                        img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiB8giTN9Hj8QAEz4DVdCtqWbfnrKoZSo2nA&usqp=CAU"}
                        link={'/'}
                        github={'/'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects

interface FeatureProjectProps {
    type: string
    title: string
    summary: string
    img: string
    link: string
    github: string
}

const FeatureProject = ({
    github,
    img,
    link,
    summary,
    title,
    type
}: FeatureProjectProps) => {
    return (
        <article className='relative bg-light flex gap-x-3 border-2 border-dark rounded-2xl p-5 items-center'>
            <div className='absolute w-[100%] h-[102%]  -right-2 -bottom-2    rounded-2xl bg-dark -z-10' />
            <Link className='flex-1' href={link} target='_blank'>
                {/* <div className='relative h-[250px] w-full !rounded-2xl overflow-hidden'> */}
                    <Image  alt='' src={CryptoImage} className='w-full h-auto object-contain !rounded' />
                {/* </div> */}
            </Link>
            <div className='flex-1 space-y-2'>
                <span className='block text-primary'>{type}</span>
                <Link href={link} target='_blank' className='text-3xl !my-5 font-bold'>
                    {title}
                </Link>
                <p className='line-clamp-3 text-sm'>{summary}</p>
                <div className='flex items-center space-x-2'>
                    <Link href={github} target="_blank">
                        <Icon className='text-[40px]' icon="mdi:github" />
                    </Link>
                    <Link href={link} target="_blank" className='text-sm  bg-dark text-white rounded-lg p-2  capitalize'>
                        Visit my project
                    </Link>
                </div>
            </div>
        </article>
    )
}

interface SimpleProjectProps {
    type: string
    title: string
    summary: string
    img: string
    link: string
    github: string
}

const SimpleProject = ({
    github,
    img,
    link,
    summary,
    title,
    type
}: SimpleProjectProps) => {
    return (
        <div className='relative border-2 bg-light   border-dark rounded-2xl p-5 '>
            <div className='absolute w-[100%] h-[102%]  -right-2 -bottom-2    rounded-2xl bg-dark -z-10' />
            <Image src={CryptoImage} alt='' className='w-full h-auto object-contain rounded' />
            <span className='block text-primary mt-3'>{type}</span>
            <Link href={link} target='_blank'>
                <h1 className='text-2xl !my-3 font-bold'>
                    {title}
                </h1>
            </Link>
            <div className='flex items-center justify-between'>
                <span className='font-[500] cursor-pointer text-sm hover:underline hover:underline-offset-4'>View</span>
                <Link href={github} target="_blank">
                    <Icon className='text-[40px]' icon="mdi:github" />
                </Link>
            </div>
        </div>
    )
}
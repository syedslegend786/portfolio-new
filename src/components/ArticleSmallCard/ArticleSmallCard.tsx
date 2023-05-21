import Image, { StaticImageData } from 'next/image'
import React from 'react'
import Crtimg from '../../../public/crypto-screener-cover-image.jpg'
interface ArticleSmallCardProps {
    image: StaticImageData | string
    title: string
    description: string
    time: string
}
export const ArticleSmallCard = ({
    description,
    image,
    time,
    title
}: ArticleSmallCardProps) => {
    return (
        <div className='relative w-full bg-light  border border-dark p-5 rounded-2xl cursor-pointer'>
            <div className='absolute h-[102%] top-2 left-2 rounded-3xl w-[102%]  -z-10 bg-dark shadow-dark shadow-md' />
            <Image src={image} alt='' className='w-full h-auto object-contain rounded-md' />
            <div className='mt-2'>
                <h1 className='font-semibold text-2xl'>{title}</h1>
                <p className='line-clamp-3'>{description}</p>
                <h1 className='text-gray-500 text-xs font-[500]'>{time} read</h1>
            </div>
        </div>
    )
}
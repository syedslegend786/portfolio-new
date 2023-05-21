"use client"
import { AnimatedText } from '@/components'
import { ArticleSmallCard } from '@/components/ArticleSmallCard/ArticleSmallCard'
import React from 'react'
import CryptoImage from '../../../public/crypto-screener-cover-image.jpg'
import { ArticleTile } from '@/components/ArticleTile/ArticleTile'

const Articals = () => {
    return (
        <div className='p-16'>
            <AnimatedText text='Articles Written to Help the Web Devs!' />
            <div className='grid grid-cols-2 gap-24 mt-10'>
                <ArticleSmallCard
                    image={CryptoImage}
                    title={'Learn how to create a crypto tracking in live'}
                    description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                    time={'9 min'}
                />
                <ArticleSmallCard
                    image={CryptoImage}
                    title={'Learn how to create a crypto tracking in live'}
                    description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                    time={'9 min'}
                />
            </div>
            <AnimatedText text='All Articles' className='mt-16 w-max mx-auto' />
            <ul className='mt-10 pb-[200px] space-y-4'>
                <ArticleTile
                    title={'Learn how to create a crypto tracking in live'}
                    time={'9 min'}
                />
                <ArticleTile
                    title={'Learn how to create a crypto tracking in live'}
                    time={'9 min'}
                />
                <ArticleTile
                    title={'Learn how to create a crypto tracking in live'}
                    time={'9 min'}
                />
                <ArticleTile
                    title={'Learn how to create a crypto tracking in live'}
                    time={'9 min'}
                />
                <ArticleTile
                    title={'Learn how to create a crypto tracking in live'}
                    time={'9 min'}
                />
            </ul>
        </div>
    )
}

export default Articals
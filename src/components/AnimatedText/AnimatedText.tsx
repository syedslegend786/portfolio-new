"use client"

import { cn } from '@/lib/utils'
import React from 'react'
import { AnimationProps, Variant, Variants, motion } from 'framer-motion'
import clsx from 'clsx'
interface AnimatedTextProps {
    text: string
    className?: string
}
export const AnimatedText = ({
    text,
    className
}: AnimatedTextProps) => {
    return (
        <motion.div
            animate={{

            }}
            className={cn(
                'w-full flex flex-wrap gap-x-3 gap-y-2',
                className
            )}>
            {
                text.split(" ").map((txt, index) => (
                    <motion.span
                        initial={{
                            y: 50,
                            opacity: 0
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 1,
                                delay: index * 0.05
                            }
                        }}
                        className={
                            cn(
                                "text-6xl font-bold"
                            )
                        } key={index}>{txt}</motion.span>
                ))
            }
        </motion.div>
    )
}
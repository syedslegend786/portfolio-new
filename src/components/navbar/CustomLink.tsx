
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
interface CustomLinkProps {
    href: string
    title: string
    selected?: boolean
}
export const CustomLink = ({
    href,
    title,
    selected = false
}: CustomLinkProps) => {
    return (
        <Link className='relative group text-sm' href={href}>
            {title}
            <span className={
                cn(
                    `
                    absolute
                    h-[1.5px]
                    bg-black
                    -bottom-0.5
                    w-0
                    left-0
                    group-hover:w-full
            transition-[width]
            ease-in-out
            duration-300
            `,
                    {
                        "w-full": selected
                    }
                )
            }></span>
        </Link >
    )
}
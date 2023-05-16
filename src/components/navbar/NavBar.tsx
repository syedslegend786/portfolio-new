"use client"
import Link from 'next/link'
import React from 'react'
import { Logo } from '../Logo'
import { CustomLink } from './CustomLink'
import { usePathname } from 'next/navigation'
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion'
const MotionLink = motion(Link)
type TLinks = {
    title: string,
    href: string
}
const links = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "About",
        href: "/about"
    },
    {
        title: "Projects",
        href: "/projects"
    },
    {
        title: "Articles",
        href: "/articles"
    }
] as TLinks[]

export const NavBar = () => {
    const pathname = usePathname()
    return (
        <header
            className='
        relative
        flex items-center justify-between 
        px-12 py-8
        '
        >
            <nav className='space-x-3'>
                {
                    links.map(({ href, title }) => (
                        <CustomLink selected={pathname === href} key={href} href={href} title={title} />
                    ))
                }
            </nav>
            <nav className='space-x-3 flex items-center'>
                <MotionLink
                    whileHover={{
                        y: -5,
                    }}
                    whileTap={{
                        scale: 0.9
                    }}
                    href={"/"} target='_blank'>
                    <Icon fontSize={20} color='#2F88FF' icon="mdi:twitter" />
                </MotionLink>
                <MotionLink
                    whileHover={{
                        y: -5,

                    }}
                    whileTap={{
                        scale: 0.9
                    }}
                    href={"/"} target='_blank'>
                    <Icon fontSize={20} color='black' icon="mdi:github" />
                </MotionLink>
                <MotionLink
                    whileHover={{
                        y: -5,
                    }}
                    whileTap={{
                        scale: 0.9
                    }}
                    href={"/"} target='_blank'>
                    <Icon fontSize={20} color='#0077B5' icon="mdi:linkedin" />
                </MotionLink>
            </nav>
            <div className='
            absolute
            left-[50%]
            translate-x-[-50%]
            '>
                <Logo />
            </div>
        </header>
    )
}
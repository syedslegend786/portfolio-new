import React from 'react'
import { IconProps } from './utils'
import * as AllIcons from './allicons'
const Icons = ({
    name,
    className
}: IconProps) => {
    const IconComponent = AllIcons[name]
    return (
        <IconComponent
            className={className}
        />
    )
}

export default Icons
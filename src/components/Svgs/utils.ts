import * as icons from './allicons'

export interface IconProps {
    name: keyof typeof icons
    className?:string
}
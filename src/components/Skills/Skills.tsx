import React from 'react'
import { m, motion } from 'framer-motion'

const data = [
  {
    name:"React JS",
    x:"0px",
    y:"300px"
  },
  {
    name:"Next JS",
    x:"0px",
    y:"-300px"
  },
  {
    name:"Story Book",
    x:"400px",
    y:"-0px"
  },
  {
    name:"Redux Toolkit",
    x:"-400px",
    y:"-0px"
  },
  {
    name:"Mongo DB",
    x:"-300px",
    y:"-200px"
  },
  {
    name:"Tailwind CSS",
    x:"-300px",
    y:"200px"
  },
  {
    name:"Express JS",
    x:"300px",
    y:"-200px"
  },
  {
    name:"Nest JS",
    x:"300px",
    y:"200px"
  },

] as SkillProps[]
export const Skills = () => {

  /**
   * 0,100
   * 100,200
   * 
   */
  return (
    <div>
      <h1 className='text-8xl mt-20 font-extrabold text-center mb-20'>Skills</h1>
      <div className='relative w-full h-screen bg-circularLight flex items-center justify-center'>
        <motion.h1
          whileHover={{
            scale: 1.2
          }}
          className='bg-dark text-sm text-white rounded-full p-5 cursor-pointer font-semibold'
        >Web</motion.h1>
        {
          data.map((sk, index) => (
            <Skill
              {...sk}
              key={index}

            />
          ))
        }
      </div>
    </div>
  )
}
interface SkillProps {
  name: string
  x: string
  y: string
}
const Skill = ({
  name,
  x,
  y
}: SkillProps) => {
  return (
    <motion.div
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y }}
      transition={{
        duration: 1.5
      }}
      whileHover={{
        scale: 1.2
      }}
      viewport={{ once: true }}
      className=' absolute flex items-center justify-center bg-dark py-3 px-6 rounded-full font-semibold text-light shadow-dark  cursor-pointer'>
      {name}
    </motion.div>
  )
}

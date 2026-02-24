import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import {motion} from "motion/react";
function OurWork() {
    const workData=[
        {
            title:'Mobile app marketing',
            description:'We turn bold ideas into power full digitle solutions that connect,engage...',
            image:assets.work_mobile_app
        },
        {
            title:'Dashboard management',
            description:'We help you you execute your plan and deliever results.',
            image:assets.work_dashboard_management
        },
    
        {
            title:'Fitness and promotion',
            description:'We help you create a marketing strategy that drives results.',
            image:assets.work_fitness_app
        }
    ]
  return (
    <motion.div  id='our-work' className='flex flex-col items-center gap07 px-4 sm:px-12 lg:px24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <Title title='our latest work desc' desc="From strategy to execution,we craft digitle solutions that move your bussiness forward"/>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>

{workData.map((work,index)=>(
    <motion.div
    
         initial={{opacity:0, y: 30}}
        animate={{opacity:1, y: 0}}
        transition={{duration:0.5,delay:index * 0.2}}
        viewport={{once:true}}
    key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
        <img src={work.image} alt=""  className='w-full rounded-xl'/>
        <h3 className='mt-3 mb-2  text-3xl'>
            {work.title}</h3>
            <p className=''>{work.description}</p>

    </motion.div>
))}
        </div>

    </motion.div>
  )
}

export default OurWork
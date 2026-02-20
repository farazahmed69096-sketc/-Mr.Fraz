import React from 'react'
import assets from "../assets/assets";
import Title from './Title';
import ServiceCard from './ServiceCard';
import {motion} from "motion/react";
function Services() {
    const serviceData=[
        {
            title:"Advertising",
            description:"we turn bold ideas into power digitle solutions that connect,engage...",
            icon:assets.ads_icon,

        },
        {
            title:"Contant marketing",
            description:"we you execute your plan and deliever results.",
            icon:assets.maketing_icon,

        },
        {
            title:"Contant writting",
            description:"we you create a marketing strategy that drives results.",
            icon:assets.contant_icon,

        },
        {
            title:"Social media",
            description:"we help you build a strong social media presence and engage with your audience",
            icon:assets.social_icon,

        },
    ] 
  return (
    < motion.div
    initial='hidden'
    whileInView="visible"
    viewport={{once:true}}
    transition={{staggerChilder:0.2}}
    id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white '>

        <img src={assets.bgImage2} alt=""  className='absolute -top-110 -left-70 -z-1 dark:hidden'/>
        <Title title="how can we help" desc="From strategy t execution ,we craft digitle solutions that move you bussiness forward"/>
        <div className='flex flex-col md:grid grid-cols-2'>
            {serviceData.map((service,index)=>(
              <  ServiceCard key={index} service={service} index={index}/>
            ))}
        </div>
    </motion.div>
  )
}

export default Services
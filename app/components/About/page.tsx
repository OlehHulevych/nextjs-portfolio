'use client'
import styles from './about.module.css'
import Image from 'next/image'
import {motion, useAnimation} from 'framer-motion'
import {Element} from 'react-scroll'



export default function AboutPage() {
  const controls = useAnimation()

  const handleStartHover = () =>{
    controls.start({
      scale:1.050
    })
  }

  const handleStartEnd = () => {
    controls.start({
      scale:1
    })
  }
  return (
    <Element name = "about">
      <div className = {styles.main}>
     <h2 className = {styles.title}>About me</h2>
     <div className = {styles.block}>
         <motion.img onMouseEnter={handleStartHover} animate = {controls} onMouseLeave={handleStartEnd} transition = {{duration:0.5}} className = {styles.img}  src = "/images/about_img.jpg" width="400" height ="400" alt = "Image" />
         <div className = {styles.biography}>
             <p>
                Hi, my name is Oleh, I am self-taught frontent developer. I have experience in creating SPA application on React and SSR application on next.js.My journey has started in semptember 2022, later i create my firts plain landing.It was excited for me and it was first step in web debelopment. For now i create react application. I love React, it is fantastic technoloy. React can give freedom you imagine.
             </p>
         </div>
     </div>
    </div>
    </Element>
    
  )
}

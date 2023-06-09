'use client'
import styles from './home.module.css'
import Image from 'next/image'
import {motion, transform} from 'framer-motion'
import {Element} from 'react-scroll'


import {useState, useEffect} from 'react'

export default function Intro() {
  const [width, setWidth] = useState(0)
  useEffect(()=>{
    setWidth(window.innerWidth)
    const handleWidth = () =>{
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWidth)

    return ()=>{
      window.removeEventListener('resize', handleWidth)
    }
  },[])
  
  return (
    <Element name = "home">
      <div className = {styles.main}>
      <div className = {styles.inner}>
        <div className = {styles.columns}>
          <motion.div animate = {{x:0, opacity:1}} initial = {{x:-10000, opacity:0}} transition = {{duration:1.5}} className = {`${styles.infromation} ${styles.animation}`}>
            <div className = {styles.title}>Hello</div>
            <div className = {styles.title}>Oleh</div>
            <div className = {styles.title}>Front-end Developer</div>
          </motion.div>
        {width>500 && (<motion.img animate = {{x:0}} initial= {{x:10000}} transition = {{duration:1.3}} src ="/images/intro_img.png" className = {styles.img} sizes="100vw" width="500" height="500" alt="picture"/>) }
        </div>
      </div>
    </div>
    </Element>
    
  )
}

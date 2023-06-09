import Image from 'next/image'
import Link from 'next/link'
import styles from './item.module.css'
import {motion, useAnimation} from 'framer-motion'
import {useState} from 'react'

type Props = {
    title:string,
    img:string,
    desc:string,
    stack:string[],
    link:string,
    direction:number
}

const slideVariants = {
  enter:(direction:number) => {
    return {
      x:direction>0? '100%':'-100%',
      opacity:0
    }
  },
  center:{
    x:'0%',
    opacity:1
  },
  exit:(direction:number) => {
    return {
      x:direction<0? "100%":"-100%",
      opacity:0
    }
  }
}

export default function Item({title, img, desc, stack, link, direction}:Props) {
  
  const controls = useAnimation()
  const hoverStart = () =>{
    controls.start({
      scale:1.050,
      opacity:.2
    })
    
  }

  const hoverEnd = () =>{
    controls.start({
      scale:1,
      opacity:1
    })
    
  }
  return (
    <motion.div initial = "enter" animate ="center" exit = "exit" variants ={slideVariants} custom ={direction}  transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }} className = {styles.main}>
      <a  className = {styles.ref} target = "_blank" href = {link}>
        <img  src = {`/projects/${img}.jpg`} width = "400" height = "400" alt = "img" className={styles.img} />
        <div className={styles.img_text}>Show project</div>
        </a>
      <div className = {styles.information}>
        <div className = {styles.title}>{title}</div>
        <div className = {styles.desc}>{desc}</div>
        <div className = {styles.stack}>
          <div>Stack</div>
          {stack.map(skill=>(
            <img key={skill} className = {styles.img_tech} src = {`/Stack/${skill}.png`} width="50" height = "50"/>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

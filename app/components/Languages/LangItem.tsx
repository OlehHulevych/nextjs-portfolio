import styles from './item.module.css'
import Image from 'next/image'
import {motion, useAnimation} from 'framer-motion';
import {useEffect} from 'react'



type animation = {
  x?:number,
  scale?:number
}

type Props = {
  img:string,
  title:string,
  id:number,
  level:string,
  animation:animation
}

export default function SkillItem({img, title, level, animation}:Props) {
  const controls = useAnimation()
  const hoverAnimation = {
    scale:1.1,
    transition:{duration:0.3}
  }

  const animateOnPageLoad = async () => {
    await controls.start({
      scale:1,
      x:0
      
    })
  }

  const defaultAnimation = {
    scale:1
  }

  const handleHoverStart = () =>{
    controls.start(hoverAnimation)
  }

  const handleHoverEnd = () =>{
    controls.start(defaultAnimation)
  }

  useEffect(() => {
    animateOnPageLoad();
  }, []);
  return (
    <motion.div onMouseEnter = {handleHoverStart} onMouseLeave = {handleHoverEnd} initial = {animation} animate = {controls} transition = {{duration:1}} className = {`${styles.item}`}>
      <Image className = {styles.img}  src = {`/language/${img}`+`.png`}  width= "250" height="150" loading="lazy" alt ="item"/>
        <div className = {styles.title}>{title}</div>
        <div className = {styles.level}>{level}</div>
    </motion.div>
  )
}

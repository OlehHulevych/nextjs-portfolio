import styles from './item.module.css'
import {motion, useAnimation} from 'framer-motion';
import {useEffect} from 'react'

type Props = {
    img:string,
    title:string,
}

export default function SkillItem({img, title}:Props) {
  const controls = useAnimation()
  const hoverAnimation = {
    scale:1.1,
    transition:{duration:0.3}
  }

  const animateOnPageLoad = async () => {
    await controls.start({
      scale:1
      
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
    <motion.div onMouseEnter = {handleHoverStart} onMouseLeave = {handleHoverEnd} initial = {{scale:0}} animate = {controls} transition = {{duration:1}} className = {`${styles.item}`}>
      <img className = {styles.img} src = {`/skills/${img}`+`.png`} width= "150" height="150" alt ="item"/>
        <div className = {styles.title}>{title}</div>
    </motion.div>
  )
}

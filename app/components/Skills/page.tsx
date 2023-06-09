'use client'
import styles from './page.module.css'
import SkillItem from './SkillItem'
import {useState, useRef,  useEffect} from 'react'
import {store} from '../../lib/skills'
import {Element} from 'react-scroll'





export default function SkillPage() {
   
    const [visible, setVisible] = useState(false)
   
    const targetRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
      const options = {
        threshold:1,
        rootMargin:"0px",
        root:null
      }

      const observer = new IntersectionObserver((entries)=>{
        const [entry] = entries
        if(entry.isIntersecting){
          setVisible(entry.isIntersecting)
          observer.disconnect()
        }
      },options)

      if(targetRef.current){
        observer.observe(targetRef.current)
      }

      return () =>{
        observer.disconnect()
      }
    },[])

  return (
    <Element name="skills">
      <div className = {styles.main}>
      <h2 className = {styles.title}>My Skills</h2>
      <div ref = {targetRef} className = {styles.block}>
          {visible && store.map(skill => (
              <SkillItem img = {skill.img} title = {skill.title} key = {skill.id}/>
          ))}
      </div>
    
    </div>
    </Element>
    
  )
}

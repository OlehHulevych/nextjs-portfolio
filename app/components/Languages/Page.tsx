'use client'
import styles from './lang.module.css'
import {langSkills} from '../../lib/skills'
import LangItem from './LangItem'
import {useState, useEffect, useRef} from 'react'

export default function LangPage() {
    const [visible, setVisible] = useState(false)
    const targetRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        const options = {
            threshold:0.5,
            root:null,
            rootMargin:'0px'
        }

        const observer = new IntersectionObserver((entries:IntersectionObserverEntry[])=>{
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
    <div className = {styles.main}>
      <h2 ref={targetRef} className = {styles.title}>Other Skills</h2>
      <div className = {styles.block}>
        {visible && langSkills.map(lang =>(
            <LangItem title={lang.title} id ={lang.id} key= {lang.id} animation = {lang.animation} level = {lang.level} img = {lang.img}/>
        ))}
      </div>
    </div>
  )
}

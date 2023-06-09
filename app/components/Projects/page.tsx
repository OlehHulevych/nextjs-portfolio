'use client'
import React, {useState} from 'react'
import styles from './styles.module.css'
import Item from './item'
import { FaLessThan, FaGreaterThan } from 'react-icons/fa'
import projects from '../../lib/projects'
import {Element} from 'react-scroll'

export default function ProjectsPage() {
  const [[index, direction], setIndex] = useState([0,0])
 
  

  const nextSlide = () =>{
    setIndex([(index+1)%projects.length, 1])
    
  }

  const prevSlide = () =>{
    setIndex([(index-1 + projects.length)%projects.length , -1])
   
  }
  return (
    <Element name = "projects">
       <div>
      <h1 className =  {styles.title}>My Projects</h1>
      <div className = {styles.block}>
        <FaLessThan className={styles.arrow} onClick ={prevSlide}/>
        <Item key = {index} direction={direction} title = {projects[index].title} img = {projects[index].img} link = {projects[index].link} desc = {projects[index].desc} stack ={projects[index].stack}/>
        <FaGreaterThan className={styles.arrow} onClick = {nextSlide}/>
      </div>
    </div>
    </Element>
   
  )
}

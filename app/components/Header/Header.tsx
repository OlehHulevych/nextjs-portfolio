"use client"
import styles from './header.module.css'
import {useState, useEffect} from 'react'
import Burger from '../BurgerMenu/Burger'
import Navbar from '../BurgerMenu/Navbar'
import {Link} from 'react-scroll'


export default function Header() {
  const [navBar, setNavBar] = useState(true)
  const [open, setOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  

  useEffect(()=>{
    const handleScroll = () =>{
      if(window.pageYOffset>0){
        setIsSticky(true)
      }
      else{
        setIsSticky(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return ()=>{
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  useEffect(()=>{
    const handleBar = () => {
      if(window.innerWidth<=500){
        setNavBar(false)
      }
      else{
        setNavBar(true)
      }
    }
    window.addEventListener('resize', handleBar)

    return () => {
      window.removeEventListener('resize', handleBar)
    }
  },[])
  
  return (
    <div className = {`${styles.header} ${isSticky && styles.sticky}`}>
        <div className = {styles.header_inner}>
          
            <div className = {styles.logo}>
                <Link activeClass="active" to = "home" smooth={true} duration={500} spy={true}><h1>Code<span>Pholio</span></h1></Link>
            </div>
            {navBar? ( <nav className = {styles.nav}>
                    
                    <Link activeClass = "active" to ="about" spy = {true} smooth = {true} offset={-70} duration = {500}><div className = {styles.link}>About me</div></Link>
                    <Link activeClass = "active" to="skills" spy = {true} smooth = {true} offset={-70} duration = {500}><div className  ={styles.link}>Skills</div></Link>
                    <Link activeClass = "active" to="projects" spy = {true} smooth = {true} offset={-70} duration = {500}><div className  ={styles.link}>Projects</div></Link>
                    <Link activeClass = "active" to="contacts" spy = {true} smooth = {true} offset={-70} duration = {500}><div className  ={styles.link}>Contact</div></Link>
                </nav>):(<div>
                  <Burger open = {open} onClick = {()=>setOpen(!open)}/>
                </div>) }
               
              
            </div>
            {open && <Navbar/> }
    </div>
  )
}

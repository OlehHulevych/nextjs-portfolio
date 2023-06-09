import styles from './NavBar.module.css'
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'



export default function Navbar(){
  return (
    <div>
      <motion.nav initial = {{opacity:0, x:100}} animate = {{opacity:1, x:0}} transition = {{duration:0.2}} className = {styles.nav}>
       <div className= {styles.navList}>
       <Link activeClass = "active" to ="about" spy = {true} smooth = {true} offset={-70} duration = {500}><div className = {styles.link}>About me</div></Link>
        <Link activeClass = "active" to="skills" spy = {true} smooth = {true} offset={-70} duration = {500}><div className = {styles.link}>Skills</div></Link>
        <Link activeClass = "active" to="projects" spy = {true} smooth = {true} offset={-70} duration = {500}><div className = {styles.link}>Projects</div></Link>
        <Link activeClass = "active" to="contacts" spy = {true} smooth = {true} offset={-70} duration = {500}><div className = {styles.link}>Contact</div></Link>
        </div>   
      </motion.nav>
    </div>
  )
}


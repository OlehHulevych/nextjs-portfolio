import React from 'react'
import styles from './Burger.module.css'

type BurgerProps = {
  onClick:()=>void,
  open:boolean
}

const Burger:React.FC<BurgerProps>=({onClick, open})=> {
  return (
    <div onClick ={onClick} className = {`${styles.main} ${open && styles.open}`}>
      <span className ={styles.line}></span>
      <span className ={styles.line}></span>
      <span className ={styles.line}></span>
    </div>
  )
}

export default Burger

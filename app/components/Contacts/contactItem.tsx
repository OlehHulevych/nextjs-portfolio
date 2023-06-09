
import styles from './item.module.css'


type Props = {
    title:string,
    source:string,
    icon:string,
    
}

export default function ContactItem({title, source, icon}:Props) {
  return (
      
    <div className = {styles.item}>
      <img width = "50" height = "50" src ={`/Links/${icon}.png`} />
        <h3 className = {styles.title}>{title}</h3>
        {source.startsWith('http')? <a target ="_blank" href = {`${source}`}>Link</a>:<h4>{source}</h4>}
    </div>

  )
}

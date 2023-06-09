'use client'
import styles from './styles.module.css'
import ContactItem from './contactItem'
import contacts from '../../lib/contacts'
import {Element} from 'react-scroll'

export default function ContactPage() {
  return (
    <Element name="contacts">
      <div className = {styles.main}>
      <h2 className = {styles.title}>My contacts</h2>
      <div className = {styles.block}>
        {contacts.map(contact => (
          <ContactItem key = {contact.id}   source = {contact.source} title={contact.title} icon = {contact.icon}/>
        ))}
        
      </div>
    </div>
   
    </Element>
   
  )
}

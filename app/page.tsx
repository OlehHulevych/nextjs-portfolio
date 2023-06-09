'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Intro from './components/Intro/HomePage'
import AboutPage from './components/About/page'
import SkillPage from './components/Skills/page'
import LangPage from './components/Languages/Page'
import ProjectsPage from './components/Projects/page'
import ContactPage from './components/Contacts/page'
import {Metadata} from 'next'







export default function Home() {
  return (
    <main className={styles.main}>
      <Intro/>
      <AboutPage/>
      <SkillPage/>
      <LangPage/>
      <ProjectsPage/>
      <ContactPage/>
    </main>
  )
}

import React from 'react'
import styles from './StylesSectionSkills.module.css'

export const SectionSkills = () => {

   return (
      <div className={styles.content_container_skills}>

         <h2 className={styles.content_title_skills}>Minhas Habilidades:</h2>
         <ul className={styles.content_skills}>
            <li className={styles.content_item_skills}>HTML</li>
            <li className={styles.content_item_skills}>CSS</li>
            <li className={styles.content_item_skills}>JavaScript</li>
            <li className={styles.content_item_skills}>React</li>
            <li className={styles.content_item_skills}>Styled-components</li>
            <li className={styles.content_item_skills}>Redux</li>
            <li className={styles.content_item_skills}>NodeJS</li>
            <li className={styles.content_item_skills}>Context API</li>
            <li className={styles.content_item_skills}>PHP</li>
            <li className={styles.content_item_skills}>Next.js</li>
            <li className={styles.content_item_skills}>TypeScript</li>
            <li className={styles.content_item_skills}>TailwindCSS</li>
            <li className={styles.content_item_skills}>SASS</li>
            <li className={styles.content_item_skills}>GIT & GitHub</li>
         </ul>
      </div>
   )
}

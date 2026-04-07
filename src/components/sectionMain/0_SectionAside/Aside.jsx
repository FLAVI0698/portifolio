import styles from './StylesAside.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Aside = () => {
   return (
      <>
         <aside className={`${styles.aside}`}>
            <address>
               <ul>
                  <li>
                     <a href="https://github.com/FLAVI0698" target='_blank'>
                        <FontAwesomeIcon className={`${styles.icon}`} icon={faGithub} size="1x" color="black" />
                     </a>
                  </li>
                  <li>
                     <a href="www.linkedin.com/in/flavio-gabriel-gouveia" target='_blank'>
                        <FontAwesomeIcon className={`${styles.icon}`} icon={faLinkedin} size="1x" color="black" />
                     </a>
                  </li>
               </ul>
            </address>
         </aside>
      </>
   )
}

import styles from './StylesAnimationArrow.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export const AnimationArrow = () => {
   return (
      <>
         <div className={`${styles.fieldAnimation}`}>
            <a className={styles.arrow} href="#about"> <FontAwesomeIcon className={styles.icon}icon={faArrowDown} /></a>
         </div>
      </>
   )
}
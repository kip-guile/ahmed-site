import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.col}>
          <img
            src='/images/logo.png'
            alt='ABODA Emperor'
            className={styles.logo}
          />
          <p>
            Building Africa’s future through sustainable marine, engineering,
            and energy solutions.
          </p>
        </div>
        <div className={styles.col}>
          <h4>Company</h4>
          <Link to='/about'>About Us</Link>
          <Link to='/services'>Services</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/compliance'>Compliance</Link>
        </div>
        <div className={styles.col}>
          <h4>Resources</h4>
          <Link to='/sustainability'>Sustainability</Link>
          <Link to='/careers'>Careers</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        <div className={styles.col}>
          <h4>Contact</h4>
          <p>Email: abodaemperorservices@gmail.com</p>
          <p>Phone (Nigeria): +234 806 955 5150</p>
          <p>Phone (Liberia): +231 770 424848</p>
          <p>Phone (Sierra Leone): +232 776 30181</p>
          <p>
            Registered Office: No. 3 Dar-Es-Salam Street, Wuse 2, Abuja, Nigeria
          </p>
          <p>Lagos Office: No. 1, Faith Street, Comfort Uboh, Apapa, Lagos</p>
          <p>
            Abuja Office: No. 6, Cairo Street House 10, Off Adetokunbo Ademola
            Crescent, Wuse 2, Abuja
          </p>
          <p>
            Liberia Office: Robert Field Highway, Marshall Road, Around Boy’s
            Town, Margibi County
          </p>
          <p>
            Sierra Leone Offices: No. 91, Fort Street, Freetown & 999 Airport
            Ferry Road, Lungi
          </p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} ABODA Emperor Services Nigeria Limited
          (RC 1323986) | All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

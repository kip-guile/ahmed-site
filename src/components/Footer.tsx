import { Link } from 'react-router-dom'
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react'
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
            Building Africa’s future through sustainable mining, marine, and
            energy solutions.
          </p>
          <div className={styles.socials}>
            <a href='#' aria-label='Facebook'>
              <Facebook size={20} />
            </a>
            <a href='#' aria-label='Twitter'>
              <Twitter size={20} />
            </a>
            <a href='#' aria-label='LinkedIn'>
              <Linkedin size={20} />
            </a>
            <a href='#' aria-label='YouTube'>
              <Youtube size={20} />
            </a>
          </div>
        </div>
        <div className={styles.col}>
          <h4>Company</h4>
          <Link to='/about'>About Us</Link>
          <Link to='/services'>Services</Link>
          <Link to='/projects'>Projects</Link>
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
          <p>Phone: +234 806 955 5150</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} ABODA Emperor Services Limited | All
          Rights Reserved
        </p>
      </div>
    </footer>
  )
}

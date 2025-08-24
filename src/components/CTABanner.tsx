import { Link } from 'react-router-dom'
import styles from './CTABanner.module.scss'

export default function CTABanner() {
  return (
    <section className={styles.ctaBanner}>
      <div className={styles.overlay}>
        <h2>Partner with ABODA Emperor today</h2>
        <Link to='/contact'>Get in Touch</Link>
      </div>
    </section>
  )
}

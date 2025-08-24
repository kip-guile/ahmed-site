import styles from './About.module.scss'
import { Eye, Target, ShieldCheck } from 'lucide-react'

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.overlay}>
        <h2>About Us</h2>
        <p>
          ABODA Emperor Services Limited is a fully licensed and professionally
          managed multinational company with expertise in mining, marine
          logistics, energy, and infrastructure projects across Africa.
        </p>
        <div className={styles.highlights}>
          <div>
            <Eye size={30} color='#c8a951' />
            <h3>Our Vision</h3>
            <p>
              To be one of Africa’s most respected and efficient gold, diamond,
              marine, and energy companies through ethical, sustainable, and
              profitable operations.
            </p>
          </div>
        </div>
        <div>
          <Target size={30} color='#c8a951' />
          <h3>Our Mission</h3>
          <p>
            To discover, develop, and deliver resources responsibly while
            creating value for stakeholders, employees, and host communities.
          </p>
        </div>
        <div>
          <ShieldCheck size={30} color='#c8a951' />
          <h3>Our Values</h3>
          <p>
            Integrity, efficiency, accountability, sustainability, and safety
            are the pillars of how we operate.
          </p>
        </div>
      </div>
    </section>
  )
}

import styles from './About.module.scss'
import { Eye, Target, ShieldCheck } from 'lucide-react'

// Optimized background import
import aboutBg from '../assets/images/about-bg.jpg?w=480;768;1200;1600&format=webp;avif&as=picture'

export default function About() {
  return (
    <section className={styles.about}>
      {/* Responsive background */}
      <picture className={styles.bg}>
        {Object.values(aboutBg.sources || {}).map((src: any, i: number) => (
          <source key={i} srcSet={src.srcset} type={src.type} sizes='100vw' />
        ))}
        <img
          src={aboutBg.img?.src}
          alt=''
          className={styles.bgImage}
          loading='lazy'
          decoding='async'
        />
      </picture>

      <div className={styles.overlay}>
        <h2>About Us</h2>
        <p>
          Aboda Emperor Services Limited is a fully licensed and professionally
          managed multinational company delivering trusted solutions across
          marine, offshore, engineering, inspection, and energy sectors in
          Africa.
        </p>

        <div className={styles.highlights}>
          <div>
            <Eye size={30} color='#c8a951' />
            <h3>Our Vision</h3>
            <p>
              To be one of Africa’s most respected and efficient marine,
              engineering, and energy service providers through ethical,
              sustainable, and innovative operations.
            </p>
          </div>
          <div>
            <Target size={30} color='#c8a951' />
            <h3>Our Mission</h3>
            <p>
              To deliver world-class marine, engineering, inspection, and energy
              solutions responsibly while creating value for stakeholders,
              employees, and host communities.
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
      </div>
    </section>
  )
}

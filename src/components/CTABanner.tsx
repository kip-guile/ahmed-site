import { Link } from 'react-router-dom'
import styles from './CTABanner.module.scss'

import ctaBg from '../assets/images/cta-bg.jpg?w=480;768;1200;1600&format=webp;avif&as=picture'

export default function CTABanner() {
  return (
    <section className={styles.ctaBanner}>
      <picture className={styles.bg}>
        {Object.values(ctaBg.sources || {}).map((src: any, i: number) => (
          <source key={i} srcSet={src.srcset} type={src.type} sizes='100vw' />
        ))}
        <img
          src={ctaBg.img?.src}
          alt=''
          className={styles.bgImage}
          loading='lazy'
          decoding='async'
        />
      </picture>

      <div className={styles.overlay}>
        <h2>Partner with ABODA Emperor today</h2>
        <Link to='/contact'>Get in Touch</Link>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import styles from './Hero.module.scss'

const slides = [
  {
    src: '/images/hero-mining.jpg',
    alt: 'Mining',
    headline: 'Responsible Gold & Diamond Mining',
    subtitle:
      'Sustainably sourcing Africa’s mineral wealth for global markets.',
  },
  {
    src: '/images/hero-marine.jpg',
    alt: 'Marine',
    headline: 'Marine & Offshore Services',
    subtitle: 'Shipwreck removal, offshore logistics, and vessel chartering.',
  },
  {
    src: '/images/hero-energy.jpg',
    alt: 'Energy',
    headline: 'Renewable Energy Solutions',
    subtitle: 'Delivering solar projects and electrification across Africa.',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setCurrent(index)
  }

  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${slides[current].src})` }}
    >
      <button
        className={`${styles.arrow} ${styles.left}`}
        onClick={prevSlide}
        aria-label='Previous slide'
      >
        <ChevronLeft size={28} />
      </button>

      <div className={styles.overlay}>
        <h1>{slides[current].headline}</h1>
        <p>{slides[current].subtitle}</p>
        <Link to='/services' className={styles.cta}>
          Explore Our Services
        </Link>
      </div>

      <button
        className={`${styles.arrow} ${styles.right}`}
        onClick={nextSlide}
        aria-label='Next slide'
      >
        <ChevronRight size={28} />
      </button>

      {/* Navigation Dots */}
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              current === index ? styles.active : ''
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}

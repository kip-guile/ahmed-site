import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import styles from './Hero.module.scss'

const slides = [
  {
    src: '/images/hero-marine.jpg',
    alt: 'Marine & Offshore',
    headline: 'Marine & Offshore Logistics',
    subtitle:
      'From wreck removal to vessel chartering, we deliver trusted solutions across Africa’s coasts.',
  },
  {
    src: '/images/hero-engineering.jpg',
    alt: 'Engineering',
    headline: 'Engineering & Fabrication',
    subtitle:
      'Expertise in marine construction, welding, fabrication, and industrial maintenance.',
  },
  {
    src: '/images/hero-inspection.jpg',
    alt: 'Inspection & Testing',
    headline: 'Inspection & Testing',
    subtitle:
      'Non-destructive testing, load calibration, and tank cleaning services for safe operations.',
  },
  {
    src: '/images/hero-energy.jpg',
    alt: 'Energy',
    headline: 'Underwater & Energy Solutions',
    subtitle:
      'Specialized underwater repair alongside renewable solar, telecom, and electrification projects.',
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

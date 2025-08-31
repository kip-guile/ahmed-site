import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import styles from './Hero.module.scss'

import marineImg from '../assets/images/hero-marine.jpg?w=480;768;1200;1600&format=webp;avif&as=picture'
import engineeringImg from '../assets/images/hero-engineering.jpg?w=480;768;1200;1600&format=webp;avif&as=picture'
import inspectionImg from '../assets/images/hero-inspection.jpg?w=480;768;1200;1600&format=webp;avif&as=picture'
import energyImg from '../assets/images/hero-energy.jpg?w=480;768;1200;1600&format=webp;avif&as=picture'

type Slide = {
  img: typeof marineImg
  alt: string
  headline: string
  subtitle: string
}

const slides: Slide[] = [
  {
    img: marineImg,
    alt: 'Marine & Offshore',
    headline: 'Marine & Offshore Logistics',
    subtitle:
      'From wreck removal to vessel chartering, we deliver trusted solutions across Africa’s coasts.',
  },
  {
    img: engineeringImg,
    alt: 'Engineering',
    headline: 'Engineering & Fabrication',
    subtitle:
      'Expertise in marine construction, welding, fabrication, and industrial maintenance.',
  },
  {
    img: inspectionImg,
    alt: 'Inspection & Testing',
    headline: 'Inspection & Testing',
    subtitle:
      'Non-destructive testing, load calibration, and tank cleaning services for safe operations.',
  },
  {
    img: energyImg,
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
    <section className={styles.hero}>
      {slides.map((slide, index) => {
        return (
          <picture
            key={index}
            className={`${styles.image} ${
              index === current ? styles.active : ''
            }`}
          >
            {Object.values(slide.img.sources || {}).map(
              (src: { srcset: string; type: string }, i: number) => (
                <source
                  key={i}
                  srcSet={src.srcset}
                  type={src.type}
                  sizes='100vw'
                />
              )
            )}
            <img
              src={slide.img.img?.src}
              alt={slide.alt}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding='async'
            />
          </picture>
        )
      })}

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

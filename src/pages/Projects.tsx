import styles from './Projects.module.scss'
import Card from '../components/Card'
import { Ship, Wrench, Search, Sun } from 'lucide-react'

import projectMarine from '../assets/images/project-marine.jpg?w=480;768;1200;1600&format=webp;avif&as=picture'
import heroEngine from '../assets/images/hero-engineering.jpg?w=480;768;1200;1600&format=webp;avif&as=picture'
import heroInspection from '../assets/images/hero-inspection.jpg?w=480;768;1200;1600&format=webp;avif&as=picture'
import serviceEnergy from '../assets/images/project-energy.jpg?w=480;768;1200;1600&format=webp;avif&as=picture'

export default function Projects() {
  return (
    <section className={styles.projects}>
      <h2>Our Projects</h2>
      <div className={styles.grid}>
        <Card
          image={projectMarine}
          icon={<Ship size={40} color='#c8a951' />}
          title='Marine & Offshore'
          description='Wreck removal, vessel chartering, petroleum supply, dredging, and offshore logistics projects across Africa.'
        />
        <Card
          image={heroEngine}
          icon={<Wrench size={40} color='#c8a951' />}
          title='Engineering & Fabrication'
          description='Marine construction, welding, fabrication, and scaffold works delivered with precision and safety.'
        />
        <Card
          image={heroInspection}
          icon={<Search size={40} color='#c8a951' />}
          title='Inspection & Testing'
          description='Non-destructive testing, equipment calibration, and tank cleaning ensuring compliance and reliability.'
        />
        <Card
          image={serviceEnergy}
          icon={<Sun size={40} color='#c8a951' />}
          title='Energy & Underwater Solutions'
          description='Underwater maintenance and renewable energy projects in solar, telecom, and electrification across Africa.'
        />
      </div>
    </section>
  )
}

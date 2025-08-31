import styles from './Projects.module.scss'
import Card from '../components/Card'
import { Ship, Wrench, Search, Sun } from 'lucide-react'

export default function Projects() {
  return (
    <section className={styles.projects}>
      <h2>Our Projects</h2>
      <div className={styles.grid}>
        <Card
          image='/images/project-marine.jpg'
          icon={<Ship size={40} color='#c8a951' />}
          title='Marine & Offshore'
          description='Wreck removal, vessel chartering, petroleum supply, dredging, and offshore logistics projects across Africa.'
        />
        <Card
          image='/images/hero-engineering.jpg'
          icon={<Wrench size={40} color='#c8a951' />}
          title='Engineering & Fabrication'
          description='Marine construction, welding, fabrication, and scaffold works delivered with precision and safety.'
        />
        <Card
          image='/images/hero-inspection.jpg'
          icon={<Search size={40} color='#c8a951' />}
          title='Inspection & Testing'
          description='Non-destructive testing, equipment calibration, and tank cleaning ensuring compliance and reliability.'
        />
        <Card
          image='/images/project-energy.jpg'
          icon={<Sun size={40} color='#c8a951' />}
          title='Energy & Underwater Solutions'
          description='Underwater maintenance and renewable energy projects in solar, telecom, and electrification across Africa.'
        />
      </div>
    </section>
  )
}

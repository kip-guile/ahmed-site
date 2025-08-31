import styles from './ProjectsPreview.module.scss'
import Card from './Card'
import { Ship, Wrench, Search, Sun } from 'lucide-react'

export default function ProjectsPreview() {
  return (
    <section className={styles.projects}>
      <h2>Our Projects</h2>
      <div className={styles.grid}>
        <Card
          icon={<Ship size={40} color='#c8a951' />}
          title='Marine & Offshore'
          description='Wreck removal, vessel chartering, petroleum supply, dredging, and offshore logistics.'
        />
        <Card
          icon={<Wrench size={40} color='#c8a951' />}
          title='Engineering & Fabrication'
          description='Marine construction, welding, fabrication, sandblasting, painting, and scaffold works.'
        />
        <Card
          icon={<Search size={40} color='#c8a951' />}
          title='Inspection & Testing'
          description='Non-destructive testing, load calibration, and tank cleaning for safe operations.'
        />
        <Card
          icon={<Sun size={40} color='#c8a951' />}
          title='Energy & Underwater Solutions'
          description='Underwater maintenance and renewable energy projects in solar, telecom, and electrification.'
        />
      </div>
    </section>
  )
}

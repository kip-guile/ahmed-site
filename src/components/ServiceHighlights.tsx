import styles from './ServiceHighlights.module.scss'
import Card from './Card'
import { Gem, Ship, Sun } from 'lucide-react'

export default function ServiceHighlights() {
  return (
    <section className={styles.services}>
      <h2>Our Services</h2>
      <div className={styles.grid}>
        <Card
          icon={<Gem size={40} color='#c8a951' />}
          title='Mining'
          description='Gold & diamond exploration, refining, and export with strict ethical compliance.'
        />
        <Card
          icon={<Ship size={40} color='#c8a951' />}
          title='Marine'
          description='Wreck removal, vessel chartering, and offshore logistics for global trade.'
        />
        <Card
          icon={<Sun size={40} color='#c8a951' />}
          title='Energy'
          description='Solar projects, electrification, and telecom infrastructure powering Africa.'
        />
      </div>
    </section>
  )
}

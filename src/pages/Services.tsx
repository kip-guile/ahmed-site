import styles from './Services.module.scss'
import Card from '../components/Card'
import { Gem, Ship, Sun } from 'lucide-react'

export default function Services() {
  return (
    <section className={styles.services}>
      <h2>Our Services</h2>
      <div className={styles.grid}>
        <Card
          image='/images/service-mining.jpg'
          icon={<Gem size={40} color='#c8a951' />}
          title='Mining Division'
          description='Exploration, extraction, refining, and export of gold and diamonds under strict compliance with Kimberley Process and OECD standards.'
        />
        <Card
          image='/images/service-marine.jpg'
          icon={<Ship size={40} color='#c8a951' />}
          title='Marine & Oil/Gas Division'
          description='Shipwreck removal, offshore logistics, and vessel chartering for governments, oil majors, and private clients.'
        />
        <Card
          image='/images/service-energy.jpg'
          icon={<Sun size={40} color='#c8a951' />}
          title='Engineering & Energy Division'
          description='Solar power projects, electrification, and telecom infrastructure development across Africa.'
        />
      </div>
    </section>
  )
}

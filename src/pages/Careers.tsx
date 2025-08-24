import styles from './Careers.module.scss'
import Card from '../components/Card'
import { HardHat, Wrench, Zap } from 'lucide-react'

export default function Careers() {
  return (
    <section className={styles.careers}>
      <h2>Careers</h2>
      <p>
        Be part of a multinational team shaping Africa’s future. We provide
        training, growth, and equal opportunities in mining, marine, and energy.
      </p>
      <div className={styles.grid}>
        <Card
          image='/images/careers-team.jpg'
          icon={<HardHat size={30} color='#c8a951' />}
          title='Mining Engineer'
          description='Support exploration and mining operations with modern and sustainable practices.'
        />
        <Card
          image='/images/careers-marine.jpg'
          icon={<Wrench size={30} color='#c8a951' />}
          title='Marine Technician'
          description='Assist with underwater services, shipwreck removal, and marine logistics projects.'
        />
        <Card
          image='/images/careers-energy.jpg'
          icon={<Zap size={30} color='#c8a951' />}
          title='Solar Project Manager'
          description='Lead electrification and renewable energy initiatives across rural and urban Africa.'
        />
      </div>
    </section>
  )
}

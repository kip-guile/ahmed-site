import styles from './Careers.module.scss'
import Card from '../components/Card'
import { HardHat, Wrench, Zap } from 'lucide-react'

import carTeam from '../assets/images/careers-team.jpg?w=480;768;1200;1600&format=webp;avif&as=picture'
import carMar from '../assets/images/careers-marine.jpg?w=480;768;1200;1600&format=webp;avif&as=picture'
import carEne from '../assets/images/careers-energy.jpg?w=480;768;1200;1600&format=webp;avif&as=picture'

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
          image={carTeam}
          icon={<HardHat size={30} color='#c8a951' />}
          title='Mining Engineer'
          description='Support exploration and mining operations with modern and sustainable practices.'
        />
        <Card
          image={carMar}
          icon={<Wrench size={30} color='#c8a951' />}
          title='Marine Technician'
          description='Assist with underwater services, shipwreck removal, and marine logistics projects.'
        />
        <Card
          image={carEne}
          icon={<Zap size={30} color='#c8a951' />}
          title='Solar Project Manager'
          description='Lead electrification and renewable energy initiatives across rural and urban Africa.'
        />
      </div>
    </section>
  )
}

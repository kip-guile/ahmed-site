import styles from './Services.module.scss'
import Card from '../components/Card'
import { Ship, Wrench, Search, Sun } from 'lucide-react'

import serviceMarine from '../assets/images/service-marine.jpg?w=480;768;1200;1600&format=webp;avif&as=picture'
import heroEngine from '../assets/images/hero-engineering.jpg?w=480;768;1200;1600&format=webp;avif&as=picture'
import heroInspection from '../assets/images/hero-inspection.jpg?w=480;768;1200;1600&format=webp;avif&as=picture'
import serviceEnergy from '../assets/images/service-energy.jpg?w=480;768;1200;1600&format=webp;avif&as=picture'

export default function Services() {
  return (
    <section className={styles.services}>
      <h2>Our Services</h2>
      <div className={styles.grid}>
        <Card
          image={serviceMarine}
          icon={<Ship size={40} color='#c8a951' />}
          title='Marine & Offshore Logistics'
          description='From shipwreck removal and offshore logistics to vessel chartering, petroleum supply, dredging, and complete ship surveys and maintenance.'
        />
        <Card
          image={heroEngine}
          icon={<Wrench size={40} color='#c8a951' />}
          title='Engineering & Fabrication'
          description='Marine construction, welding and fabrication, sandblasting, painting, scaffold erection, dismantling, and industrial gas supply for fabrication projects.'
        />
        <Card
          image={heroInspection}
          icon={<Search size={40} color='#c8a951' />}
          title='Inspection & Testing'
          description='Non-destructive testing (NDT), load testing, equipment calibration, and tank cleaning services to ensure reliability and compliance.'
        />
        <Card
          image={serviceEnergy}
          icon={<Sun size={40} color='#c8a951' />}
          title='Underwater & Energy Solutions'
          description='Specialized underwater repair and maintenance alongside sustainable solar power, telecom, and electrification projects across Africa.'
        />
      </div>
    </section>
  )
}

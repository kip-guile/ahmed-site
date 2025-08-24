import styles from './Projects.module.scss'
import Card from '../components/Card'
import { Pickaxe, Anchor, Zap } from 'lucide-react'

export default function Projects() {
  return (
    <section className={styles.projects}>
      <h2>Our Projects</h2>
      <div className={styles.grid}>
        <Card
          image='/images/project-mining.jpg'
          icon={<Pickaxe size={40} color='#c8a951' />}
          title='Mining Project'
          description='Active gold and diamond mining projects across Africa, supplying responsibly sourced minerals to global markets.'
        />
        <Card
          image='/images/project-marine.jpg'
          icon={<Anchor size={40} color='#c8a951' />}
          title='Marine Project'
          description='Shipwreck removal and salvage operations in Lagos waters, improving marine safety and logistics.'
        />
        <Card
          image='/images/project-energy.jpg'
          icon={<Zap size={40} color='#c8a951' />}
          title='Energy Project'
          description='Solar street lighting and rural electrification initiatives powering homes and industries across Africa.'
        />
      </div>
    </section>
  )
}

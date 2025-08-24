import styles from './ProjectsPreview.module.scss'
import Card from './Card'
import { Pickaxe, Anchor, Zap } from 'lucide-react'

export default function ProjectsPreview() {
  return (
    <section className={styles.projects}>
      <h2>Our Projects</h2>
      <div className={styles.grid}>
        <Card
          icon={<Pickaxe size={40} color='#c8a951' />}
          title='Mining'
          description='Responsible gold & diamond mining across mineral-rich African regions.'
        />
        <Card
          icon={<Anchor size={40} color='#c8a951' />}
          title='Marine'
          description='Shipwreck removal and logistics support for oil & gas operations.'
        />
        <Card
          icon={<Zap size={40} color='#c8a951' />}
          title='Energy'
          description='Renewable energy and electrification projects powering communities.'
        />
      </div>
    </section>
  )
}
